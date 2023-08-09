/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAccountFactoryV3,
  IAccountFactoryV3Interface,
} from "../../IAccountFactoryV3.sol/IAccountFactoryV3";

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
      {
        indexed: false,
        internalType: "address",
        name: "masterCreditAccount",
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
        name: "creditAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "DeployCreditAccount",
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
        name: "creditManager",
        type: "address",
      },
    ],
    name: "ReturnCreditAccount",
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
        name: "creditManager",
        type: "address",
      },
    ],
    name: "TakeCreditAccount",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "addCreditManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "rescue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
    ],
    name: "returnCreditAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "takeCreditAccount",
    outputs: [
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
    ],
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

export class IAccountFactoryV3__factory {
  static readonly abi = _abi;
  static createInterface(): IAccountFactoryV3Interface {
    return new utils.Interface(_abi) as IAccountFactoryV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccountFactoryV3 {
    return new Contract(address, _abi, signerOrProvider) as IAccountFactoryV3;
  }
}
