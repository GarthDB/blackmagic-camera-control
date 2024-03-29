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

export class ActiveMedia {
  /**
   * Working set index of the active media device
   */
  "workingsetIndex"?: number;
  /**
   * Internal device name of this media device
   */
  "deviceName"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "workingsetIndex",
      baseName: "workingsetIndex",
      type: "number",
    },
    {
      name: "deviceName",
      baseName: "deviceName",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return ActiveMedia.attributeTypeMap;
  }
}
