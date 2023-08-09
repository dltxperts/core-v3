/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20FeeMock, ERC20FeeMockInterface } from "../ERC20FeeMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "basisPointsRate",
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
    inputs: [
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
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "burnFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maximumFee",
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
    inputs: [
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
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "setBasisPointsRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setMaximumFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "set_minter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620016bc380380620016bc8339810160408190526200003491620001b2565b82828282826003620000478382620002c6565b506004620000568282620002c6565b505050620000736200006d6200009760201b60201c565b6200009b565b60ff166080525050600680546001600160a01b031916331790555062000392915050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200011557600080fd5b81516001600160401b0380821115620001325762000132620000ed565b604051601f8301601f19908116603f011681019082821181831017156200015d576200015d620000ed565b816040528381526020925086838588010111156200017a57600080fd5b600091505b838210156200019e57858201830151818301840152908201906200017f565b600093810190920192909252949350505050565b600080600060608486031215620001c857600080fd5b83516001600160401b0380821115620001e057600080fd5b620001ee8783880162000103565b945060208601519150808211156200020557600080fd5b50620002148682870162000103565b925050604084015160ff811681146200022c57600080fd5b809150509250925092565b600181811c908216806200024c57607f821691505b6020821081036200026d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c157600081815260208120601f850160051c810160208610156200029c5750805b601f850160051c820191505b81811015620002bd57828155600101620002a8565b5050505b505050565b81516001600160401b03811115620002e257620002e2620000ed565b620002fa81620002f3845462000237565b8462000273565b602080601f831160018114620003325760008415620003195750858301515b600019600386901b1c1916600185901b178555620002bd565b600085815260208120601f198616915b82811015620003635788860151825594840194600190910190840162000342565b5085821015620003825787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805161130e620003ae600039600061029b015261130e6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806370a08231116100e3578063a457c2d71161008c578063dd62ed3e11610066578063dd62ed3e146103ca578063dd644f7214610410578063f2fde38b1461041957600080fd5b8063a457c2d714610391578063a9059cbb146103a4578063bd7bcef1146103b757600080fd5b80638da5cb5b116100bd5780638da5cb5b1461035857806395d89b41146103765780639dc29fac1461037e57600080fd5b806370a0823114610307578063715018a61461033d57806379cc67901461034557600080fd5b806323b872dd11610145578063395093511161011f57806339509351146102ce57806340c10f19146102e15780635fdf2be0146102f457600080fd5b806323b872dd14610281578063313ce5671461029457806335390714146102c557600080fd5b8063095ea7b311610176578063095ea7b3146101f55780631652e9fc1461021857806318160ddd1461026f57600080fd5b806306fdde031461019257806307546172146101b0575b600080fd5b61019a61042c565b6040516101a79190611075565b60405180910390f35b6006546101d09073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a7565b61020861020336600461110a565b6104be565b60405190151581526020016101a7565b61026d610226366004611134565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b6002545b6040519081526020016101a7565b61020861028f366004611156565b6104d8565b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101a7565b61027360085481565b6102086102dc36600461110a565b610540565b6102086102ef36600461110a565b61058c565b61026d610302366004611192565b61060e565b610273610315366004611134565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61026d610664565b61020861035336600461110a565b610678565b60055473ffffffffffffffffffffffffffffffffffffffff166101d0565b61019a6106ec565b61020861038c36600461110a565b6106fb565b61020861039f36600461110a565b610707565b6102086103b236600461110a565b6107be565b61026d6103c5366004611192565b600855565b6102736103d83660046111ab565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b61027360075481565b61026d610427366004611134565b610803565b60606003805461043b906111de565b80601f0160208091040260200160405190810160405280929190818152602001828054610467906111de565b80156104b45780601f10610489576101008083540402835291602001916104b4565b820191906000526020600020905b81548152906001019060200180831161049757829003601f168201915b5050505050905090565b6000336104cc8185856108a0565b60019150505b92915050565b60006104e5843384610a20565b60006104f083610add565b90508015610521576105218561051b60055473ffffffffffffffffffffffffffffffffffffffff1690565b83610b15565b61053585856105308487611260565b610b15565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906104cc9082908690610587908790611273565b6108a0565b60065460009073ffffffffffffffffffffffffffffffffffffffff1633146105fb5760405162461bcd60e51b815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c7900000000000000000000000000000060448201526064015b60405180910390fd5b6106058383610d36565b50600192915050565b612710811061065f5760405162461bcd60e51b815260206004820152600d60248201527f496e636f7272656374206665650000000000000000000000000000000000000060448201526064016105f2565b600755565b61066c610e0f565b6106766000610e76565b565b60065460009073ffffffffffffffffffffffffffffffffffffffff1633146106e25760405162461bcd60e51b815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c7900000000000000000000000000000060448201526064016105f2565b6106058383610eed565b60606004805461043b906111de565b60006106058383610eed565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156107b15760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016105f2565b61053582868684036108a0565b6000806107ca83610add565b90506107db33856105308487611260565b80156104cc576104cc3360055473ffffffffffffffffffffffffffffffffffffffff1661051b565b61080b610e0f565b73ffffffffffffffffffffffffffffffffffffffff81166108945760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105f2565b61089d81610e76565b50565b73ffffffffffffffffffffffffffffffffffffffff83166109285760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105f2565b73ffffffffffffffffffffffffffffffffffffffff82166109b15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105f2565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ad75781811015610aca5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105f2565b610ad784848484036108a0565b50505050565b60008061271061ffff1660075484610af59190611286565b610aff919061129d565b90506008548111156104d2575060085492915050565b73ffffffffffffffffffffffffffffffffffffffff8316610b9e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105f2565b73ffffffffffffffffffffffffffffffffffffffff8216610c275760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105f2565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610cc35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105f2565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610ad7565b73ffffffffffffffffffffffffffffffffffffffff8216610d995760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105f2565b8060026000828254610dab9190611273565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60055473ffffffffffffffffffffffffffffffffffffffff1633146106765760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105f2565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610f765760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016105f2565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054818110156110125760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016105f2565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610a13565b600060208083528351808285015260005b818110156110a257858101830151858201604001528201611086565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461110557600080fd5b919050565b6000806040838503121561111d57600080fd5b611126836110e1565b946020939093013593505050565b60006020828403121561114657600080fd5b61114f826110e1565b9392505050565b60008060006060848603121561116b57600080fd5b611174846110e1565b9250611182602085016110e1565b9150604084013590509250925092565b6000602082840312156111a457600080fd5b5035919050565b600080604083850312156111be57600080fd5b6111c7836110e1565b91506111d5602084016110e1565b90509250929050565b600181811c908216806111f257607f821691505b60208210810361122b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156104d2576104d2611231565b808201808211156104d2576104d2611231565b80820281158282048414176104d2576104d2611231565b6000826112d3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea264697066735822122070e69a1651feb3fca6e4b9485b12ab67b21ae5051764d6e12ac86c8c02c84d8564736f6c63430008110033";

type ERC20FeeMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20FeeMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20FeeMock__factory extends ContractFactory {
  constructor(...args: ERC20FeeMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20FeeMock";
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20FeeMock> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<ERC20FeeMock>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  override attach(address: string): ERC20FeeMock {
    return super.attach(address) as ERC20FeeMock;
  }
  override connect(signer: Signer): ERC20FeeMock__factory {
    return super.connect(signer) as ERC20FeeMock__factory;
  }
  static readonly contractName: "ERC20FeeMock";

  public readonly contractName: "ERC20FeeMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20FeeMockInterface {
    return new utils.Interface(_abi) as ERC20FeeMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20FeeMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20FeeMock;
  }
}
