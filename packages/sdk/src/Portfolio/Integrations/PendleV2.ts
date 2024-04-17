import { type Address, type Hex, type PublicClient, decodeAbiParameters, encodeAbiParameters, parseAbi } from "viem";
import { readContract } from "viem/actions";
import { Viem } from "../../Utils.js";
import * as ExternalPositionManager from "../../_internal/ExternalPositionManager.js";

export type Action = (typeof Action)[keyof typeof Action];
export const Action = {
  BuyPrincipalToken: 0n,
  SellPrincipalToken: 1n,
  AddLiquidity: 2n,
  RemoveLiquidity: 3n,
  ClaimRewards: 4n,
} as const;

export const create = ExternalPositionManager.createOnly;

//--------------------------------------------------------------------------------------------
// BUY PRINCIPLE TOKEN
//--------------------------------------------------------------------------------------------

export const buyPrincipleToken = ExternalPositionManager.makeUse(Action.BuyPrincipalToken, buyPrincipleTokenEncode);
export const createAndBuyPrincipleToken = ExternalPositionManager.makeCreateAndUse(
  Action.BuyPrincipalToken,
  buyPrincipleTokenEncode,
);

const buyPrincipleTokenEncoding = [
  {
    name: "principalTokenAddress",
    type: "address",
  },
  {
    name: "market",
    type: "address",
  },
  {
    name: "pricingDuration",
    type: "uint32",
  },
  {
    name: "depositTokenAddress",
    type: "address",
  },
  {
    name: "depositAmount",
    type: "uint256",
  },
  {
    components: [
      { name: "guessMin", type: "uint256" },
      { name: "guessMax", type: "uint256" },
      { name: "guessOffchain", type: "uint256" },
      { name: "maxIteration", type: "uint256" },
      { name: "eps", type: "uint256" },
    ],
    internalType: "struct IPendleV2Router.ApproxParams",
    name: "guessPtOut",
    type: "tuple",
  },
] as const;

type ApproxParams = {
  guessMin: bigint;
  guessMax: bigint;
  guessOffchain: bigint;
  maxIteration: bigint;
  eps: bigint;
};

export type BuyPrincipleTokenArgs = {
  principalTokenAddress: Address;
  market: Address;
  pricingDuration: number;
  depositTokenAddress: Address;
  depositAmount: bigint;
  guessPtOut: ApproxParams;
};

export function buyPrincipleTokenEncode(args: BuyPrincipleTokenArgs): Hex {
  return encodeAbiParameters(buyPrincipleTokenEncoding, [
    args.principalTokenAddress,
    args.market,
    args.pricingDuration,
    args.depositTokenAddress,
    args.depositAmount,
    args.guessPtOut,
  ]);
}

export function buyPrincipleTokenDecode(encoded: Hex): BuyPrincipleTokenArgs {
  const [principalTokenAddress, market, pricingDuration, depositTokenAddress, depositAmount, guessPtOut] =
    decodeAbiParameters(buyPrincipleTokenEncoding, encoded);

  return {
    principalTokenAddress,
    market,
    pricingDuration,
    depositTokenAddress,
    depositAmount,
    guessPtOut,
  };
}

//--------------------------------------------------------------------------------------------
// SELL PRINCIPLE TOKEN
//--------------------------------------------------------------------------------------------

export const sellPrincipleToken = ExternalPositionManager.makeUse(Action.SellPrincipalToken, sellPrincipleTokenEncode);

const sellPrincipleTokenEncoding = [
  {
    name: "principalTokenAddress",
    type: "address",
  },
  {
    name: "market",
    type: "address",
  },
  {
    name: "withdrawalTokenAddress",
    type: "address",
  },
  {
    name: "withdrawalAmount",
    type: "uint256",
  },
  {
    name: "minIncomingAmount",
    type: "uint256",
  },
] as const;

export type SellPrincipleTokenArgs = {
  principleTokenAddress: Address;
  market: Address;
  withdrawalTokenAddress: Address;
  withdrawalAmount: bigint;
  minIncomingAmount: bigint;
};

export function sellPrincipleTokenEncode(args: SellPrincipleTokenArgs): Hex {
  return encodeAbiParameters(sellPrincipleTokenEncoding, [
    args.principleTokenAddress,
    args.market,
    args.withdrawalTokenAddress,
    args.withdrawalAmount,
    args.minIncomingAmount,
  ]);
}

export function sellPrincipleTokenDecode(encoded: Hex): SellPrincipleTokenArgs {
  const [principleTokenAddress, market, withdrawalTokenAddress, withdrawalAmount, minIncomingAmount] =
    decodeAbiParameters(sellPrincipleTokenEncoding, encoded);

  return {
    principleTokenAddress,
    market,
    withdrawalTokenAddress,
    withdrawalAmount,
    minIncomingAmount,
  };
}

//--------------------------------------------------------------------------------------------
// ADD LIQUIDITY
//--------------------------------------------------------------------------------------------

export const addLiquidity = ExternalPositionManager.makeUse(Action.AddLiquidity, addLiquidityEncode);

const addLiquidityEncoding = [
  {
    name: "market",
    type: "address",
  },
  {
    name: "pricingDuration",
    type: "uint32",
  },
  {
    name: "depositTokenAddress",
    type: "address",
  },
  {
    name: "depositAmount",
    type: "uint256",
  },
  {
    components: [
      { name: "guessMin", type: "uint256" },
      { name: "guessMax", type: "uint256" },
      { name: "guessOffchain", type: "uint256" },
      { name: "maxIteration", type: "uint256" },
      { name: "eps", type: "uint256" },
    ],
    internalType: "struct IPendleV2Router.ApproxParams",
    name: "guessPtReceived",
    type: "tuple",
  },
  {
    name: "minLpOut",
    type: "uint256",
  },
] as const;

export type AddLiquidityArgs = {
  market: Address;
  pricingDuration: number;
  depositTokenAddress: Address;
  depositAmount: bigint;
  guessPtReceived: ApproxParams;
  minLpOut: bigint;
};

export function addLiquidityEncode(args: AddLiquidityArgs): Hex {
  return encodeAbiParameters(addLiquidityEncoding, [
    args.market,
    args.pricingDuration,
    args.depositTokenAddress,
    args.depositAmount,
    args.guessPtReceived,
    args.minLpOut,
  ]);
}

export function addLiquidityDecode(encoded: Hex): AddLiquidityArgs {
  const [market, pricingDuration, depositTokenAddress, depositAmount, guessPtReceived, minLpOut] = decodeAbiParameters(
    addLiquidityEncoding,
    encoded,
  );

  return {
    market,
    pricingDuration,
    depositTokenAddress,
    depositAmount,
    guessPtReceived,
    minLpOut,
  };
}

//--------------------------------------------------------------------------------------------
// REMOVE LIQUIDITY
//--------------------------------------------------------------------------------------------

export const removeLiquidity = ExternalPositionManager.makeUse(Action.RemoveLiquidity, addLiquidityEncode);

const removeLiquidityEncoding = [
  {
    name: "market",
    type: "address",
  },
  {
    name: "withdrawalTokenAddress",
    type: "address",
  },
  {
    name: "withdrawalAmount",
    type: "uint256",
  },
  {
    name: "minSyOut",
    type: "uint256",
  },
  {
    name: "minIncomingAmount",
    type: "uint256",
  },
] as const;

export type RemoveLiquidityArgs = {
  market: Address;
  withdrawalTokenAddress: Address;
  withdrawalAmount: bigint;
  minSyOut: bigint;
  minIncomingAmount: bigint;
};

export function removeLiquidityEncode(args: RemoveLiquidityArgs): Hex {
  return encodeAbiParameters(removeLiquidityEncoding, [
    args.market,
    args.withdrawalTokenAddress,
    args.withdrawalAmount,
    args.minSyOut,
    args.minIncomingAmount,
  ]);
}

export function removeLiquidityDecode(encoded: Hex): RemoveLiquidityArgs {
  const [market, withdrawalTokenAddress, withdrawalAmount, minSyOut, minIncomingAmount] = decodeAbiParameters(
    removeLiquidityEncoding,
    encoded,
  );

  return {
    market,
    withdrawalTokenAddress,
    withdrawalAmount,
    minSyOut,
    minIncomingAmount,
  };
}

//--------------------------------------------------------------------------------------------
// CLAIM REWARDS
//--------------------------------------------------------------------------------------------

export const claimRewards = ExternalPositionManager.makeUse(Action.ClaimRewards, addLiquidityEncode);

const claimRewardsEncoding = [
  {
    name: "marketAddresses",
    type: "address[]",
  },
] as const;

export type ClaimRewardsArgs = {
  marketAddresses: ReadonlyArray<Address>;
};

export function claimRewardsEncode(args: ClaimRewardsArgs): Hex {
  return encodeAbiParameters(claimRewardsEncoding, [args.marketAddresses]);
}

export function claimRewardsDecode(encoded: Hex): ClaimRewardsArgs {
  const [marketAddresses] = decodeAbiParameters(claimRewardsEncoding, encoded);

  return {
    marketAddresses,
  };
}

//--------------------------------------------------------------------------------------------
// EXTERNAL READ FUNCTIONS
//--------------------------------------------------------------------------------------------

export async function readTokensForMarket(
  client: PublicClient,
  args: Viem.ContractCallParameters<{
    pendleMarket: Address;
  }>,
) {
  const [sy, pt, yt] = await readContract(client, {
    ...Viem.extractBlockParameters(args),
    abi: parseAbi(["function readTokens() external view returns (address,address,address)"]),
    functionName: "readTokens",
    address: args.pendleMarket,
  });

  return { sy, pt, yt };
}

export function getRewardTokensForMarket(
  client: PublicClient,
  args: Viem.ContractCallParameters<{
    pendleMarket: Address;
  }>,
) {
  return readContract(client, {
    ...Viem.extractBlockParameters(args),
    abi: parseAbi(["function getRewardTokens() external view returns (address[] memory rewardsTokens_)"]),
    functionName: "getRewardTokens",
    address: args.pendleMarket,
  });
}
