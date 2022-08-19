import { NextFunction } from 'express'
import {
  User,
  MutatedResponseI,
  MutatedRequestI,
  ErrorResponseI,
  SuccessResponse,
} from '../types/index'
import { UserNotFoundException } from '../exceptions/index'
import { AxiosAuthInstance } from '../providers/index'

export const checkUser = async (
  req: MutatedRequestI,
  res: MutatedResponseI<ErrorResponseI>,
  next: NextFunction
) => {
  const authToken = req.headers.authorization
  if (authToken) {
    const authApiResponse = await AxiosAuthInstance.get<SuccessResponse<User>>(
      '/check_token',
      {
        headers: {
          authorization: authToken,
        },
      }
    )

    if (authApiResponse.data.success) {
      req.user = authApiResponse.data.data
      next()
    } else {
      next(
        new UserNotFoundException('Please register or login to provide token!')
      )
    }
  } else {
    const exception = new UserNotFoundException('Please login!')
    return res.status(exception.statusCode).json({
      message: exception.message,
      statusCode: exception.statusCode
    })
    // next(
    //   new UserNotFoundException('Please register or login to provide token!')
    // )
  }
}
