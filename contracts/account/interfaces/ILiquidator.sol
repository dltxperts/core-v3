// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

struct LiquidatableCollateral {
    address token;
    uint256 amount;
}

interface ILiquidationReceiver {
    function onLiquidation(
        address initiator,
        address creditAccount,
        LiquidatableCollateral[] calldata assets,
        uint256 amount, // ?
        bytes calldata data
    ) external;
}

interface ILiquidator {
    ////////////////////////////////////////////////////////////////
    // liquidation
    ////////////////////////////////////////////////////////////////

    // Errors
    // TBD

    // Events
    // TBD

    /**
     * @return isLiquidatable Whether the credit account is liquidatable.
     */
    function isLiquidatable() external view returns (bool);

    /**
     * @dev Initiate credit account liquidation.
     * @param liquidator receiver of the tokens.
     * @param assets The assets to liquidate.
     * @param data Arbitrary data structure, intended to contain liquidator-specific parameters.
     * @return repaidAmount The amount of underlying tokens repaid.
     */
    function liquidate(ILiquidationReceiver liquidator, LiquidatableCollateral[] calldata assets, bytes calldata data)
        external
        returns (uint256 repaidAmount);
}
