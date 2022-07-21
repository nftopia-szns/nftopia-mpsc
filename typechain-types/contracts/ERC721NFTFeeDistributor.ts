/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace ERC721NFTFeeDistributor {
  export type CollectionStruct = {
    loyaltyFeePercent: PromiseOrValue<BigNumberish>;
    loyaltyFeeRecipient: PromiseOrValue<string>;
  };

  export type CollectionStructOutput = [BigNumber, string] & {
    loyaltyFeePercent: BigNumber;
    loyaltyFeeRecipient: string;
  };
}

export interface ERC721NFTFeeDistributorInterface extends utils.Interface {
  functions: {
    "MAX_FEE()": FunctionFragment;
    "collections(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "protocolFeePercent()": FunctionFragment;
    "protocolFeeRecipient()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCollection(address,address,uint256)": FunctionFragment;
    "setProtocolFeePercent(uint256)": FunctionFragment;
    "setProtocolFeeRecipient(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_FEE"
      | "collections"
      | "owner"
      | "protocolFeePercent"
      | "protocolFeeRecipient"
      | "renounceOwnership"
      | "setCollection"
      | "setProtocolFeePercent"
      | "setProtocolFeeRecipient"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collections",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolFeePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCollection",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolFeePercent",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolFeeRecipient",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collections",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CollectionUpdated(address,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CollectionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface CollectionUpdatedEventObject {
  owner: string;
  collection: ERC721NFTFeeDistributor.CollectionStructOutput;
}
export type CollectionUpdatedEvent = TypedEvent<
  [string, ERC721NFTFeeDistributor.CollectionStructOutput],
  CollectionUpdatedEventObject
>;

export type CollectionUpdatedEventFilter =
  TypedEventFilter<CollectionUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ERC721NFTFeeDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721NFTFeeDistributorInterface;

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
    MAX_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & {
        loyaltyFeePercent: BigNumber;
        loyaltyFeeRecipient: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    protocolFeePercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCollection(
      _nft: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProtocolFeePercent(
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProtocolFeeRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  collections(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string] & {
      loyaltyFeePercent: BigNumber;
      loyaltyFeeRecipient: string;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  protocolFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

  protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCollection(
    _nft: PromiseOrValue<string>,
    _recipient: PromiseOrValue<string>,
    _percent: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProtocolFeePercent(
    _percent: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProtocolFeeRecipient(
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & {
        loyaltyFeePercent: BigNumber;
        loyaltyFeeRecipient: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    protocolFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setCollection(
      _nft: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolFeePercent(
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolFeeRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CollectionUpdated(address,tuple)"(
      owner?: null,
      collection?: null
    ): CollectionUpdatedEventFilter;
    CollectionUpdated(
      owner?: null,
      collection?: null
    ): CollectionUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCollection(
      _nft: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProtocolFeePercent(
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProtocolFeeRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFeePercent(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolFeeRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCollection(
      _nft: PromiseOrValue<string>,
      _recipient: PromiseOrValue<string>,
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolFeePercent(
      _percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolFeeRecipient(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}