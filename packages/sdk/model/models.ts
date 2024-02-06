import localVarRequest from "request";

export * from "./activeMedia";
export * from "./activePreset";
export * from "./addClip";
export * from "./addClipOneOf";
export * from "./addClipOneOf1";
export * from "./autoExposureMode";
export * from "./available";
export * from "./codecFormat";
export * from "./color";
export * from "./contrast";
export * from "./description";
export * from "./descriptionCapabilities";
export * from "./descriptionCapabilitiesPadding";
export * from "./descriptionGainRange";
export * from "./eventsList";
export * from "./format";
export * from "./frameRate";
export * from "./gain";
export * from "./gamma";
export * from "./getRecord";
export * from "./getVideoFormat";
export * from "./input";
export * from "./lensFocusGet200Response";
export * from "./lensIrisGet200Response";
export * from "./lensIrisPutRequest";
export * from "./lensZoomGet200Response";
export * from "./level";
export * from "./lift";
export * from "./lowCutFilter";
export * from "./lumaContribution";
export * from "./mediaActivePutRequest";
export * from "./mediaDeviceInformation";
export * from "./mediaDevicesDeviceNameDoformatGet200Response";
export * from "./mediaDevicesDeviceNameDoformatPutRequest";
export * from "./ndFilterDisplayMode";
export * from "./offset";
export * from "./padding";
export * from "./phantomPower";
export * from "./playback";
export * from "./postPresetResponse";
export * from "./presetList";
export * from "./record";
export * from "./resolution";
export * from "./supportedCodecFormats";
export * from "./supportedFormat";
export * from "./supportedFormats";
export * from "./supportedInputs";
export * from "./supportedInputsSupportedInputsInner";
export * from "./supportedVideoFormats";
export * from "./systemResponse";
export * from "./timecode";
export * from "./timecodeSource";
export * from "./timeline";
export * from "./timelineClipsInner";
export * from "./transportResponse";
export * from "./transports0PutRequest";
export * from "./videoAutoExposureGet200Response";
export * from "./videoFormat";
export * from "./videoGainGet200Response";
export * from "./videoGainPutRequest";
export * from "./videoIsoGet200Response";
export * from "./videoIsoPutRequest";
export * from "./videoNdFilterDisplayModeGet200Response";
export * from "./videoNdFilterGet200Response";
export * from "./videoNdFilterPutRequest";
export * from "./videoShutterGet200Response";
export * from "./videoShutterPutRequest";
export * from "./videoWhiteBalanceGet200Response";
export * from "./videoWhiteBalancePutRequest";
export * from "./videoWhiteBalanceTintGet200Response";
export * from "./videoWhiteBalanceTintPutRequest";
export * from "./workingset";
export * from "./workingsetWorkingsetInner";

import * as fs from "fs";

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

import { ActiveMedia } from "./activeMedia";
import { ActivePreset } from "./activePreset";
import { AddClip } from "./addClip";
import { AddClipOneOf } from "./addClipOneOf";
import { AddClipOneOf1 } from "./addClipOneOf1";
import { AutoExposureMode } from "./autoExposureMode";
import { Available } from "./available";
import { CodecFormat } from "./codecFormat";
import { Color } from "./color";
import { Contrast } from "./contrast";
import { Description } from "./description";
import { DescriptionCapabilities } from "./descriptionCapabilities";
import { DescriptionCapabilitiesPadding } from "./descriptionCapabilitiesPadding";
import { DescriptionGainRange } from "./descriptionGainRange";
import { EventsList } from "./eventsList";
import { Format } from "./format";
import { FrameRate } from "./frameRate";
import { Gain } from "./gain";
import { Gamma } from "./gamma";
import { GetRecord } from "./getRecord";
import { GetVideoFormat } from "./getVideoFormat";
import { Input } from "./input";
import { LensFocusGet200Response } from "./lensFocusGet200Response";
import { LensIrisGet200Response } from "./lensIrisGet200Response";
import { LensIrisPutRequest } from "./lensIrisPutRequest";
import { LensZoomGet200Response } from "./lensZoomGet200Response";
import { Level } from "./level";
import { Lift } from "./lift";
import { LowCutFilter } from "./lowCutFilter";
import { LumaContribution } from "./lumaContribution";
import { MediaActivePutRequest } from "./mediaActivePutRequest";
import { MediaDeviceInformation } from "./mediaDeviceInformation";
import { MediaDevicesDeviceNameDoformatGet200Response } from "./mediaDevicesDeviceNameDoformatGet200Response";
import { MediaDevicesDeviceNameDoformatPutRequest } from "./mediaDevicesDeviceNameDoformatPutRequest";
import { NdFilterDisplayMode } from "./ndFilterDisplayMode";
import { Offset } from "./offset";
import { Padding } from "./padding";
import { PhantomPower } from "./phantomPower";
import { Playback } from "./playback";
import { PostPresetResponse } from "./postPresetResponse";
import { PresetList } from "./presetList";
import { Record } from "./record";
import { Resolution } from "./resolution";
import { SupportedCodecFormats } from "./supportedCodecFormats";
import { SupportedFormat } from "./supportedFormat";
import { SupportedFormats } from "./supportedFormats";
import { SupportedInputs } from "./supportedInputs";
import { SupportedInputsSupportedInputsInner } from "./supportedInputsSupportedInputsInner";
import { SupportedVideoFormats } from "./supportedVideoFormats";
import { SystemResponse } from "./systemResponse";
import { Timecode } from "./timecode";
import { TimecodeSource } from "./timecodeSource";
import { Timeline } from "./timeline";
import { TimelineClipsInner } from "./timelineClipsInner";
import { TransportResponse } from "./transportResponse";
import { Transports0PutRequest } from "./transports0PutRequest";
import { VideoAutoExposureGet200Response } from "./videoAutoExposureGet200Response";
import { VideoFormat } from "./videoFormat";
import { VideoGainGet200Response } from "./videoGainGet200Response";
import { VideoGainPutRequest } from "./videoGainPutRequest";
import { VideoIsoGet200Response } from "./videoIsoGet200Response";
import { VideoIsoPutRequest } from "./videoIsoPutRequest";
import { VideoNdFilterDisplayModeGet200Response } from "./videoNdFilterDisplayModeGet200Response";
import { VideoNdFilterGet200Response } from "./videoNdFilterGet200Response";
import { VideoNdFilterPutRequest } from "./videoNdFilterPutRequest";
import { VideoShutterGet200Response } from "./videoShutterGet200Response";
import { VideoShutterPutRequest } from "./videoShutterPutRequest";
import { VideoWhiteBalanceGet200Response } from "./videoWhiteBalanceGet200Response";
import { VideoWhiteBalancePutRequest } from "./videoWhiteBalancePutRequest";
import { VideoWhiteBalanceTintGet200Response } from "./videoWhiteBalanceTintGet200Response";
import { VideoWhiteBalanceTintPutRequest } from "./videoWhiteBalanceTintPutRequest";
import { Workingset } from "./workingset";
import { WorkingsetWorkingsetInner } from "./workingsetWorkingsetInner";

/* tslint:disable:no-unused-variable */
let primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any",
];

let enumsMap: { [index: string]: any } = {
  "AutoExposureMode.ModeEnum": AutoExposureMode.ModeEnum,
  "AutoExposureMode.TypeEnum": AutoExposureMode.TypeEnum,
  FrameRate: FrameRate,
  "Input.InputEnum": Input.InputEnum,
  "MediaDeviceInformation.StateEnum": MediaDeviceInformation.StateEnum,
  NdFilterDisplayMode: NdFilterDisplayMode,
  "Playback.TypeEnum": Playback.TypeEnum,
  "TimecodeSource.TimecodeEnum": TimecodeSource.TimecodeEnum,
  "TransportResponse.ModeEnum": TransportResponse.ModeEnum,
  "Transports0PutRequest.ModeEnum": Transports0PutRequest.ModeEnum,
};

let typeMap: { [index: string]: any } = {
  ActiveMedia: ActiveMedia,
  ActivePreset: ActivePreset,
  AddClip: AddClip,
  AddClipOneOf: AddClipOneOf,
  AddClipOneOf1: AddClipOneOf1,
  AutoExposureMode: AutoExposureMode,
  Available: Available,
  CodecFormat: CodecFormat,
  Color: Color,
  Contrast: Contrast,
  Description: Description,
  DescriptionCapabilities: DescriptionCapabilities,
  DescriptionCapabilitiesPadding: DescriptionCapabilitiesPadding,
  DescriptionGainRange: DescriptionGainRange,
  EventsList: EventsList,
  Format: Format,
  Gain: Gain,
  Gamma: Gamma,
  GetRecord: GetRecord,
  GetVideoFormat: GetVideoFormat,
  Input: Input,
  LensFocusGet200Response: LensFocusGet200Response,
  LensIrisGet200Response: LensIrisGet200Response,
  LensIrisPutRequest: LensIrisPutRequest,
  LensZoomGet200Response: LensZoomGet200Response,
  Level: Level,
  Lift: Lift,
  LowCutFilter: LowCutFilter,
  LumaContribution: LumaContribution,
  MediaActivePutRequest: MediaActivePutRequest,
  MediaDeviceInformation: MediaDeviceInformation,
  MediaDevicesDeviceNameDoformatGet200Response:
    MediaDevicesDeviceNameDoformatGet200Response,
  MediaDevicesDeviceNameDoformatPutRequest:
    MediaDevicesDeviceNameDoformatPutRequest,
  Offset: Offset,
  Padding: Padding,
  PhantomPower: PhantomPower,
  Playback: Playback,
  PostPresetResponse: PostPresetResponse,
  PresetList: PresetList,
  Record: Record,
  Resolution: Resolution,
  SupportedCodecFormats: SupportedCodecFormats,
  SupportedFormat: SupportedFormat,
  SupportedFormats: SupportedFormats,
  SupportedInputs: SupportedInputs,
  SupportedInputsSupportedInputsInner: SupportedInputsSupportedInputsInner,
  SupportedVideoFormats: SupportedVideoFormats,
  SystemResponse: SystemResponse,
  Timecode: Timecode,
  TimecodeSource: TimecodeSource,
  Timeline: Timeline,
  TimelineClipsInner: TimelineClipsInner,
  TransportResponse: TransportResponse,
  Transports0PutRequest: Transports0PutRequest,
  VideoAutoExposureGet200Response: VideoAutoExposureGet200Response,
  VideoFormat: VideoFormat,
  VideoGainGet200Response: VideoGainGet200Response,
  VideoGainPutRequest: VideoGainPutRequest,
  VideoIsoGet200Response: VideoIsoGet200Response,
  VideoIsoPutRequest: VideoIsoPutRequest,
  VideoNdFilterDisplayModeGet200Response:
    VideoNdFilterDisplayModeGet200Response,
  VideoNdFilterGet200Response: VideoNdFilterGet200Response,
  VideoNdFilterPutRequest: VideoNdFilterPutRequest,
  VideoShutterGet200Response: VideoShutterGet200Response,
  VideoShutterPutRequest: VideoShutterPutRequest,
  VideoWhiteBalanceGet200Response: VideoWhiteBalanceGet200Response,
  VideoWhiteBalancePutRequest: VideoWhiteBalancePutRequest,
  VideoWhiteBalanceTintGet200Response: VideoWhiteBalanceTintGet200Response,
  VideoWhiteBalanceTintPutRequest: VideoWhiteBalanceTintPutRequest,
  Workingset: Workingset,
  WorkingsetWorkingsetInner: WorkingsetWorkingsetInner,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type,
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type,
        );
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === "function"
          ? this.accessToken()
          : this.accessToken;
      requestOptions.headers["Authorization"] = "Bearer " + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = "";

  constructor(
    private location: string,
    private paramName: string,
  ) {}

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == "query") {
      (<any>requestOptions.qs)[this.paramName] = this.apiKey;
    } else if (
      this.location == "header" &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (
      this.location == "cookie" &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers["Cookie"]) {
        requestOptions.headers["Cookie"] +=
          "; " + this.paramName + "=" + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers["Cookie"] =
          this.paramName + "=" + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = "";

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = "";
  public password: string = "";

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: localVarRequest.Options,
) => Promise<void> | void;
