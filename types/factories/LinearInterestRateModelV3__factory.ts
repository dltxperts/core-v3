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
import type {
  LinearInterestRateModelV3,
  LinearInterestRateModelV3Interface,
} from "../LinearInterestRateModelV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "U_1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "U_2",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_base",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_slope1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_slope2",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_slope3",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "_isBorrowingMoreU2Forbidden",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BorrowingMoreThanU2ForbiddenException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectParameterException",
    type: "error",
  },
  {
    inputs: [],
    name: "R_base_RAY",
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
    name: "R_slope1_RAY",
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
    name: "R_slope2_RAY",
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
    name: "R_slope3_RAY",
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
    name: "U_1_WAD",
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
    name: "U_2_WAD",
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
        internalType: "uint256",
        name: "expectedLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
    ],
    name: "availableToBorrow",
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
        internalType: "uint256",
        name: "expectedLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "checkOptimalBorrowing",
        type: "bool",
      },
    ],
    name: "calcBorrowRate",
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
        internalType: "uint256",
        name: "expectedLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
    ],
    name: "calcBorrowRate",
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
    name: "getModelParameters",
    outputs: [
      {
        internalType: "uint16",
        name: "U_1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "U_2",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_base",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_slope1",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_slope2",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "R_slope3",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isBorrowingMoreU2Forbidden",
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
  "0x6101606040523480156200001257600080fd5b5060405162000dcd38038062000dcd833981810160405260e08110156200003857600080fd5b508051602082015160408301516060840151608085015160a086015160c090960151949593949293919290919061271061ffff881610158062000081575061271061ffff871610155b806200009457508561ffff168761ffff16115b80620000a5575061271061ffff8616115b80620000b6575061271061ffff8516115b80620000c7575061271061ffff8416115b80620000da57508261ffff168461ffff16115b80620000ed57508161ffff168361ffff16115b156200010c576040516347fbaa9760e01b815260040160405180910390fd5b6127106200012761ffff8916670de0b6b3a76400006200022d565b62000133919062000259565b60a0526127106200015161ffff8816670de0b6b3a76400006200022d565b6200015d919062000259565b60c0526127106200017f61ffff87166b033b2e3c9fd0803ce80000006200022d565b6200018b919062000259565b60e052612710620001ad61ffff86166b033b2e3c9fd0803ce80000006200022d565b620001b9919062000259565b61010052612710620001dc61ffff85166b033b2e3c9fd0803ce80000006200022d565b620001e8919062000259565b610120526127106200020b61ffff84166b033b2e3c9fd0803ce80000006200022d565b62000217919062000259565b610140521515608052506200027c945050505050565b80820281158282048414176200025357634e487b7160e01b600052601160045260246000fd5b92915050565b6000826200027757634e487b7160e01b600052601260045260246000fd5b500490565b60805160a05160c05160e051610100516101205161014051610a2c620003a160003960008181610117015281816105f701526109170152600081816101bc015281816104b20152818161062701526108d201526000818160de01528181610384015281816104e50152818161064b015261088d015260008181610195015281816102e6015281816103b8015281816105060152818161066c015261084801526000818161021e015281816104110152818161045e0152818161059a015281816105cc01528181610727015281816107630152610803015260008181610268015281816103370152818161035f015281816103e60152818161043d0152818161048701526107c20152600081816101e30152818161053e01526106ca0152610a2c6000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80636e55f77e1161008157806381ec4ab71161005b57806381ec4ab714610240578063be3c37cd14610263578063c8284e6d1461028a57600080fd5b80636e55f77e146101b7578063762dbdb8146101de5780637f681d541461021957600080fd5b806342568d44116100b257806342568d441461016457806354fd4d50146101875780636cdc90fd1461019057600080fd5b806301967344146100d95780631a40526514610112578063306ea06714610139575b600080fd5b6101007f000000000000000000000000000000000000000000000000000000000000000081565b60408051918252519081900360200190f35b6101007f000000000000000000000000000000000000000000000000000000000000000081565b6101006004803603606081101561014f57600080fd5b508035906020810135906040013515156102d0565b6101006004803603604081101561017a57600080fd5b50803590602001356106af565b61010061012c81565b6101007f000000000000000000000000000000000000000000000000000000000000000081565b6101007f000000000000000000000000000000000000000000000000000000000000000081565b6102057f000000000000000000000000000000000000000000000000000000000000000081565b604080519115158252519081900360200190f35b6101007f000000000000000000000000000000000000000000000000000000000000000081565b6101006004803603604081101561025657600080fd5b50803590602001356106c6565b6101007f000000000000000000000000000000000000000000000000000000000000000081565b6102926107aa565b6040805161ffff978816815295871660208701529386168585015291851660608501528416608084015290921660a082015290519081900360c00190f35b60008315806102de57508284105b1561030a57507f00000000000000000000000000000000000000000000000000000000000000006106a8565b600084610317858261097e565b61032990670de0b6b3a7640000610991565b61033391906109a8565b90507f00000000000000000000000000000000000000000000000000000000000000008110156103e4577f00000000000000000000000000000000000000000000000000000000000000006103a8827f0000000000000000000000000000000000000000000000000000000000000000610991565b6103b291906109a8565b6103dc907f00000000000000000000000000000000000000000000000000000000000000006109e3565b9150506106a8565b7f0000000000000000000000000000000000000000000000000000000000000000811015801561043357507f000000000000000000000000000000000000000000000000000000000000000081105b15610534576104827f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061097e565b6104ac7f00000000000000000000000000000000000000000000000000000000000000008361097e565b6104d6907f0000000000000000000000000000000000000000000000000000000000000000610991565b6104e091906109a8565b61052a7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006109e3565b6103dc91906109e3565b82801561055e57507f00000000000000000000000000000000000000000000000000000000000000005b15610595576040517f351f03e300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c77f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a764000061097e565b6105f17f00000000000000000000000000000000000000000000000000000000000000008361097e565b61061b907f0000000000000000000000000000000000000000000000000000000000000000610991565b61062591906109a8565b7f00000000000000000000000000000000000000000000000000000000000000006106907f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006109e3565b61069a91906109e3565b6106a491906109e3565b9150505b9392505050565b60006106bd838360006102d0565b90505b92915050565b60007f000000000000000000000000000000000000000000000000000000000000000080156106f55750818310155b156107a357600083610707848261097e565b61071990670de0b6b3a7640000610991565b61072391906109a8565b90507f0000000000000000000000000000000000000000000000000000000000000000811061075357600061079b565b670de0b6b3a764000084610787837f000000000000000000000000000000000000000000000000000000000000000061097e565b6107919190610991565b61079b91906109a8565b9150506106c0565b50806106c0565b60008080808080670de0b6b3a76400006107e66127107f0000000000000000000000000000000000000000000000000000000000000000610991565b6107f091906109a8565b9550670de0b6b3a76400006108276127107f0000000000000000000000000000000000000000000000000000000000000000610991565b61083191906109a8565b94506b033b2e3c9fd0803ce800000061086c6127107f0000000000000000000000000000000000000000000000000000000000000000610991565b61087691906109a8565b93506b033b2e3c9fd0803ce80000006108b16127107f0000000000000000000000000000000000000000000000000000000000000000610991565b6108bb91906109a8565b92506b033b2e3c9fd0803ce80000006108f66127107f0000000000000000000000000000000000000000000000000000000000000000610991565b61090091906109a8565b91506b033b2e3c9fd0803ce800000061093b6127107f0000000000000000000000000000000000000000000000000000000000000000610991565b61094591906109a8565b9050909192939495565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156106c0576106c061094f565b80820281158282048414176106c0576106c061094f565b6000826109de577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b808201808211156106c0576106c061094f56fea2646970667358221220cf2f8dba8a56a52ef68ae62d1aac6d4016537a350bdfb15da83ff51ac36692d864736f6c63430008110033";

type LinearInterestRateModelV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LinearInterestRateModelV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LinearInterestRateModelV3__factory extends ContractFactory {
  constructor(...args: LinearInterestRateModelV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LinearInterestRateModelV3";
  }

  override deploy(
    U_1: PromiseOrValue<BigNumberish>,
    U_2: PromiseOrValue<BigNumberish>,
    R_base: PromiseOrValue<BigNumberish>,
    R_slope1: PromiseOrValue<BigNumberish>,
    R_slope2: PromiseOrValue<BigNumberish>,
    R_slope3: PromiseOrValue<BigNumberish>,
    _isBorrowingMoreU2Forbidden: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LinearInterestRateModelV3> {
    return super.deploy(
      U_1,
      U_2,
      R_base,
      R_slope1,
      R_slope2,
      R_slope3,
      _isBorrowingMoreU2Forbidden,
      overrides || {}
    ) as Promise<LinearInterestRateModelV3>;
  }
  override getDeployTransaction(
    U_1: PromiseOrValue<BigNumberish>,
    U_2: PromiseOrValue<BigNumberish>,
    R_base: PromiseOrValue<BigNumberish>,
    R_slope1: PromiseOrValue<BigNumberish>,
    R_slope2: PromiseOrValue<BigNumberish>,
    R_slope3: PromiseOrValue<BigNumberish>,
    _isBorrowingMoreU2Forbidden: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      U_1,
      U_2,
      R_base,
      R_slope1,
      R_slope2,
      R_slope3,
      _isBorrowingMoreU2Forbidden,
      overrides || {}
    );
  }
  override attach(address: string): LinearInterestRateModelV3 {
    return super.attach(address) as LinearInterestRateModelV3;
  }
  override connect(signer: Signer): LinearInterestRateModelV3__factory {
    return super.connect(signer) as LinearInterestRateModelV3__factory;
  }
  static readonly contractName: "LinearInterestRateModelV3";

  public readonly contractName: "LinearInterestRateModelV3";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinearInterestRateModelV3Interface {
    return new utils.Interface(_abi) as LinearInterestRateModelV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinearInterestRateModelV3 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LinearInterestRateModelV3;
  }
}
