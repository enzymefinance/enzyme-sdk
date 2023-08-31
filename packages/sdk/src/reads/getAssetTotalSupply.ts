import { type ReadContractParameters, readContractParameters } from "../utils/viem.js";
import { type Address, type PublicClient, parseAbi } from "viem";
import { readContract } from "viem/contract";

export function getAssetTotalSupply(
  client: PublicClient,
  args: ReadContractParameters<{
    asset: Address;
  }>,
) {
  return readContract(client, {
    ...readContractParameters(args),
    abi: parseAbi(["function totalSupply() view returns (uint)"] as const),
    functionName: "totalSupply",
    address: args.asset,
  });
}
