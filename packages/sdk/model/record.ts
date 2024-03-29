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

export class Record {
  /**
   * Is transport in Input Record mode
   */
  "recording"?: boolean;
  /**
   * Used to set the requested clipName to record to, when specifying \"recording\" attribute to True
   */
  "clipName"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "recording",
      baseName: "recording",
      type: "boolean",
    },
    {
      name: "clipName",
      baseName: "clipName",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return Record.attributeTypeMap;
  }
}
