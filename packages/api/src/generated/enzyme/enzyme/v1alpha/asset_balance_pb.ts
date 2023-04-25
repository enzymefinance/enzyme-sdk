// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file enzyme/enzyme/v1alpha/asset_balance.proto (package enzyme.enzyme.v1alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message enzyme.enzyme.v1alpha.AssetBalance
 */
export class AssetBalance extends Message<AssetBalance> {
  /**
   * @generated from field: string asset_address = 1;
   */
  assetAddress = "";

  /**
   * @generated from field: float balance = 2;
   */
  balance = 0;

  constructor(data?: PartialMessage<AssetBalance>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "enzyme.enzyme.v1alpha.AssetBalance";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "asset_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "balance", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetBalance {
    return new AssetBalance().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetBalance {
    return new AssetBalance().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetBalance {
    return new AssetBalance().fromJsonString(jsonString, options);
  }

  static equals(a: AssetBalance | PlainMessage<AssetBalance> | undefined, b: AssetBalance | PlainMessage<AssetBalance> | undefined): boolean {
    return proto3.util.equals(AssetBalance, a, b);
  }
}

