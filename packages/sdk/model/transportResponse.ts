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

export class TransportResponse {
  /**
   * Transport mode.
   */
  "mode"?: TransportResponse.ModeEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "mode",
      baseName: "mode",
      type: "TransportResponse.ModeEnum",
    },
  ];

  static getAttributeTypeMap() {
    return TransportResponse.attributeTypeMap;
  }
}

export namespace TransportResponse {
  export enum ModeEnum {
    InputPreview = <any>"InputPreview",
    InputRecord = <any>"InputRecord",
    Output = <any>"Output",
  }
}