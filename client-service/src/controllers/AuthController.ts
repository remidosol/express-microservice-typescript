import { User } from '../database/models/index'
import {
  ErrorResponseI,
  MutatedResponseI,
  SuccessResponseI,
  MutatedRequestI,
} from '../types/index'
import {
  BcryptUtils,
  JWTUtils,
  successResponseResource,
  emailRegexp,
} from '../utils/index'
import {
  CredValidatorException,
  UserNotFoundException,
  PasswordMismatchException,
} from '../exceptions/index'
// import { DatabaseLogger } from '../providers/index'
import { NextFunction } from 'express'

type MutatedResponse = MutatedResponseI<SuccessResponseI<User> | ErrorResponseI>

/**
 * @class AuthController
 *
 * @description Consists static functions/controllers that coded for auth service
 */
export class AuthController {
  /**
   * Register Controller
   * @param req Express Mutated Request
   * @param res Express Mutated Response
   * @returns Register Response
   */
  static register = async (
    req: MutatedRequestI<Pick<User, 'email' | 'password'>>,
    res: MutatedResponse,
    next: NextFunction
  ) => {
    const successRes: MutatedResponseI<SuccessResponseI<User>> = res
    try {
      const { email, password } = req.body

      if (!(email && password)) {
        next(new CredValidatorException())
      }

      const user = await User.create({ email, password })

      if (user) {
        user.token = await JWTUtils.getJWTSigning(user.id)

        await user.save()

        return successRes.json(
          successResponseResource.success<User>({
            data: user.toJSON(),
            statusCode: 201,
          })
        )
      }
    } catch (err) {
      return next(err)
    }
  }

  /**
   * Login Controller
   * @param req Express Request
   * @param res Express Mutated Response
   * @returns Login Response
   */
  static login = async (
    req: MutatedRequestI<Pick<User, 'email' | 'password'>>,
    res: MutatedResponse,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body

      if (!(email && password)) {
        next(new CredValidatorException())
      } else if (!email.match(emailRegexp)) {
        next(
          new CredValidatorException('Please provide a valid email address!')
        )
      }

      const user = await User.findOne({ where: { email } })

      if (!user) {
        next(new UserNotFoundException())
      }

      if (user) {
        if (await BcryptUtils.verifyPassword(password, user.password)) {
          next(
            new PasswordMismatchException(
              'Please make sure your password is correct!'
            )
          )
        }
        const newToken = await JWTUtils.getJWTSigning(user.id)

        user.token = newToken

        return res.status(200).json(
          successResponseResource.success<User>({
            data: user.toJSON(),
            statusCode: 200,
            success: true,
          })
        )
      }
    } catch (err: any) {
      next(err)
    }
  }

  /**
   * Check Token Controller
   * Checks user's token and returns user
   * @param req Express MutatedRequestI Request
   * @param res Express Mutated Response
   * @returns Check Token Response
   */
  static checkToken = async (
    req: MutatedRequestI<Pick<User, 'token'>>,
    res: MutatedResponse,
    next: NextFunction
  ) => {
    try {
      const authToken = req.headers.authorization!.split(' ')[1]
      // console.warn(authToken)

      if (authToken) {
        let userId: number

        await JWTUtils.verifyJWTSigning(authToken, (err, decoded) => {
          if (err) throw new Error('Token is not valid')
          userId = +decoded!.payload
        })

        const user = await User.findByPk(+userId!)

        if (user) {
          return res.status(200).json(
            successResponseResource.success<User>({
              data: user.toJSON(),
              statusCode: 200,
            })
          )
        } else {
          return next(new UserNotFoundException('User not found!'))
        }
      } else {
        return next(new CredValidatorException('Please Login!'))
      }
    } catch (err: any) {
      return next(err)
    }
  }
}
