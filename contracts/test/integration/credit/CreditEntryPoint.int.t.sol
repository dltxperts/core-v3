// SPDX-License-Identifier: UNLICENSED
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Foundation, 2023.
pragma solidity ^0.8.17;

import {ICreditAccountV3} from "../../../interfaces/ICreditAccountV3.sol";

import {ICreditManagerV3, ICreditManagerV3Events, ManageDebtAction} from "../../../interfaces/ICreditManagerV3.sol";
import {AllowanceAction} from "../../../interfaces/ICreditConfiguratorV3.sol";
import "../../../interfaces/ICreditFacadeV3.sol";
import {IPoolV3Events} from "../../../interfaces/IPoolV3.sol";

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

// SUITES
import {Tokens} from "@gearbox-protocol/sdk-gov/contracts/Tokens.sol";

import {CreditAccountEntryPoint} from "../../../credit/CreditAccountEntryPoint.sol";

import "forge-std/console.sol";

/// @title CreditFacadeTest
/// @notice Designed for unit test purposes only
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

    /// @dev I:[MC-6]: multicall addCollateral and oncreaseDebt works with creditFacade calls as expected
    function test_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected() public creditTest {
        _updateCreditFacade();
        (, uint256 maxDebt) = creditFacade.debtLimits();
        (address creditAccount,) = _openTestCreditAccount();
        vm.roll(block.number + 1);

        address usdcToken = tokenTestSuite.addressOf(Tokens.USDC);
        tokenTestSuite.mint(Tokens.USDC, USER, USDC_EXCHANGE_AMOUNT);
        tokenTestSuite.approve(Tokens.USDC, USER, address(creditManager));

        uint256 usdcMask = creditManager.getTokenMaskOrRevert(usdcToken);

        vm.expectCall(
            address(creditManager),
            abi.encodeCall(ICreditManagerV3.updateQuota, (creditAccount, usdcToken, 10000, 0, uint96(2 * maxDebt)))
        );

        vm.expectCall(
            address(creditManager),
            abi.encodeCall(
                ICreditManagerV3.manageDebt, (creditAccount, 256, usdcMask | 1, ManageDebtAction.INCREASE_DEBT)
            )
        );

        // vm.expectCall(
        //     address(creditManager),
        //     abi.encodeCall(
        //         ICreditManagerV3.fullCollateralCheck, (creditAccount, 3, new uint256[](0), PERCENTAGE_FACTOR, false)
        //     )
        // );

        CreditAccountEntryPoint creditAccountEntryPoint = CreditAccountEntryPoint(address(creditFacade));
        {
            vm.startPrank(creditAccount);
            creditAccountEntryPoint.preExecutionCheck();

            creditAccountEntryPoint.updateQuota(usdcToken, 10000, 0);
            creditAccountEntryPoint.increaseDebt(256);

            creditAccountEntryPoint.postExecutionCheck();
            vm.stopPrank();
        }
    }
}
