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

export class Color {
  "hue"?: number = 0.0;
  "saturation"?: number = 1.0;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "hue",
      baseName: "hue",
      type: "number",
    },
    {
      name: "saturation",
      baseName: "saturation",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return Color.attributeTypeMap;
  }
}
