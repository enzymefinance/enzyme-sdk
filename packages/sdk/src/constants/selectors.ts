import { getFunctionSelector } from "viem";

export const AAVE_V2_CLAIM_REWARDS_TO_SELF_SELECTOR = "0x41485304"; //"claimRewardsToSelf(address[], uint256)
export const REGISTRY_ADD_TO_LIST_SELECTOR = "0x8da3d736"; // addToList(uint256,address[])
export const REGISTRY_ATTEST_LISTS_SELECTOR = "0xb426f946"; // attestLists(uint256[],string[])
export const REGISTRY_CREATE_LIST_SELECTOR = "0xbe68406e"; // createList(address,uint8,address[])
export const REGISTRY_REMOVE_FROM_LIST_SELECTOR = "0x51d3a322"; // removeFromList(uint256,address[])
export const REGISTRY_SET_LIST_OWNER_SELECTOR = "0x956e8faa"; // setListOwner(uint256,address)
export const REGISTRY_SET_LIST_UPDATE_TYPE_SELECTOR = "0xee4483dc"; // setListUpdateType(uint256,uint8)
export const CURVE_MINTER_MINT_SELECTOR = "0x6a627842"; // mint(address)
export const CURVE_MINTER_MINT_MANY_SELECTOR = "0xa51e1904"; // mint_many(address[8])
export const CURVE_MINTER_TOGGLE_APPROVE_MINT_SELECTOR = "0xdd289d60"; // toggle_approve_mint(address)
export const PRICELESS_ASSET_BYPASS_START_ASSET_BYPASS_TIMELOCK_SELECTOR = "0x07d2890e"; // startAssetBypassTimelock(address)
export const SYNTHETIX_ASSIGN_EXCHANGE_DELEGATE_SELECTOR = "0x447fbc63"; // approveExchangeOnBehalf(address)
export const SETTLE_CONTINUOUS_FEES_SELECTOR = "0xc071fe93"; // settleContinuousFees(address,bytes)
export const VAULT_CALL_ANY_DATA_HASH = "0x5bf1898dd28c4d29f33c4c1bb9b8a7e2f6322847d70be63e8f89de024d08a669"; // mln.vaultCall.any
export const LEND_SELECTOR = getFunctionSelector("lend(address,bytes,bytes)");
export const REDEEM_SELECTOR = getFunctionSelector("redeem(address,bytes,bytes)");
