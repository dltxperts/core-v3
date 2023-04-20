// SPDX-License-Identifier: MIT
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Holdings, 2022
pragma solidity ^0.8.10;

import {IVersion} from "@gearbox-protocol/core-v2/contracts/interfaces/IVersion.sol";

enum ClaimAvailability {
    IMMEDIATE,
    DELAYED
}

enum CancellationType {
    RETURN_FUNDS,
    PUSH_WITHDRAWALS
}

interface IWithdrawManagerEvents {
    /// @dev Emitted when a borrower's claimable balance is increased
    event IncreaseClaimableBalance(address indexed token, address indexed holder, uint256 amount);

    /// @dev Emitted when a borrower claims their tokens
    event Claim(address indexed token, address indexed holder, address to, uint256 amount);

    /// @dev Emitted when a Credit Facade is added to BlacklistHelper
    event CreditFacadeAdded(address indexed creditFacade);

    /// @dev Emitted when a Credit Facade is removed from BlacklistHelper
    event CreditFacadeRemoved(address indexed creditFacade);
}

interface IWithdrawManager is IWithdrawManagerEvents, IVersion {
    /// @dev Transfers the sender's claimable balance of token to the specified address
    function claim(address token, address to) external;

    /// @dev Increases the claimable balance for an account
    /// @notice Assumes that the sender transfers the tokens in the same transaction, so doesn't
    ///         perform an explicit transferFrom()
    function addWithdrawal(
        address creditAccount,
        address holder,
        address token,
        uint256 amount,
        ClaimAvailability availability
    ) external;

    /// @dev Returns the amount claimable by an account
    /// @param token token the get the amount for
    /// @param holder Acccount to to get the amount for
    function claimable(address holder, address token) external view returns (uint256);

    function cancelWithdrawals(address creditAccount, CancellationType ctype)
        external
        returns (uint256 tokensToEnable);
}
