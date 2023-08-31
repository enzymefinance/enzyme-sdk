import { type ReadContractParameters, readContractParameters } from "../utils/viem.js";
import { IVaultLib } from "@enzymefinance/abis/IVaultLib";
import type { Address, PublicClient } from "viem";
import { readContract } from "viem/contract";

export function getVaultName(
  client: PublicClient,
  args: ReadContractParameters<{
    vaultProxy: Address;
  }>,
) {
  return readContract(client, {
    ...readContractParameters(args),
    abi: IVaultLib,
    functionName: "name",
    address: args.vaultProxy,
  });
}
