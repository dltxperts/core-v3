// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

import {
    ICreditFacadeV3Multicall,
    REVERT_ON_FORBIDDEN_TOKENS_FLAG,
    ALL_PERMISSIONS
} from "../interfaces/ICreditFacadeV3Multicall.sol";
import {PERCENTAGE_FACTOR} from "../libraries/Constants.sol";
import {CreditFacadeV3, ManageDebtAction} from "./CreditFacadeV3.sol";
import {PriceUpdate} from "../interfaces/IPriceOracleV3.sol";
import {NotImplementedException} from "../interfaces/IExceptions.sol";
import {BalanceDelta} from "../libraries/BalancesLogic.sol";
import {ICreditManagerV3} from "../interfaces/ICreditManagerV3.sol";

contract CreditAccountEntryPoint is ICreditFacadeV3Multicall, CreditFacadeV3 {
    // openCreditAccount
    // closeCreditAccount

    uint256 internal _enabledTokensMask;

    constructor(address _creditManager, address _botList, address _weth, address _degenNFT, bool _expirable)
        CreditFacadeV3(_creditManager, _botList, _weth, _degenNFT, _expirable)
    {}

    function _getActiveCreditAccountOrRevert() internal view returns (address) {
        return ICreditManagerV3(creditManager).getActiveCreditAccountOrRevert();
    }

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

    function updateQuota(address token, int96 quotaChange, uint96 minQuota) external override whenExecuting {
        address creditAccount = msg.sender;
        uint256 forbiddenTokensMask = _forbiddenTokensMaskRoE(type(uint256).max);

        (_enabledTokensMask,) = _updateQuota(creditAccount, msg.data[4:], _enabledTokensMask, forbiddenTokensMask);
    }

    // MODIFIERS

    modifier whenExecuting() {
        address creditAccount = _getActiveCreditAccountOrRevert();
        if (creditAccount != msg.sender) revert();
        _;
    }

    /// NOT IMPLEMENTED

    function onDemandPriceUpdates(PriceUpdate[] calldata updates) external override {
        revert NotImplementedException();
    }

    function storeExpectedBalances(BalanceDelta[] calldata balanceDeltas) external override {
        revert NotImplementedException();
    }

    function compareBalances() external override {
        revert NotImplementedException();
    }

    function addCollateralWithPermit(address token, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s)
        external
        override
    {
        revert NotImplementedException();
    }

    function addCollateral(address token, uint256 amount) external override {
        revert NotImplementedException();
    }

    function withdrawCollateral(address token, uint256 amount, address to) external override {
        revert NotImplementedException();
    }

    function setFullCheckParams(uint256[] calldata collateralHints, uint16 minHealthFactor) external override {
        revert NotImplementedException();
    }

    function setBotPermissions(address bot, uint192 permissions) external override {
        revert NotImplementedException();
    }
}
