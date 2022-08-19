import {
  verify,
  sign,
  decode,
  DecodeOptions,
  VerifyCallback,
  Jwt,
} from 'jsonwebtoken'
import { privateKey, publicKey } from '../ReadKeyUtils'
import { signOptions, verifyOptions } from '../../config/index'

export default class JWTUtils {
  static getJWTSigning = async (payload: string) => {
    return sign(payload, privateKey, signOptions)
  }

  static verifyJWTSigning = async (
    token: string,
    callbackFn?: VerifyCallback<Jwt>
  ) => {
    
    return callbackFn
      ? verify(token, publicKey, verifyOptions, callbackFn)
      : verify(token, publicKey, verifyOptions)
  }

  static decodeJWTSigning = async (token: string) => {
    const decodeOptions: Partial<DecodeOptions> = {
      complete: true,
    }

    return decode(token, decodeOptions)
  }
}
