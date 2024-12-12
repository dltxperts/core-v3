// SPDX-License-Identifier: UNLICENSED
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Foundation, 2023.
pragma solidity ^0.8.17;

import {ICreditAccountV3} from "../../../interfaces/ICreditAccountV3.sol";

import {ICreditManagerV3, ICreditManagerV3Events, ManageDebtAction} from "../../../interfaces/ICreditManagerV3.sol";
import {AllowanceAction} from "../../../interfaces/ICreditConfiguratorV3.sol";
import "../../../interfaces/ICreditFacadeV3.sol";
import {IPoolV3Events} from "../../../interfaces/IPoolV3.sol";
import {IPriceOracleV3} from "../../../interfaces/IPriceOracleV3.sol";

import {UNDERLYING_TOKEN_MASK} from "../../../libraries/Constants.sol";
import {MultiCallBuilder} from "../../lib/MultiCallBuilder.sol";

// CONSTANTS
import {BOT_PERMISSIONS_SET_FLAG, PERCENTAGE_FACTOR} from "../../../libraries/Constants.sol";

// TESTS
import "../../lib/constants.sol";
import {BalanceHelper} from "../../helpers/BalanceHelper.sol";
import {IntegrationTestHelper} from "../../helpers/IntegrationTestHelper.sol";

// EXCEPTIONS
import "../../../interfaces/IExceptions.sol";

// MOCKS
import {AdapterMock} from "../../mocks//core/AdapterMock.sol";
import {PriceFeedMock} from "../../mocks/oracles/PriceFeedMock.sol";
// SUITES
import {Tokens} from "@gearbox-protocol/sdk-gov/contracts/Tokens.sol";

import {CreditAccountEntryPoint} from "../../../account/CreditAccountEntryPoint.sol";
import {MCA} from "../../../account/MCA.sol";
import {MCAFactory} from "../../../account/MCAFactory.sol";

import {ICreditAccount, Quota} from "../../../account/interfaces/ICreditAccount.sol";

import "forge-std/console.sol";

contract CreditEntryPointIntegrationTest is
    Test,
    BalanceHelper,
    IntegrationTestHelper,
    ICreditManagerV3Events,
    ICreditFacadeV3Events,
    IPoolV3Events
{
    function _updateCreditFacade() internal {
        CreditAccountEntryPoint creditAccountEntryPoint = new CreditAccountEntryPoint(
            address(creditManager), address(botList), address(weth), address(degenNFT), expirable
        );

        vm.etch(address(creditFacade), address(creditAccountEntryPoint).code);
    }

    function _updateAccountFactory() internal {
        MCAFactory mcaFactory = new MCAFactory(CONFIGURATOR);

        vm.etch(address(accountFactory), address(mcaFactory).code);

        vm.prank(CONFIGURATOR);
        MCAFactory(address(accountFactory)).addCreditManager(address(creditManager));
    }

    function _setReservePriceFeed(address token) internal {
        address reserveFeed = address(new PriceFeedMock(10 ** 8, 8));

        IPriceOracleV3 priceOracle = IPriceOracleV3(ICreditManagerV3(creditFacade.creditManager()).priceOracle());

        vm.prank(CONFIGURATOR);
        priceOracle.setReservePriceFeed(token, reserveFeed, 1 hours);
    }

    function _openEmptyCreditAccount() internal returns (address creditAccount) {
        vm.startPrank(USER);
        creditAccount = creditFacade.openCreditAccount(USER, MultiCallBuilder.build(), 0);
        vm.stopPrank();

        vm.label(creditAccount, "creditAccount");
    }

    function test_add_collateral_and_increase_debt_works_as_expected() public creditTest {
        _updateCreditFacade();

        (uint256 minDebt, uint256 maxDebt) = creditFacade.debtLimits();
        address creditAccount = _openEmptyCreditAccount();
        ICreditAccount mca = ICreditAccount(creditAccount);

        vm.roll(block.number + 1);

        address usdcToken = tokenTestSuite.addressOf(Tokens.USDC);

        _setReservePriceFeed(usdcToken);
        tokenTestSuite.mint(Tokens.USDC, creditAccount, maxDebt);

        int96 quota = int96(uint96(maxDebt));

        vm.expectCall(
            address(creditManager),
            abi.encodeCall(ICreditManagerV3.updateQuota, (creditAccount, usdcToken, quota, 0, uint96(2 * quota)))
        );

        uint256 expectedTokenMask =
            UNDERLYING_TOKEN_MASK | ICreditManagerV3(creditManager).getTokenMaskOrRevert(usdcToken);

        vm.expectCall(
            address(creditManager),
            abi.encodeCall(
                ICreditManagerV3.manageDebt,
                (creditAccount, minDebt, UNDERLYING_TOKEN_MASK, ManageDebtAction.INCREASE_DEBT)
            )
        );

        vm.expectCall(
            address(creditManager),
            abi.encodeCall(
                ICreditManagerV3.fullCollateralCheck,
                (creditAccount, expectedTokenMask, new uint256[](0), PERCENTAGE_FACTOR, true)
            )
        );

        CreditAccountEntryPoint creditAccountEntryPoint = CreditAccountEntryPoint(address(creditFacade));
        {
            vm.startPrank(creditAccount);
            creditAccountEntryPoint.preExecutionCheck();

            creditAccountEntryPoint.increaseDebt(minDebt);
            creditAccountEntryPoint.updateQuota(usdcToken, quota, 0);

            creditAccountEntryPoint.postExecutionCheck();
            vm.stopPrank();
        }

        uint256 actualTokenMask = ICreditManagerV3(creditManager).enabledTokensMaskOf(creditAccount);
        assertEq(actualTokenMask, expectedTokenMask);
    }

    function test_getDebt() public creditTest {
        _updateCreditFacade();

        address creditAccount = _openEmptyCreditAccount();
        tokenTestSuite.mint(underlying, creditAccount, creditAccountAmount);
        (uint256 minDebt, uint256 maxDebt) = creditFacade.debtLimits();

        vm.roll(block.number + 1);

        CreditAccountEntryPoint creditAccountEntryPoint = CreditAccountEntryPoint(address(creditFacade));
        uint256 actualDebt = 0;
        {
            vm.startPrank(creditAccount);
            creditAccountEntryPoint.preExecutionCheck();
            creditAccountEntryPoint.increaseDebt(minDebt);
            creditAccountEntryPoint.postExecutionCheck();

            actualDebt = creditAccountEntryPoint.getDebt();

            vm.stopPrank();
        }

        assertEq(actualDebt, minDebt);
    }

    function test_update_and_get_quotas_works_as_expected() public creditTest {
        _updateCreditFacade();

        address creditAccount = _openEmptyCreditAccount();
        tokenTestSuite.mint(underlying, creditAccount, creditAccountAmount);
        tokenTestSuite.mint(Tokens.USDC, creditAccount, 1000_0000);
        tokenTestSuite.mint(Tokens.USDT, creditAccount, 1000_0000);

        vm.roll(block.number + 1);

        address usdcToken = tokenTestSuite.addressOf(Tokens.USDC);
        address usdtToken = tokenTestSuite.addressOf(Tokens.USDT);

        console.log("usdcToken", usdcToken);
        console.log("usdtToken", usdtToken);

        CreditAccountEntryPoint creditAccountEntryPoint = CreditAccountEntryPoint(address(creditFacade));
        {
            vm.startPrank(creditAccount);
            creditAccountEntryPoint.preExecutionCheck();
            creditAccountEntryPoint.increaseDebt(creditAccountAmount);
            creditAccountEntryPoint.updateQuota(usdcToken, 1000_0000, 0);
            creditAccountEntryPoint.updateQuota(usdtToken, 1000_0000, 0);
            creditAccountEntryPoint.postExecutionCheck();
            vm.stopPrank();
        }

        vm.prank(creditAccount);
        Quota[] memory quotas = creditAccountEntryPoint.getQuotas();
        console.log("quotas.length", quotas.length);

        uint256 expectedTokenMask = UNDERLYING_TOKEN_MASK
            | ICreditManagerV3(creditManager).getTokenMaskOrRevert(usdcToken)
            | ICreditManagerV3(creditManager).getTokenMaskOrRevert(usdtToken);
        uint256 actualTokenMask = ICreditManagerV3(creditManager).enabledTokensMaskOf(creditAccount);
        assertEq(actualTokenMask, expectedTokenMask);

        assertEq(quotas.length, 3);
        if (quotas[0].token == underlying) {
            assertEq(quotas[0].quota, type(uint256).max);
        } else if (quotas[1].token == usdcToken) {
            assertEq(quotas[1].quota, 500);
        } else if (quotas[2].token == usdtToken) {
            assertEq(quotas[2].quota, 500);
        }
    }
}
