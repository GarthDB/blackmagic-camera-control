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

export class VideoShutterPutRequest {
  /**
   * Shutter speed value in fractions of a second (minimum is sensor frame rate)
   */
  "shutterSpeed"?: number;
  /**
   * Shutter angle
   */
  "shutterAngle"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "shutterSpeed",
      baseName: "shutterSpeed",
      type: "number",
    },
    {
      name: "shutterAngle",
      baseName: "shutterAngle",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return VideoShutterPutRequest.attributeTypeMap;
  }
}
