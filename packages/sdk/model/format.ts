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
import { FrameRate } from "./frameRate";
import { Resolution } from "./resolution";

export class Format {
  /**
   * Currently selected codec
   */
  "codec"?: string;
  "frameRate"?: FrameRate;
  "maxOffSpeedFrameRate"?: number;
  "minOffSpeedFrameRate"?: number;
  "offSpeedEnabled"?: boolean;
  "offSpeedFrameRate"?: number;
  "recordResolution"?: Resolution;
  "sensorResolution"?: Resolution;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "codec",
      baseName: "codec",
      type: "string",
    },
    {
      name: "frameRate",
      baseName: "frameRate",
      type: "FrameRate",
    },
    {
      name: "maxOffSpeedFrameRate",
      baseName: "maxOffSpeedFrameRate",
      type: "number",
    },
    {
      name: "minOffSpeedFrameRate",
      baseName: "minOffSpeedFrameRate",
      type: "number",
    },
    {
      name: "offSpeedEnabled",
      baseName: "offSpeedEnabled",
      type: "boolean",
    },
    {
      name: "offSpeedFrameRate",
      baseName: "offSpeedFrameRate",
      type: "number",
    },
    {
      name: "recordResolution",
      baseName: "recordResolution",
      type: "Resolution",
    },
    {
      name: "sensorResolution",
      baseName: "sensorResolution",
      type: "Resolution",
    },
  ];

  static getAttributeTypeMap() {
    return Format.attributeTypeMap;
  }
}

export namespace Format {}