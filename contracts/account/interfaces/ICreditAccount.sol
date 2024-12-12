// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

struct Quota {
    address token;
    uint256 quota; // amount in underlying
        // uint256 amount; // amount in token - less than quota
}

interface ICreditAccount {
    // Errors
    // TBD

    // Events
    // TBD

    /**
     * @dev Returns the address of the underlying token used for borrowing debt.
     * @return underlying The address of the underlying token.
     */
    function getUnderlying() external view returns (address);

    ////////////////////////////////////////////////////////////////
    // collateral & quotas
    ////////////////////////////////////////////////////////////////

    /**
     * @return collateralTokens List of the tokens that can be used as collateral.
     */
    function getCollateralTokens() external view returns (address[] memory);
    /**
     * @return enabledCollateral List of tokens and their amounts that count as collateral.
     */
    function getQuotas() external view returns (Quota[] memory);

    function getQuota(address token) external view returns (uint256);

    /**
     * @dev Update quota for a token.
     * @param token The address of the token to update the quota for.
     * @param quotaChange The change to the quota.
     * @param minQuota The minimum quota after the change.
     *
     * MUST revert if the token is not in the collateral list
     * MUST revert if called outside of execution context
     */
    function updateQuota(address token, int256 quotaChange, uint256 minQuota) external; // params from simulation?

    // removeQuota

    ////////////////////////////////////////////////////////////////
    // debt
    ////////////////////////////////////////////////////////////////

    /**
     * @return debt The current debt of the credit account denominated in underlying.
     */
    function getDebt() external view returns (uint256);

    /**
     * @dev Increase debt by a given amount.
     * @param amount The amount to increase the debt by.
     *
     * MUST revert if called outside of execution context
     */
    function increaseDebt(uint256 amount) external;

    /**
     * @dev Decrease debt by a given amount.
     * @param amount The amount to decrease the debt by.
     *
     * MUST revert if called outside of execution context
     */
    function decreaseDebt(uint256 amount) external;

    /**
     * @dev Returns the price of a collateral token in units of underlying.
     * @param token The address of the collateral token.
     * @return price The price of the collateral token in underlying.
     */
    function getCollateralPrice(address token) external view returns (uint256);
}
