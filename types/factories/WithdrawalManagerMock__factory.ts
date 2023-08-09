/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  WithdrawalManagerMock,
  WithdrawalManagerMockInterface,
} from "../WithdrawalManagerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addImmediateWithdrawal",
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
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "addScheduledWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isForceCancel",
        type: "bool",
      },
    ],
    name: "cancellableScheduledWithdrawals",
    outputs: [
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount2",
        type: "uint256",
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
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "claimImmediateWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum ClaimAction",
        name: "",
        type: "uint8",
      },
    ],
    name: "claimScheduledWithdrawals",
    outputs: [
      {
        internalType: "bool",
        name: "hasScheduled",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "tokensToEnable",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimScheduledWithdrawalsWasCalled",
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
        internalType: "bool",
        name: "isForceCancel",
        type: "bool",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount2",
        type: "uint256",
      },
    ],
    name: "setCancellableWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "hasScheduled",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "tokensToEnable",
        type: "uint256",
      },
    ],
    name: "setClaimScheduledWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "_delay",
        type: "uint40",
      },
    ],
    name: "setDelay",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5061044c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80636a42b8f811610081578063ae4095441161005b578063ae40954414610277578063bbff25c71461032f578063fddbd2231461034557600080fd5b80636a42b8f8146101e55780636cd7cdfd14610210578063896f22b81461026157600080fd5b806350fbd775116100b257806350fbd7751461018f57806354fd4d50146101b05780636261fadf146101cb57600080fd5b80632df3d68d146100ce5780634705d8311461013f575b600080fd5b610124600480360360608110156100e457600080fd5b50506002805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116179081905560035461010090910460ff1691565b60408051921515835260208301919091528051918290030190f35b61018d6004803603602081101561015557600080fd5b50600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000016913564ffffffffff16919091179055565b005b60025461019c9060ff1681565b604080519115158252519081900360200190f35b6101b961012c81565b60408051918252519081900360200190f35b61018d600480360360808110156101e157600080fd5b5050565b6000546101f69064ffffffffff1681565b6040805164ffffffffff9092168252519081900360200190f35b61018d6004803603604081101561022657600080fd5b50600280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100833515150217905560200135600355565b61018d600480360360608110156101e157600080fd5b6102d86004803603604081101561028d57600080fd5b506020908101351515600090815260019182905260409020805491810154600282015460039092015473ffffffffffffffffffffffffffffffffffffffff9384169491939092169190565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390f35b61018d600480360360408110156101e157600080fd5b61018d600480360360a081101561035b57600080fd5b5060408051808201825273ffffffffffffffffffffffffffffffffffffffff60208481013582168352848401358184019081528535151560008181526001808552878220965187549087167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216178855935187820155875180890190985260608901358616885260809098013587850190815291905295909152925160028301805491909216931692909217909155905160039091015556fea26469706673582212208fa2464ee0d77438caf176527012c6b81b3547c9c25043e932ae03feeacaed2164736f6c63430008110033";

type WithdrawalManagerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawalManagerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WithdrawalManagerMock__factory extends ContractFactory {
  constructor(...args: WithdrawalManagerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "WithdrawalManagerMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WithdrawalManagerMock> {
    return super.deploy(overrides || {}) as Promise<WithdrawalManagerMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WithdrawalManagerMock {
    return super.attach(address) as WithdrawalManagerMock;
  }
  override connect(signer: Signer): WithdrawalManagerMock__factory {
    return super.connect(signer) as WithdrawalManagerMock__factory;
  }
  static readonly contractName: "WithdrawalManagerMock";

  public readonly contractName: "WithdrawalManagerMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawalManagerMockInterface {
    return new utils.Interface(_abi) as WithdrawalManagerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawalManagerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WithdrawalManagerMock;
  }
}
