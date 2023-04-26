// SPDX-License-Identifier: UNLICENSED
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Holdings, 2022
pragma solidity ^0.8.17;

import {AbstractAdapter} from "../../../adapters/AbstractAdapter.sol";
import {AdapterType} from "../../../interfaces/IAdapter.sol";

/// @title Adapter Mock
contract AdapterMock is AbstractAdapter {
    AdapterType public constant override _gearboxAdapterType = AdapterType.ABSTRACT;
    uint16 public constant override _gearboxAdapterVersion = 1;

    /// @notice Constructor
    /// @param _creditManager Credit manager address
    /// @param _targetContract Target contract address
    constructor(address _creditManager, address _targetContract) AbstractAdapter(_creditManager, _targetContract) {}

    function creditAccount() external view returns (address) {
        return _creditAccount();
    }

    function getMaskOrRevert(address token) external view returns (uint256 tokenMask) {
        return _getMaskOrRevert(token);
    }

    function approveToken(address token, uint256 amount)
        external
        creditFacadeOnly
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        _approveToken(token, amount);
    }

    function dumbCall(uint256 _tokensToEnable, uint256 _tokensToDisable)
        external
        creditFacadeOnly
        returns (uint256 tokensToEnable, uint256 tokensToDisable)
    {
        _execute(dumbCallData());
        tokensToEnable = _tokensToEnable;
        tokensToDisable = _tokensToDisable;
    }

    function dumbCallData() public pure returns (bytes memory) {
        return abi.encodeWithSignature("hello(string)", "world");
    }

    function execute(bytes memory callData) external creditFacadeOnly returns (bytes memory result) {
        result = _execute(callData);
    }

    function executeSwapNoApprove(address tokenIn, address tokenOut, bytes memory callData, bool disableTokenIn)
        external
        creditFacadeOnly
        returns (bytes memory result)
    {
        return _executeSwapNoApprove(tokenIn, tokenOut, callData, disableTokenIn);
    }

    function executeSwapSafeApprove(address tokenIn, address tokenOut, bytes memory callData, bool disableTokenIn)
        external
        creditFacadeOnly
        returns (bytes memory result)
    {
        return _executeSwapSafeApprove(tokenIn, tokenOut, callData, disableTokenIn);
    }

    fallback() external creditFacadeOnly {
        _execute(msg.data);
    }
}
