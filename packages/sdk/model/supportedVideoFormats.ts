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
import { VideoFormat } from "./videoFormat";

export class SupportedVideoFormats {
  "formats"?: Array<VideoFormat>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "formats",
      baseName: "formats",
      type: "Array<VideoFormat>",
    },
  ];

  static getAttributeTypeMap() {
    return SupportedVideoFormats.attributeTypeMap;
  }
}
