import {
  type AddressListRegistryPerUserPolicySettings,
  decodeAddressListRegistryPerUserPolicySettings,
  encodeAddressListRegistryPerUserPolicySettings,
} from "@enzymefinance/sdk/internal/Extensions/Policies/utils/AddressListRegistryPerUserPolicies";
import type { Hex } from "viem";

export type Settings = AddressListRegistryPerUserPolicySettings;

/**
 * Encodes the given settings into a hex string.
 *
 * @returns The encoded settings.
 */
export function encodeSettings(args: AddressListRegistryPerUserPolicySettings): Hex {
  return encodeAddressListRegistryPerUserPolicySettings(args);
}

/**
 * Decodes the given settings from a hex string.
 *
 * @returns The decoded settings.
 */
export function decodeSettings(encoded: Hex): AddressListRegistryPerUserPolicySettings {
  return decodeAddressListRegistryPerUserPolicySettings(encoded);
}
