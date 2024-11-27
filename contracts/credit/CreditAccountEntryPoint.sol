pragma solidity ^0.8.24;

import {
    ICreditFacadeV3Multicall,
    REVERT_ON_FORBIDDEN_TOKENS_FLAG,
    ALL_PERMISSIONS
} from "../interfaces/ICreditFacadeV3Multicall.sol";
import {PERCENTAGE_FACTOR} from "../libraries/Constants.sol";
import {CreditFacadeV3, ManageDebtAction} from "./CreditFacadeV3.sol";
import {PriceUpdate} from "../interfaces/IPriceOracleV3.sol";
import {BalanceDelta} from "../libraries/BalancesLogic.sol";
import {tuint256, taddress} from "../libraries/TransientPrimitives.sol";

contract CreditAccountEntryPoint is ICreditFacadeV3Multicall, CreditFacadeV3 {
    // @notice Transient context
    struct TransientContext {
        taddress creditAccount;
        tuint256 enabledTokensMask;
        tuint256 forbiddenTokensMask;
        tuint256 flags;
    }

    TransientContext internal transientContext;

    // openCreditAccount
    // closeCreditAccount

    constructor(address _creditManager, address _botList, address _weth, address _degenNFT, bool _expirable)
        CreditFacadeV3(_creditManager, _botList, _weth, _degenNFT, _expirable)
    {}

    function preExecutionCheck() external whenNotPaused whenNotExpired {
        address creditAccount = transientContext.creditAccount.get();

        if (creditAccount != address(0)) {}

        transientContext.creditAccount.set(msg.sender);
        transientContext.enabledTokensMask.set(_enabledTokensMaskOf(msg.sender));
        transientContext.forbiddenTokensMask.set(_forbiddenTokensMaskRoE(type(uint256).max));
        transientContext.flags.set(ALL_PERMISSIONS);
    }

    function postExecutionCheck() external {
        address creditAccount = transientContext.creditAccount.get();
        if (creditAccount != msg.sender) revert();

        _fullCollateralCheck({
            creditAccount: creditAccount,
            enabledTokensMask: transientContext.enabledTokensMask.get(),
            collateralHints: new uint256[](0),
            minHealthFactor: PERCENTAGE_FACTOR,
            useSafePrices: true
        });
    }

    function increaseDebt(uint256 amount) external whenExecuting {
        address creditAccount = transientContext.creditAccount.get();
        uint256 enabledTokensMask = transientContext.enabledTokensMask.get();
        uint256 flags = transientContext.flags.get();

        _manageDebt(creditAccount, amount, enabledTokensMask, ManageDebtAction.INCREASE_DEBT);
        transientContext.flags.set(flags | REVERT_ON_FORBIDDEN_TOKENS_FLAG);
    }

    function decreaseDebt(uint256 amount) external whenExecuting {
        address creditAccount = transientContext.creditAccount.get();
        uint256 enabledTokensMask = transientContext.enabledTokensMask.get();

        _manageDebt(creditAccount, amount, enabledTokensMask, ManageDebtAction.DECREASE_DEBT);
    }

    function updateQuota(address token, int96 quotaChange, uint96 minQuota) external override whenExecuting {
        address creditAccount = transientContext.creditAccount.get();
        uint256 enabledTokensMask = transientContext.enabledTokensMask.get();
        uint256 forbiddenTokensMask = transientContext.forbiddenTokensMask.get();

        (enabledTokensMask, forbiddenTokensMask) =
            _updateQuota(creditAccount, msg.data[4:], enabledTokensMask, forbiddenTokensMask);

        transientContext.enabledTokensMask.set(enabledTokensMask);
        transientContext.forbiddenTokensMask.set(forbiddenTokensMask);
    }

    // MODIFIERS

    modifier whenExecuting() {
        address creditAccount = transientContext.creditAccount.get();
        if (creditAccount != msg.sender) revert();
        _;
    }

    /// NOT IMPLEMENTED

    function onDemandPriceUpdates(PriceUpdate[] calldata updates) external override {
        revert("Not implemented");
    }

    function storeExpectedBalances(BalanceDelta[] calldata balanceDeltas) external override {
        revert("Not implemented");
    }

    function compareBalances() external override {
        revert("Not implemented");
    }

    function addCollateralWithPermit(address token, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s)
        external
        override
    {
        revert("Not implemented");
    }

    function addCollateral(address token, uint256 amount) external override {
        revert("Not implemented");
    }

    function withdrawCollateral(address token, uint256 amount, address to) external override {
        revert("Not implemented");
    }

    function setFullCheckParams(uint256[] calldata collateralHints, uint16 minHealthFactor) external override {
        revert("Not implemented");
    }

    function setBotPermissions(address bot, uint192 permissions) external override {
        revert("Not implemented");
    }
}
