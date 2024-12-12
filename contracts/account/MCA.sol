// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

import {CreditAccountV3} from "../credit/CreditAccountV3.sol";
import {ICreditAccount} from "./interfaces/ICreditAccount.sol";
import {ILiquidator, ILiquidationReceiver} from "./interfaces/ILiquidator.sol";
import {ICreditFacadeV3} from "../interfaces/ICreditFacadeV3.sol";
import {ICreditManagerV3} from "../interfaces/ICreditManagerV3.sol";
import {IPriceOracleV3} from "../interfaces/IPriceOracleV3.sol";
import {CreditLogic} from "../libraries/CreditLogic.sol";
import {CollateralDebtData, CollateralCalcTask} from "../interfaces/ICreditManagerV3.sol";
import {CreditAccountEntryPoint} from "./CreditAccountEntryPoint.sol";

import {IPoolQuotaKeeperV3} from "../interfaces/IPoolQuotaKeeperV3.sol";

import {ICreditAccount} from "./interfaces/ICreditAccount.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";

// Minimal Credit Account
contract MCA is CreditAccountV3 {
    using Address for address;

    address public immutable creditFacade;

    constructor(address _creditFacade) CreditAccountV3(ICreditFacadeV3(_creditFacade).creditManager()) {
        creditFacade = _creditFacade;
    }

    modifier withHooks() {
        CreditAccountEntryPoint(creditFacade).preExecutionCheck();
        _;
        CreditAccountEntryPoint(creditFacade).postExecutionCheck();
    }

    fallback(bytes calldata data) external returns (bytes memory) {
        return creditFacade.functionCall(data);
    }
}
