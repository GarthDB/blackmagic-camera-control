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

export class Resolution {
  /**
   * Height of the resolution
   */
  "height"?: number;
  /**
   * Width of the resolution
   */
  "width"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "height",
      baseName: "height",
      type: "number",
    },
    {
      name: "width",
      baseName: "width",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return Resolution.attributeTypeMap;
  }
}
