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

/**
 * The input level of the selected channel. Only one property is required for setting. If both provided, gain will be prioritized and level would be ignored.
 */
export class Level {
  "gain"?: number;
  "normalised"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "gain",
      baseName: "gain",
      type: "number",
    },
    {
      name: "normalised",
      baseName: "normalised",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return Level.attributeTypeMap;
  }
}
