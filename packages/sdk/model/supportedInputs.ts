/**
 * merged spec
 * merged spec
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";
import { SupportedInputsSupportedInputsInner } from "./supportedInputsSupportedInputsInner";

export class SupportedInputs {
  "supportedInputs"?: Array<SupportedInputsSupportedInputsInner>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "supportedInputs",
      baseName: "supportedInputs",
      type: "Array<SupportedInputsSupportedInputsInner>",
    },
  ];

  static getAttributeTypeMap() {
    return SupportedInputs.attributeTypeMap;
  }
}
