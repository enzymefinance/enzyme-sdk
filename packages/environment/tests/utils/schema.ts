import { expect } from "vitest";
import { z } from "zod";

import { Erc4626Protocol } from "../../src/assets.js";
import type { Address, Hex } from "../../src/index.js";
import {
  AssetType,
  BalancerPoolType,
  BalancerStakingType,
  CurvePoolTemplate,
  CurveStakingType,
  Network,
} from "../../src/index.js";

const address = z.string().regex(/^0x[0-9a-f]{40}$/) as z.Schema<Address>;

export const CommonAssetSchema = z.object({
  decimals: z.number().min(2).max(18),
  id: address,
  name: z.string(),
  network: z.nativeEnum(Network),
  symbol: z.string(),
  type: z.nativeEnum(AssetType),
});

export const SynthetixSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.SYNTHETIX),
});

export const PrimitiveSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.PRIMITIVE),
});

export const AaveSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.AAVE_V2),
  underlying: address,
});

export const AaveV3Schema = CommonAssetSchema.extend({
  type: z.literal(AssetType.AAVE_V3),
  underlying: address,
});

export const BalancerPoolSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.BALANCER_POOL),
  ipa: address.optional(),
  poolFactory: address,
  poolId: z.string().regex(/^0x[0-9a-f]{64}$/) as z.Schema<Hex>,
  poolType: z.nativeEnum(BalancerPoolType),
  staking: z.array(z.object({ token: address, type: z.nativeEnum(BalancerStakingType) })),
  underlyings: z.array(address).min(1),
});

export const BalancerPoolGaugeSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.BALANCER_POOL_GAUGE),
  ipa: address.optional(),
  pool: address,
  poolType: z.nativeEnum(BalancerPoolType),
  underlyings: z.array(address).min(1),
});

export const CompoundSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.COMPOUND_V2),
  underlying: address,
});

export const CompoundV3Schema = CommonAssetSchema.extend({
  type: z.literal(AssetType.COMPOUND_V3),
  underlying: address,
});

export const IdleSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.IDLE),
  underlying: address,
});

export const YearnVaultV2Schema = CommonAssetSchema.extend({
  type: z.literal(AssetType.YEARN_VAULT_V2),
  underlying: address,
});

export const UniswapV2PoolSchema = CommonAssetSchema.extend({
  type: z.literal(AssetType.UNISWAP_V2_POOL),
  underlyings: z.array(address).length(2),
});

export const MaplePoolV1Schema = CommonAssetSchema.extend({
  type: z.literal(AssetType.MAPLE_V1),
  underlying: address,
  rewardsContract: address,
});

export const MaplePoolV2Schema = CommonAssetSchema.extend({
  type: z.literal(AssetType.MAPLE_V2),
  underlying: address,
});

export const ERC4626Schema = CommonAssetSchema.extend({
  type: z.literal(AssetType.ERC_4626),
  protocol: z.nativeEnum(Erc4626Protocol),
  underlying: address,
});

export const CurvePoolGaugeSchema = CommonAssetSchema.extend({
  ipa: address,
  lp: address,
  pool: address,
  template: z.nativeEnum(CurvePoolTemplate),
  type: z.literal(AssetType.CURVE_POOL_GAUGE),
  underlyings: z.array(address).min(1),
});

export const CurvePoolLpSchema = CommonAssetSchema.extend({
  gauge: address.optional(),
  ipa: address,
  pool: address,
  staking: z.array(z.object({ token: address, type: z.nativeEnum(CurveStakingType) })),
  template: z.nativeEnum(CurvePoolTemplate),
  type: z.literal(AssetType.CURVE_POOL_LP),
  underlyings: z.array(address).min(1),
});

export const AssetSchema = z.union([
  PrimitiveSchema,
  SynthetixSchema,
  AaveSchema,
  AaveV3Schema,
  BalancerPoolSchema,
  CompoundSchema,
  IdleSchema,
  YearnVaultV2Schema,
  UniswapV2PoolSchema,
  CurvePoolGaugeSchema,
  CurvePoolLpSchema,
  ERC4626Schema,
]);

function error(result: z.SafeParseReturnType<any, any>) {
  if (!result.success) {
    return JSON.stringify((result as z.SafeParseError<any>).error.issues, undefined, 4);
  }

  return undefined;
}

export function validate<T>(schema: z.ZodSchema<T>, asset: any): asset is T {
  const parsed = schema.safeParse(asset);

  expect(parsed.success, error(parsed)).toBeTruthy();

  return true;
}
