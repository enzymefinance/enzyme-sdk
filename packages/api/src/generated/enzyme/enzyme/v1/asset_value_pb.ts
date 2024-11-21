// @generated by protoc-gen-es v2.2.0 with parameter "target=ts,import_extension=js"
// @generated from file enzyme/enzyme/v1/asset_value.proto (package enzyme.enzyme.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file enzyme/enzyme/v1/asset_value.proto.
 */
export const file_enzyme_enzyme_v1_asset_value: GenFile = /*@__PURE__*/
  fileDesc("CiJlbnp5bWUvZW56eW1lL3YxL2Fzc2V0X3ZhbHVlLnByb3RvEhBlbnp5bWUuZW56eW1lLnYxImQKCkFzc2V0VmFsdWUSDwoHYWRkcmVzcxgBIAEoCRIPCgdiYWxhbmNlGAIgASgCEg0KBXByaWNlGAMgASgCEg0KBXZhbHVlGAQgASgCEhYKDnByaWNlX2lzX3ZhbGlkGAUgASgIQokBChRjb20uZW56eW1lLmVuenltZS52MUIPQXNzZXRWYWx1ZVByb3RvUAGiAgNFRViqAhBFbnp5bWUuRW56eW1lLlYxygIQRW56eW1lXEVuenltZVxWMeICHEVuenltZVxFbnp5bWVcVjFcR1BCTWV0YWRhdGHqAhJFbnp5bWU6OkVuenltZTo6VjFiBnByb3RvMw");

/**
 * @generated from message enzyme.enzyme.v1.AssetValue
 */
export type AssetValue = Message<"enzyme.enzyme.v1.AssetValue"> & {
  /**
   * The address of the asset
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * The vault's current balance in the asset
   *
   * @generated from field: float balance = 2;
   */
  balance: number;

  /**
   * The current price for one unit of the asset
   *
   * @generated from field: float price = 3;
   */
  price: number;

  /**
   * The current value of the asset
   *
   * @generated from field: float value = 4;
   */
  value: number;

  /**
   * Is the current price valid?
   *
   * @generated from field: bool price_is_valid = 5;
   */
  priceIsValid: boolean;
};

/**
 * Describes the message enzyme.enzyme.v1.AssetValue.
 * Use `create(AssetValueSchema)` to create a new message.
 */
export const AssetValueSchema: GenMessage<AssetValue> = /*@__PURE__*/
  messageDesc(file_enzyme_enzyme_v1_asset_value, 0);

