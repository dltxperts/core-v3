/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPoolQuotaKeeperV3,
  IPoolQuotaKeeperV3Interface,
} from "../../IPoolQuotaKeeperV3.sol/IPoolQuotaKeeperV3";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "AddCreditManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "AddQuotaToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newGauge",
        type: "address",
      },
    ],
    name: "SetGauge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "fee",
        type: "uint16",
      },
    ],
    name: "SetQuotaIncreaseFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "limit",
        type: "uint96",
      },
    ],
    name: "SetTokenLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int96",
        name: "quotaChange",
        type: "int96",
      },
    ],
    name: "UpdateQuota",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "rate",
        type: "uint16",
      },
    ],
    name: "UpdateTokenQuotaRate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "accrueQuotaInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
    ],
    name: "addCreditManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addQuotaToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creditManagers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "cumulativeIndex",
    outputs: [
      {
        internalType: "uint192",
        name: "",
        type: "uint192",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gauge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getQuota",
    outputs: [
      {
        internalType: "uint96",
        name: "quota",
        type: "uint96",
      },
      {
        internalType: "uint192",
        name: "cumulativeIndexLU",
        type: "uint192",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getQuotaAndOutstandingInterest",
    outputs: [
      {
        internalType: "uint96",
        name: "quoted",
        type: "uint96",
      },
      {
        internalType: "uint128",
        name: "outstandingInterest",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getQuotaRate",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenQuotaParams",
    outputs: [
      {
        internalType: "uint16",
        name: "rate",
        type: "uint16",
      },
      {
        internalType: "uint192",
        name: "cumulativeIndexLU",
        type: "uint192",
      },
      {
        internalType: "uint16",
        name: "quotaIncreaseFee",
        type: "uint16",
      },
      {
        internalType: "uint96",
        name: "totalQuoted",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "limit",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isQuotedToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastQuotaRateUpdate",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolQuotaRevenue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quotedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "setLimitsToZero",
        type: "bool",
      },
    ],
    name: "removeQuotas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gauge",
        type: "address",
      },
    ],
    name: "setGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "limit",
        type: "uint96",
      },
    ],
    name: "setTokenLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "fee",
        type: "uint16",
      },
    ],
    name: "setTokenQuotaIncreaseFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "int96",
        name: "requestedChange",
        type: "int96",
      },
      {
        internalType: "uint96",
        name: "minQuota",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "maxQuota",
        type: "uint96",
      },
    ],
    name: "updateQuota",
    outputs: [
      {
        internalType: "uint128",
        name: "caQuotaInterestChange",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fees",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "enableToken",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "disableToken",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateRates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IPoolQuotaKeeperV3__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolQuotaKeeperV3Interface {
    return new utils.Interface(_abi) as IPoolQuotaKeeperV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolQuotaKeeperV3 {
    return new Contract(address, _abi, signerOrProvider) as IPoolQuotaKeeperV3;
  }
}
