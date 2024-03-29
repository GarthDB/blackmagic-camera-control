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

export class TimelineClipsInner {
  /**
   * Unique ID used to identify this clip
   */
  "clipUniqueId"?: number;
  /**
   * Number of frames in this clip on the timeline
   */
  "frameCount"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "clipUniqueId",
      baseName: "clipUniqueId",
      type: "number",
    },
    {
      name: "frameCount",
      baseName: "frameCount",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return TimelineClipsInner.attributeTypeMap;
  }
}
