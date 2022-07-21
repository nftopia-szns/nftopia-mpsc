/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestErc721,
  TestErc721Interface,
} from "../../../contracts/test/TestErc721";

const _abi = [
  {
    inputs: [],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260048082526344454d4f60e01b602080840182815285518087019096529285528401528151919291620000519160009162000070565b5080516200006790600190602084019062000070565b50505062000153565b8280546200007e9062000116565b90600052602060002090601f016020900481019282620000a25760008555620000ed565b82601f10620000bd57805160ff1916838001178555620000ed565b82800160010185558215620000ed579182015b82811115620000ed578251825591602001919060010190620000d0565b50620000fb929150620000ff565b5090565b5b80821115620000fb576000815560010162000100565b600181811c908216806200012b57607f821691505b602082108114156200014d57634e487b7160e01b600052602260045260246000fd5b50919050565b6112bf80620001636000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a22cb46511610066578063a22cb465146101e1578063b88d4fde146101f4578063c87b56dd14610207578063e985e9c51461021a57600080fd5b806370a08231146101a557806395d89b41146101c6578063a0712d68146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806323b872dd1461016c57806342842e0e1461017f5780636352211e1461019257600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610dd2565b610256565b60405190151581526020015b60405180910390f35b61011f6102a8565b60405161010e9190610e47565b61013f61013a366004610e5a565b61033a565b6040516001600160a01b03909116815260200161010e565b61016a610165366004610e8f565b610361565b005b61016a61017a366004610eb9565b61047c565b61016a61018d366004610eb9565b6104ad565b61013f6101a0366004610e5a565b6104c8565b6101b86101b3366004610ef5565b610528565b60405190815260200161010e565b61011f6105ae565b61016a6101dc366004610e5a565b6105bd565b61016a6101ef366004610f10565b6105ca565b61016a610202366004610f62565b6105d9565b61011f610215366004610e5a565b610611565b61010261022836600461103e565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061028757506001600160e01b03198216635b5e139f60e01b145b806102a257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102b790611071565b80601f01602080910402602001604051908101604052809291908181526020018280546102e390611071565b80156103305780601f1061030557610100808354040283529160200191610330565b820191906000526020600020905b81548152906001019060200180831161031357829003601f168201915b5050505050905090565b600061034582610685565b506000908152600460205260409020546001600160a01b031690565b600061036c826104c8565b9050806001600160a01b0316836001600160a01b031614156103df5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806103fb57506103fb8133610228565b61046d5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016103d6565b61047783836106e4565b505050565b6104863382610752565b6104a25760405162461bcd60e51b81526004016103d6906110ac565b6104778383836107d1565b610477838383604051806020016040528060008152506105d9565b6000818152600260205260408120546001600160a01b0316806102a25760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103d6565b60006001600160a01b0382166105925760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103d6565b506001600160a01b031660009081526003602052604090205490565b6060600180546102b790611071565b6105c7338261096d565b50565b6105d5338383610aaf565b5050565b6105e33383610752565b6105ff5760405162461bcd60e51b81526004016103d6906110ac565b61060b84848484610b7e565b50505050565b606061061c82610685565b600061063360408051602081019091526000815290565b90506000815111610653576040518060200160405280600081525061067e565b8061065d84610bb1565b60405160200161066e9291906110fa565b6040516020818303038152906040525b9392505050565b6000818152600260205260409020546001600160a01b03166105c75760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103d6565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610719826104c8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061075e836104c8565b9050806001600160a01b0316846001600160a01b031614806107a557506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806107c95750836001600160a01b03166107be8461033a565b6001600160a01b0316145b949350505050565b826001600160a01b03166107e4826104c8565b6001600160a01b0316146108485760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103d6565b6001600160a01b0382166108aa5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103d6565b6108b56000826106e4565b6001600160a01b03831660009081526003602052604081208054600192906108de90849061113f565b90915550506001600160a01b038216600090815260036020526040812080546001929061090c908490611156565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166109c35760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103d6565b6000818152600260205260409020546001600160a01b031615610a285760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103d6565b6001600160a01b0382166000908152600360205260408120805460019290610a51908490611156565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b816001600160a01b0316836001600160a01b03161415610b115760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103d6565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b898484846107d1565b610b9584848484610caf565b61060b5760405162461bcd60e51b81526004016103d69061116e565b606081610bd55750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610bff5780610be9816111c0565b9150610bf89050600a836111f1565b9150610bd9565b60008167ffffffffffffffff811115610c1a57610c1a610f4c565b6040519080825280601f01601f191660200182016040528015610c44576020820181803683370190505b5090505b84156107c957610c5960018361113f565b9150610c66600a86611205565b610c71906030611156565b60f81b818381518110610c8657610c86611219565b60200101906001600160f81b031916908160001a905350610ca8600a866111f1565b9450610c48565b60006001600160a01b0384163b15610db157604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610cf390339089908890889060040161122f565b602060405180830381600087803b158015610d0d57600080fd5b505af1925050508015610d3d575060408051601f3d908101601f19168201909252610d3a9181019061126c565b60015b610d97573d808015610d6b576040519150601f19603f3d011682016040523d82523d6000602084013e610d70565b606091505b508051610d8f5760405162461bcd60e51b81526004016103d69061116e565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506107c9565b506001949350505050565b6001600160e01b0319811681146105c757600080fd5b600060208284031215610de457600080fd5b813561067e81610dbc565b60005b83811015610e0a578181015183820152602001610df2565b8381111561060b5750506000910152565b60008151808452610e33816020860160208601610def565b601f01601f19169290920160200192915050565b60208152600061067e6020830184610e1b565b600060208284031215610e6c57600080fd5b5035919050565b80356001600160a01b0381168114610e8a57600080fd5b919050565b60008060408385031215610ea257600080fd5b610eab83610e73565b946020939093013593505050565b600080600060608486031215610ece57600080fd5b610ed784610e73565b9250610ee560208501610e73565b9150604084013590509250925092565b600060208284031215610f0757600080fd5b61067e82610e73565b60008060408385031215610f2357600080fd5b610f2c83610e73565b915060208301358015158114610f4157600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610f7857600080fd5b610f8185610e73565b9350610f8f60208601610e73565b925060408501359150606085013567ffffffffffffffff80821115610fb357600080fd5b818701915087601f830112610fc757600080fd5b813581811115610fd957610fd9610f4c565b604051601f8201601f19908116603f0116810190838211818310171561100157611001610f4c565b816040528281528a602084870101111561101a57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561105157600080fd5b61105a83610e73565b915061106860208401610e73565b90509250929050565b600181811c9082168061108557607f821691505b602082108114156110a657634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b6000835161110c818460208801610def565b835190830190611120818360208801610def565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561115157611151611129565b500390565b6000821982111561116957611169611129565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006000198214156111d4576111d4611129565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611200576112006111db565b500490565b600082611214576112146111db565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061126290830184610e1b565b9695505050505050565b60006020828403121561127e57600080fd5b815161067e81610dbc56fea2646970667358221220e6a66d9e1455b3975549a4bcd7fc00ee2229a7b58c193aa66b24892f588aecc564736f6c63430008090033";

type TestErc721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestErc721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestErc721__factory extends ContractFactory {
  constructor(...args: TestErc721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestErc721> {
    return super.deploy(overrides || {}) as Promise<TestErc721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestErc721 {
    return super.attach(address) as TestErc721;
  }
  override connect(signer: Signer): TestErc721__factory {
    return super.connect(signer) as TestErc721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestErc721Interface {
    return new utils.Interface(_abi) as TestErc721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestErc721 {
    return new Contract(address, _abi, signerOrProvider) as TestErc721;
  }
}
