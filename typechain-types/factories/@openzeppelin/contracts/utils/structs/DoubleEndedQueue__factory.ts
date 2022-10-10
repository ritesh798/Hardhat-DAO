/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  DoubleEndedQueue,
  DoubleEndedQueueInterface,
} from "../../../../../@openzeppelin/contracts/utils/structs/DoubleEndedQueue";

const _abi = [
  {
    inputs: [],
    name: "Empty",
    type: "error",
  },
  {
    inputs: [],
    name: "OutOfBounds",
    type: "error",
  },
];

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220149907341e671155a064d9628f124fe23db83cefd2601aeaf4d8097bc1179eb564736f6c63430008040033";

type DoubleEndedQueueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoubleEndedQueueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoubleEndedQueue__factory extends ContractFactory {
  constructor(...args: DoubleEndedQueueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DoubleEndedQueue> {
    return super.deploy(overrides || {}) as Promise<DoubleEndedQueue>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DoubleEndedQueue {
    return super.attach(address) as DoubleEndedQueue;
  }
  override connect(signer: Signer): DoubleEndedQueue__factory {
    return super.connect(signer) as DoubleEndedQueue__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoubleEndedQueueInterface {
    return new utils.Interface(_abi) as DoubleEndedQueueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DoubleEndedQueue {
    return new Contract(address, _abi, signerOrProvider) as DoubleEndedQueue;
  }
}
