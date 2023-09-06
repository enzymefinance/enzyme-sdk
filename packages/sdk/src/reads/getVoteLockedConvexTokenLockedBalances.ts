import type { Address, PublicClient } from "viem";
import { type ReadContractParameters, readContractParameters } from "../utils/viem.js";


const abi = {
  inputs: [
    {
      internalType: "address",
      name: "_user",
      type: "address"
    },
  ],
  name: "lockedBalances",
  outputs: [
    { internalType: "uint256",
      name: "total",
      type: "uint256"
    },
    {
      internalType: "uint256",
      name: "unlockable",
      type: "uint256"
    },
    {
      internalType: "uint256",
      name: "locked",
      type: "uint256"
    },
    { 
      components: [
        { internalType: "uint112", name: "amount", type: "uint112" },
        { internalType: "uint112", name: "boosted", type: "uint112" },
        { internalType: "uint32", name: "unlockTime", type: "uint32" }
      ],
      internalType: "struct CvxLockerV2.LockedBalance[]",
      name: "lockData",
      type: "tuple[]"
    },
  ],
  stateMutability: "view",
  type: "function"
};

export async function getVoteLockedConvexTokenLockedBalances(
  client: PublicClient,
  args: ReadContractParameters<{
    voteLockedConvexToken: Address;
    positionAddress: Address;
  }>,
) {

  const lockedBalances = await client.readContract({
    ...readContractParameters(args),
    abi: [abi],
    address: args.voteLockedConvexToken,
    functionName: "lockedBalances",
    args: [args.positionAddress],
  });

  return lockedBalances;
}

export async function getAllVoteLockedConvexTokenLockedBalances(
  client: PublicClient,
  args: ReadContractParameters<{
    voteLockedConvexToken: Address;
    positionAddresses: Address[];
  }>,
) {
  const allLockedBalances = await Promise.all(
    args.positionAddresses.map(async (position) => {
      const lockedBalances = await getVoteLockedConvexTokenLockedBalances(client, {
        voteLockedConvexToken: args.voteLockedConvexToken,
        positionAddress: position,
      });

      return { position, lockedBalances };
    }),
  );

  const lockedBalancesMap: Record<Address, any> = {};
  for (const { position, lockedBalances } of allLockedBalances) {
    lockedBalancesMap[position] = lockedBalances;
  }

  return lockedBalancesMap;
}