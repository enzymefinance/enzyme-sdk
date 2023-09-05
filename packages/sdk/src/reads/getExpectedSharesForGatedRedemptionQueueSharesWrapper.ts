import { type ReadContractParameters, readContractParameters } from "../utils/viem.js";
import { IGatedRedemptionQueueSharesWrapperLib } from "@enzymefinance/abis/IGatedRedemptionQueueSharesWrapperLib";
import type { Address, PublicClient } from "viem";

export function getExpectedSharesForGatedRedemptionQueueSharesWrapper(
  client: PublicClient,
  args: ReadContractParameters<{
    sharesWrapper: Address;
    denominationAsset: Address;
    amount: bigint;
    buyer: Address;
  }>,
) {
  return client.simulateContract({
    ...readContractParameters(args),
    abi: IGatedRedemptionQueueSharesWrapperLib,
    functionName: "deposit",
    address: args.sharesWrapper,
    args: [args.denominationAsset, args.amount, 1n],
    account: args.buyer,
  });
}
