import {
  SuccessResponseI,
  ErrorResponseI,
} from '../types/index'

/**
 * @class SuccessResponseResource
 *
 * @description Has been created for wrapping, manipulating and to provide common Express Response
 */
export class SuccessResponseResource<T = undefined> {
  constructor(successPayload?: SuccessResponseI<T>) {
    if (successPayload) {
      successPayload.success = true
    }
    this._successPayload = successPayload ?? this.successPayload
  }

  private _successPayload: SuccessResponseI<T>

  private static _instance: SuccessResponseResource<any>

  static getInstance = <T = undefined>(
    successPayload?: SuccessResponseI<T>
  ) => {
    if (this._instance) {
      if (successPayload) {
        successPayload.success = true
      }
      return successPayload ? this.setPayload(successPayload) : this._instance
    }

    this._instance = new SuccessResponseResource<T>(successPayload)
    return this._instance
  }

  success = <SuccessT>(
    scssPayload: SuccessResponseI<SuccessT>
  ): SuccessResponseI<SuccessT> => {
    scssPayload.success = true
    SuccessResponseResource.getInstance().successPayload = scssPayload
    return SuccessResponseResource.getInstance().successPayload
  }

  public get successPayload() {
    return this._successPayload
  }

  public set successPayload(payload: SuccessResponseI<T>) {
    this._successPayload = payload
  }

  static setPayload = <T>(successPayload: SuccessResponseI<T>) => {
    successPayload.success = true
    this._instance._successPayload = successPayload
    return this._instance
  }
}

SuccessResponseResource.getInstance()

export const successResponseResource = SuccessResponseResource.getInstance()

/**
 * @class ResponseResource
 *
 * @description Has been created for wrapping, manipulating and to provide common Express Response
 */
export class ErrorResponseResource {
  constructor(payload?: ErrorResponseI) {
    if (payload) {
      payload.success = false
    }
    this._errorPayload = payload ?? this.errorPayload
  }

  private _errorPayload: ErrorResponseI

  private static _instance: ErrorResponseResource

  static getInstance = (payload?: ErrorResponseI) => {
    if (this._instance) {
      if (payload) {
        payload.success = false
      }
      return payload ? this.setPayload(payload) : this._instance
    }

    this._instance = new ErrorResponseResource(payload)
    return this._instance
  }

  error = (payload: ErrorResponseI): ErrorResponseI => {
    payload.success = false
    ErrorResponseResource.getInstance().errorPayload = payload
    return ErrorResponseResource.getInstance().errorPayload
  }

  public get errorPayload() {
    return this._errorPayload
  }

  public set errorPayload(payload: ErrorResponseI) {
    this._errorPayload = payload
  }

  static setPayload = (payload: ErrorResponseI) => {
    payload.success = false
    this._instance._errorPayload = payload
    return this._instance
  }
}

ErrorResponseResource.getInstance()

export const errorResponseResource = ErrorResponseResource.getInstance()
