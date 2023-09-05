// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file enzyme/enzyme/v1/depositor_time_series_item.proto (package enzyme.enzyme.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message enzyme.enzyme.v1.DepositorTimeSeriesItem
 */
export class DepositorTimeSeriesItem extends Message<DepositorTimeSeriesItem> {
  /**
   * The timestamp of the data point
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * The gross asset value at the timestamp
   *
   * @generated from field: float gross_asset_value = 2;
   */
  grossAssetValue = 0;

  /**
   * The number of vaults deposited into at the timestamp
   *
   * @generated from field: float number_of_vaults = 3;
   */
  numberOfVaults = 0;

  constructor(data?: PartialMessage<DepositorTimeSeriesItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "enzyme.enzyme.v1.DepositorTimeSeriesItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "gross_asset_value", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "number_of_vaults", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositorTimeSeriesItem {
    return new DepositorTimeSeriesItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositorTimeSeriesItem {
    return new DepositorTimeSeriesItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositorTimeSeriesItem {
    return new DepositorTimeSeriesItem().fromJsonString(jsonString, options);
  }

  static equals(a: DepositorTimeSeriesItem | PlainMessage<DepositorTimeSeriesItem> | undefined, b: DepositorTimeSeriesItem | PlainMessage<DepositorTimeSeriesItem> | undefined): boolean {
    return proto3.util.equals(DepositorTimeSeriesItem, a, b);
  }
}

