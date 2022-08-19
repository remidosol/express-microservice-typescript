import { NextFunction } from 'express'
import {
  // ErrorResponse,
  MutatedResponseI,
  MutatedRequestI,
  ErrorResponseI,
} from '../types/index'
import {
  JWTUtils,
  // getErrorAndMakeResource,
} from '../utils/index'
import { User } from '../database/models/index'
import { UnauthorizedException } from '../exceptions/index'

export const authMiddleware = async (
  req: MutatedRequestI,
  res: MutatedResponseI<ErrorResponseI>,
  next: NextFunction
): Promise<MutatedResponseI<ErrorResponseI> | void> => {
  try {
    const auth =
      req.headers.authorization ||
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token']

    const token = auth && auth.split(' ')[1]

    let userId: number

    if (token) {
      await JWTUtils.verifyJWTSigning(token, (err, decodedUserId) => {
        if (err) {
          const exception = new UnauthorizedException('Please Login!')

          next(exception)
        }

        userId = +decodedUserId!
      })

      const user = await User.findByPk(+userId!)

      req.user = user!

      next()
    }
  } catch (err) {
    next(err)
  }
}
