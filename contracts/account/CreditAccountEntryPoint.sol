// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

// Local interfaces
import {ICreditAccount, Quota} from "./interfaces/ICreditAccount.sol";

// Core interfaces
// import {REVERT_ON_FORBIDDEN_TOKENS_FLAG, ALL_PERMISSIONS} from "../interfaces/ICreditFacadeV3Multicall.sol";
import {ICreditManagerV3} from "../interfaces/ICreditManagerV3.sol";
import {CollateralDebtData, CollateralCalcTask} from "../interfaces/ICreditManagerV3.sol";
import {IPriceOracleV3, PriceUpdate} from "../interfaces/IPriceOracleV3.sol";
import {IPoolQuotaKeeperV3} from "../interfaces/IPoolQuotaKeeperV3.sol";
import {NotImplementedException} from "../interfaces/IExceptions.sol";

// Libraries
import {PERCENTAGE_FACTOR, UNDERLYING_TOKEN_MASK} from "../libraries/Constants.sol";
import {BalanceDelta} from "../libraries/BalancesLogic.sol";
import {BitMask} from "../libraries/BitMask.sol";
import {CreditLogic} from "../libraries/CreditLogic.sol";

// Contracts
import {CreditFacadeV3, ManageDebtAction} from "../credit/CreditFacadeV3.sol";

// Testing
import {console} from "forge-std/console.sol";

contract CreditAccountEntryPoint is ICreditAccount, CreditFacadeV3 {
    using BitMask for uint256;

    // STATE VARIABLES
    uint256 internal _enabledTokensMask;

    constructor(address _creditManager, address _botList, address _weth, address _degenNFT, bool _expirable)
        CreditFacadeV3(_creditManager, _botList, _weth, _degenNFT, _expirable)
    {}

    // MODIFIERS

    modifier whenExecuting() {
        address creditAccount = _getActiveCreditAccountOrRevert();
        if (creditAccount != msg.sender) revert();
        _;
    }

    /*//////////////////////////////////////////////////////////////////////////
                        Collateral check hooks
    //////////////////////////////////////////////////////////////////////////*/

    function preExecutionCheck() external whenNotPaused whenNotExpired {
        address creditAccount = msg.sender;
        _setActiveCreditAccount(creditAccount);

        _enabledTokensMask = _enabledTokensMaskOf(creditAccount);
    }

    function postExecutionCheck() external whenExecuting {
        address creditAccount = msg.sender;
        _unsetActiveCreditAccount();

        _fullCollateralCheck({
            creditAccount: creditAccount,
            enabledTokensMask: _enabledTokensMask,
            collateralHints: new uint256[](0),
            minHealthFactor: PERCENTAGE_FACTOR,
            useSafePrices: true
        });
    }

    /*//////////////////////////////////////////////////////////////////////////
                        Debt management
    //////////////////////////////////////////////////////////////////////////*/

    function increaseDebt(uint256 amount) external whenExecuting {
        address creditAccount = msg.sender;
        uint256 enabledTokensMask = _enabledTokensMask;

        _manageDebt(creditAccount, amount, enabledTokensMask, ManageDebtAction.INCREASE_DEBT);
    }

    function decreaseDebt(uint256 amount) external whenExecuting {
        address creditAccount = msg.sender;
        uint256 enabledTokensMask = _enabledTokensMask;

        _manageDebt(creditAccount, amount, enabledTokensMask, ManageDebtAction.DECREASE_DEBT);
    }

    /*//////////////////////////////////////////////////////////////////////////
                        Quota management
    //////////////////////////////////////////////////////////////////////////*/

    function updateQuota(address token, int256 quotaChange, uint256 minQuota) external override whenExecuting {
        address creditAccount = msg.sender;
        uint256 forbiddenTokensMask = _forbiddenTokensMaskRoE(type(uint256).max);

        (_enabledTokensMask,) = _updateQuota(creditAccount, msg.data[4:], _enabledTokensMask, forbiddenTokensMask);
    }

    /*//////////////////////////////////////////////////////////////////////////
                        Getters
    //////////////////////////////////////////////////////////////////////////*/

    function getUnderlying() external view returns (address) {
        return underlying;
    }

    function getCollateralTokens() external view returns (address[] memory) {
        // (?) get by token masks
        return IPoolQuotaKeeperV3(ICreditManagerV3(creditManager).poolQuotaKeeper()).quotedTokens();
    }

    function getQuota(address token) external view returns (uint256) {
        address creditAccount = msg.sender;
        uint256 quota = _getAccountQuota(creditAccount, token);
        return quota;
    }

    function getQuotas() external view returns (Quota[] memory) {
        address creditAccount = msg.sender;
        uint256 enabledTokensMask = _enabledTokensMaskOf(creditAccount);

        uint256 tokensCount = enabledTokensMask.calcEnabledTokens();
        Quota[] memory quotas = new Quota[](tokensCount);

        // handle underlying token
        enabledTokensMask = enabledTokensMask.disable(UNDERLYING_TOKEN_MASK);
        quotas[0] = Quota({token: underlying, quota: type(uint256).max});

        // handle other enabled tokens
        uint256 i = 1;
        while (enabledTokensMask != 0) {
            uint256 tokenMask = enabledTokensMask.lsbMask();
            enabledTokensMask ^= tokenMask;

            address token = _getTokenByMask(tokenMask);
            quotas[i] = Quota({token: token, quota: _getAccountQuota(creditAccount, token)});
            i++;
        }

        return quotas;
    }

    function getDebt() external view returns (uint256) {
        address creditAccount = msg.sender;
        CollateralDebtData memory cdd =
            ICreditManagerV3(creditManager).calcDebtAndCollateral(creditAccount, CollateralCalcTask.DEBT_ONLY);
        // (?) amountWithFee
        return CreditLogic.calcTotalDebt(cdd);
    }

    function getCollateralPrice(address token) external view returns (uint256) {
        IPriceOracleV3 priceOracle = IPriceOracleV3(ICreditManagerV3(creditManager).priceOracle());
        return priceOracle.convert(1e18, token, underlying) / 1e18;
    }

    // INTERNAL FUNCTIONS

    function _getAccountQuota(address creditAccount, address token) internal view returns (uint256) {
        (uint96 quota,) =
            IPoolQuotaKeeperV3(ICreditManagerV3(creditManager).poolQuotaKeeper()).getQuota(creditAccount, token);
        return quota;
    }

    function _getActiveCreditAccountOrRevert() internal view returns (address) {
        return ICreditManagerV3(creditManager).getActiveCreditAccountOrRevert();
    }
}
