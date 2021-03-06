/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ERC721Fingerprint,
  ERC721FingerprintInterface,
} from "../../contracts/ERC721Fingerprint";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_fingerprintProxy",
        type: "address",
      },
    ],
    name: "FingerprintProxyRegisted",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "fingerprintProxies",
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
    inputs: [
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fingerprintProxy",
        type: "address",
      },
    ],
    name: "registerFingerPrintProxy",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103348061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633161f6421461005c578063715018a6146100715780638da5cb5b14610079578063c87b6341146100a2578063f2fde38b146100cb575b600080fd5b61006f61006a3660046102a9565b6100de565b005b61006f610151565b6000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b6100866100b03660046102dc565b6001602052600090815260409020546001600160a01b031681565b61006f6100d93660046102dc565b610165565b6100e66101e3565b6001600160a01b0382811660008181526001602090815260409182902080546001600160a01b031916948616948517905581519283528201929092527f34d7de5b89c8368f0fad33e8dff9d827147f3bcefa6a0ad6f198a1b97959a961910160405180910390a15050565b6101596101e3565b610163600061023d565b565b61016d6101e3565b6001600160a01b0381166101d75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6101e08161023d565b50565b6000546001600160a01b031633146101635760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101ce565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146102a457600080fd5b919050565b600080604083850312156102bc57600080fd5b6102c58361028d565b91506102d36020840161028d565b90509250929050565b6000602082840312156102ee57600080fd5b6102f78261028d565b939250505056fea2646970667358221220704d710ed278c09a0b69f5756f6ccdcef4b9d3dbbe7c240ae1204650a1614d4e64736f6c63430008090033";

type ERC721FingerprintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721FingerprintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Fingerprint__factory extends ContractFactory {
  constructor(...args: ERC721FingerprintConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Fingerprint> {
    return super.deploy(overrides || {}) as Promise<ERC721Fingerprint>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Fingerprint {
    return super.attach(address) as ERC721Fingerprint;
  }
  override connect(signer: Signer): ERC721Fingerprint__factory {
    return super.connect(signer) as ERC721Fingerprint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721FingerprintInterface {
    return new utils.Interface(_abi) as ERC721FingerprintInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Fingerprint {
    return new Contract(address, _abi, signerOrProvider) as ERC721Fingerprint;
  }
}
