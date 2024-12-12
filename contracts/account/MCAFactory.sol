// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

import {IAccountFactoryV3} from "../interfaces/IAccountFactoryV3.sol";
import {ICreditManagerV3} from "../interfaces/ICreditManagerV3.sol";
import {MCA} from "./MCA.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {MasterCreditAccountAlreadyDeployedException} from "../interfaces/IExceptions.sol";

import "forge-std/console.sol";

// Minimal Credit Account Factory compatible with CreditManagerV3
contract MCAFactory is IAccountFactoryV3, Ownable {
    /// @notice Contract version
    uint256 public constant override version = 3_10;

    /// @notice Contract type
    bytes32 public constant override contractType = "ACCOUNT_FACTORY";

    address public masterCreditAccount;

    /// @notice Constructor
    /// @param owner_ Contract owner
    constructor(address owner_) {
        transferOwnership(owner_);
    }

    function takeCreditAccount(uint256, uint256) external override returns (address creditAccount) {
        creditAccount = Clones.clone(masterCreditAccount);

        emit DeployCreditAccount({creditAccount: creditAccount, creditManager: msg.sender});
        emit TakeCreditAccount({creditAccount: creditAccount, creditManager: msg.sender});
    }

    function returnCreditAccount(address creditAccount) external override {
        revert("not implemented");
    }

    // ------------- //
    // CONFIGURATION //
    // ------------- //

    function addCreditManager(address creditManager) external override onlyOwner {
        if (masterCreditAccount != address(0)) {
            revert MasterCreditAccountAlreadyDeployedException();
        }

        address creditFacade = ICreditManagerV3(creditManager).creditFacade();
        masterCreditAccount = address(new MCA(creditFacade));

        emit AddCreditManager(creditManager, masterCreditAccount);
    }

    function rescue(address creditAccount, address target, bytes calldata data) external override {
        revert("not implemented");
    }

    function delay() external pure returns (uint40) {
        return 0;
    }
}
