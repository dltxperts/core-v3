/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface ICreditFacadeV2V2Interface extends utils.Interface {
  functions: {
    "params()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "params"): FunctionFragment;

  encodeFunctionData(functionFragment: "params", values?: undefined): string;

  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;

  events: {};
}

export interface ICreditFacadeV2V2 extends BaseContract {
  contractName: "ICreditFacadeV2V2";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICreditFacadeV2V2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    params(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, number] & {
        maxBorrowedAmountPerBlock: BigNumber;
        isIncreaseDebtForbidden: boolean;
        expirationDate: number;
      }
    >;
  };

  params(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, number] & {
      maxBorrowedAmountPerBlock: BigNumber;
      isIncreaseDebtForbidden: boolean;
      expirationDate: number;
    }
  >;

  callStatic: {
    params(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, number] & {
        maxBorrowedAmountPerBlock: BigNumber;
        isIncreaseDebtForbidden: boolean;
        expirationDate: number;
      }
    >;
  };

  filters: {};

  estimateGas: {
    params(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
