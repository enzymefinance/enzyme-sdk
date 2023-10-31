// @generated by protoc-gen-es v1.4.1 with parameter "target=ts"
// @generated from file enzyme/enzyme/v1alpha/external_position_item.proto (package enzyme.enzyme.v1alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message enzyme.enzyme.v1alpha.ExternalPositionItem
 */
export class ExternalPositionItem extends Message<ExternalPositionItem> {
  /**
   * The address of the external position
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * The type of the external position
   *
   * @generated from field: string type = 2;
   */
  type = "";

  /**
   * The current value of the external position
   *
   * @generated from field: float value = 3;
   */
  value = 0;

  constructor(data?: PartialMessage<ExternalPositionItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "enzyme.enzyme.v1alpha.ExternalPositionItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExternalPositionItem {
    return new ExternalPositionItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExternalPositionItem {
    return new ExternalPositionItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExternalPositionItem {
    return new ExternalPositionItem().fromJsonString(jsonString, options);
  }

  static equals(a: ExternalPositionItem | PlainMessage<ExternalPositionItem> | undefined, b: ExternalPositionItem | PlainMessage<ExternalPositionItem> | undefined): boolean {
    return proto3.util.equals(ExternalPositionItem, a, b);
  }
}

