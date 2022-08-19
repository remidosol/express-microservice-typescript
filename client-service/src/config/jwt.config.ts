import { SignOptions, VerifyOptions } from 'jsonwebtoken'

export const signOptions: SignOptions = {
  algorithm: 'RS256',
}

export const verifyOptions: VerifyOptions & { complete: true } = {
  algorithms: ['RS256'],
  complete: true,
}
