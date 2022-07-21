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
  PayableOverrides,
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

export interface ERC721NFTMarketInterface extends utils.Interface {
  functions: {
    "MAX_FEE()": FunctionFragment;
    "WETH()": FunctionFragment;
    "acceptBid(address,uint256,address,address,uint256)": FunctionFragment;
    "asks(address,uint256)": FunctionFragment;
    "bids(address,uint256,address)": FunctionFragment;
    "buy(address,uint256,address,uint256,bytes32)": FunctionFragment;
    "buyUsingEth(address,uint256,bytes32)": FunctionFragment;
    "cancelAsk(address,uint256)": FunctionFragment;
    "cancelBid(address,uint256)": FunctionFragment;
    "collections(address)": FunctionFragment;
    "createAsk(address,uint256,address,uint256)": FunctionFragment;
    "createBid(address,uint256,address,uint256,bytes32)": FunctionFragment;
    "createBidUsingEth(address,uint256,bytes32)": FunctionFragment;
    "fingerprintProxies(address)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "protocolFeePercent()": FunctionFragment;
    "protocolFeeRecipient()": FunctionFragment;
    "registerFingerPrintProxy(address,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCollection(address,address,uint256)": FunctionFragment;
    "setProtocolFeePercent(uint256)": FunctionFragment;
    "setProtocolFeeRecipient(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_FEE"
      | "WETH"
      | "acceptBid"
      | "asks"
      | "bids"
      | "buy"
      | "buyUsingEth"
      | "cancelAsk"
      | "cancelBid"
      | "collections"
      | "createAsk"
      | "createBid"
      | "createBidUsingEth"
      | "fingerprintProxies"
      | "onERC721Received"
      | "owner"
      | "protocolFeePercent"
      | "protocolFeeRecipient"
      | "registerFingerPrintProxy"
      | "renounceOwnership"
      | "setCollection"
      | "setProtocolFeePercent"
      | "setProtocolFeeRecipient"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptBid",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "asks",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "bids",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buyUsingEth",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAsk",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelBid",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collections",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAsk",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createBid",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createBidUsingEth",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fingerprintProxies",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
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
    functionFragment: "registerFingerPrintProxy",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
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
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "acceptBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bids", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyUsingEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancelAsk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collections",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createAsk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBidUsingEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fingerprintProxies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
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
    functionFragment: "registerFingerPrintProxy",
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
    "AcceptBid(address,address,address,uint256,address,uint256,uint256)": EventFragment;
    "AskCancel(address,address,uint256)": EventFragment;
    "AskNew(address,address,uint256,address,uint256)": EventFragment;
    "Bid(address,address,uint256,address,uint256)": EventFragment;
    "CancelBid(address,address,uint256)": EventFragment;
    "CollectionUpdated(address,tuple)": EventFragment;
    "FingerprintProxyRegisted(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Trade(address,address,address,uint256,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AcceptBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AskCancel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AskNew"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Bid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FingerprintProxyRegisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Trade"): EventFragment;
}

export interface AcceptBidEventObject {
  _seller: string;
  bidder: string;
  _nft: string;
  _tokenId: BigNumber;
  _quoteToken: string;
  _price: BigNumber;
  _netPrice: BigNumber;
}
export type AcceptBidEvent = TypedEvent<
  [string, string, string, BigNumber, string, BigNumber, BigNumber],
  AcceptBidEventObject
>;

export type AcceptBidEventFilter = TypedEventFilter<AcceptBidEvent>;

export interface AskCancelEventObject {
  _seller: string;
  _nft: string;
  _tokenId: BigNumber;
}
export type AskCancelEvent = TypedEvent<
  [string, string, BigNumber],
  AskCancelEventObject
>;

export type AskCancelEventFilter = TypedEventFilter<AskCancelEvent>;

export interface AskNewEventObject {
  _seller: string;
  _nft: string;
  _tokenId: BigNumber;
  _quoteToken: string;
  _price: BigNumber;
}
export type AskNewEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  AskNewEventObject
>;

export type AskNewEventFilter = TypedEventFilter<AskNewEvent>;

export interface BidEventObject {
  bidder: string;
  _nft: string;
  _tokenId: BigNumber;
  _quoteToken: string;
  _price: BigNumber;
}
export type BidEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  BidEventObject
>;

export type BidEventFilter = TypedEventFilter<BidEvent>;

export interface CancelBidEventObject {
  bidder: string;
  _nft: string;
  _tokenId: BigNumber;
}
export type CancelBidEvent = TypedEvent<
  [string, string, BigNumber],
  CancelBidEventObject
>;

export type CancelBidEventFilter = TypedEventFilter<CancelBidEvent>;

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

export interface FingerprintProxyRegistedEventObject {
  _nft: string;
  _fingerprintProxy: string;
}
export type FingerprintProxyRegistedEvent = TypedEvent<
  [string, string],
  FingerprintProxyRegistedEventObject
>;

export type FingerprintProxyRegistedEventFilter =
  TypedEventFilter<FingerprintProxyRegistedEvent>;

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

export interface TradeEventObject {
  _seller: string;
  buyer: string;
  _nft: string;
  _tokenId: BigNumber;
  _quoteToken: string;
  _price: BigNumber;
  _netPrice: BigNumber;
}
export type TradeEvent = TypedEvent<
  [string, string, string, BigNumber, string, BigNumber, BigNumber],
  TradeEventObject
>;

export type TradeEventFilter = TypedEventFilter<TradeEvent>;

export interface ERC721NFTMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721NFTMarketInterface;

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

    WETH(overrides?: CallOverrides): Promise<[string]>;

    acceptBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _bidder: PromiseOrValue<string>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    asks(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        seller: string;
        quoteToken: string;
        price: BigNumber;
      }
    >;

    bids(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        quoteToken: string;
        price: BigNumber;
        fingerprint: string;
      }
    >;

    buy(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingeprint: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & {
        loyaltyFeePercent: BigNumber;
        loyaltyFeeRecipient: string;
      }
    >;

    createAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createBidUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingperprint: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fingerprintProxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    protocolFeePercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<[string]>;

    registerFingerPrintProxy(
      _nft: PromiseOrValue<string>,
      _fingerprintProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

  WETH(overrides?: CallOverrides): Promise<string>;

  acceptBid(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _bidder: PromiseOrValue<string>,
    _quoteToken: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  asks(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      seller: string;
      quoteToken: string;
      price: BigNumber;
    }
  >;

  bids(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      quoteToken: string;
      price: BigNumber;
      fingerprint: string;
    }
  >;

  buy(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _quoteToken: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _fingeprint: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyUsingEth(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _fingerprint: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelAsk(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelBid(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collections(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string] & {
      loyaltyFeePercent: BigNumber;
      loyaltyFeeRecipient: string;
    }
  >;

  createAsk(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _quoteToken: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createBid(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _quoteToken: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _fingerprint: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createBidUsingEth(
    _nft: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _fingperprint: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fingerprintProxies(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  protocolFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

  protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;

  registerFingerPrintProxy(
    _nft: PromiseOrValue<string>,
    _fingerprintProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

    WETH(overrides?: CallOverrides): Promise<string>;

    acceptBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _bidder: PromiseOrValue<string>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    asks(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        seller: string;
        quoteToken: string;
        price: BigNumber;
      }
    >;

    bids(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        quoteToken: string;
        price: BigNumber;
        fingerprint: string;
      }
    >;

    buy(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingeprint: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & {
        loyaltyFeePercent: BigNumber;
        loyaltyFeeRecipient: string;
      }
    >;

    createAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createBidUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingperprint: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    fingerprintProxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    protocolFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;

    registerFingerPrintProxy(
      _nft: PromiseOrValue<string>,
      _fingerprintProxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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
    "AcceptBid(address,address,address,uint256,address,uint256,uint256)"(
      _seller?: PromiseOrValue<string> | null,
      bidder?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null,
      _netPrice?: null
    ): AcceptBidEventFilter;
    AcceptBid(
      _seller?: PromiseOrValue<string> | null,
      bidder?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null,
      _netPrice?: null
    ): AcceptBidEventFilter;

    "AskCancel(address,address,uint256)"(
      _seller?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null
    ): AskCancelEventFilter;
    AskCancel(
      _seller?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null
    ): AskCancelEventFilter;

    "AskNew(address,address,uint256,address,uint256)"(
      _seller?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null
    ): AskNewEventFilter;
    AskNew(
      _seller?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null
    ): AskNewEventFilter;

    "Bid(address,address,uint256,address,uint256)"(
      bidder?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null
    ): BidEventFilter;
    Bid(
      bidder?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null
    ): BidEventFilter;

    "CancelBid(address,address,uint256)"(
      bidder?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null
    ): CancelBidEventFilter;
    CancelBid(
      bidder?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null
    ): CancelBidEventFilter;

    "CollectionUpdated(address,tuple)"(
      owner?: null,
      collection?: null
    ): CollectionUpdatedEventFilter;
    CollectionUpdated(
      owner?: null,
      collection?: null
    ): CollectionUpdatedEventFilter;

    "FingerprintProxyRegisted(address,address)"(
      _nft?: null,
      _fingerprintProxy?: null
    ): FingerprintProxyRegistedEventFilter;
    FingerprintProxyRegisted(
      _nft?: null,
      _fingerprintProxy?: null
    ): FingerprintProxyRegistedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Trade(address,address,address,uint256,address,uint256,uint256)"(
      _seller?: PromiseOrValue<string> | null,
      buyer?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null,
      _netPrice?: null
    ): TradeEventFilter;
    Trade(
      _seller?: PromiseOrValue<string> | null,
      buyer?: PromiseOrValue<string> | null,
      _nft?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _quoteToken?: null,
      _price?: null,
      _netPrice?: null
    ): TradeEventFilter;
  };

  estimateGas: {
    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    acceptBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _bidder: PromiseOrValue<string>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    asks(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bids(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingeprint: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createBidUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingperprint: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fingerprintProxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    registerFingerPrintProxy(
      _nft: PromiseOrValue<string>,
      _fingerprintProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _bidder: PromiseOrValue<string>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    asks(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bids(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buy(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingeprint: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collections(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAsk(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createBid(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _quoteToken: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _fingerprint: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createBidUsingEth(
      _nft: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _fingperprint: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fingerprintProxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFeePercent(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolFeeRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerFingerPrintProxy(
      _nft: PromiseOrValue<string>,
      _fingerprintProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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