// SPDX-License-Identifier: BUSL-1.1
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Foundation, 2024.
pragma solidity ^0.8.24;

// modified from https://github.com/Philogy/transient-goodies/blob/main/src/TransientPrimitives.sol

struct tuint256 {
    uint256 __placeholder;
}

struct taddress {
    uint256 __placeholder;
}

using TransientPrimitives for tuint256 global;
using TransientPrimitives for taddress global;

library TransientPrimitives {
    function get(tuint256 storage ptr) internal view returns (uint256 value) {
        /// @solidity memory-safe-assembly
        assembly {
            value := tload(ptr.slot)
        }
    }

    function get(taddress storage ptr) internal view returns (address value) {
        /// @solidity memory-safe-assembly
        assembly {
            value := tload(ptr.slot)
        }
    }

    function set(tuint256 storage ptr, uint256 value) internal {
        /// @solidity memory-safe-assembly
        assembly {
            tstore(ptr.slot, value)
        }
    }

    function set(taddress storage ptr, address value) internal {
        /// @solidity memory-safe-assembly
        assembly {
            tstore(ptr.slot, value)
        }
    }
}
