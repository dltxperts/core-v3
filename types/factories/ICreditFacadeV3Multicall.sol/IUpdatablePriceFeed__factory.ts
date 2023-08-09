/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUpdatablePriceFeed,
  IUpdatablePriceFeedInterface,
} from "../../ICreditFacadeV3Multicall.sol/IUpdatablePriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IUpdatablePriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IUpdatablePriceFeedInterface {
    return new utils.Interface(_abi) as IUpdatablePriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUpdatablePriceFeed {
    return new Contract(address, _abi, signerOrProvider) as IUpdatablePriceFeed;
  }
}
