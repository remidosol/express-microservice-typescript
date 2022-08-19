/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-control-regex */
import {
  MutatedRequestI,
  MutatedResponseI,
  ErrorResponseI,
} from '../types/index'
import { errorResponseResource } from '../utils/index'
import { ValidationError } from 'sequelize'
import { NextFunction } from 'express'
// import { DatabaseLogger } from '../providers/index'
import {
  CredValidatorException,
  UserNotFoundException,
  BookIdException,
  BookSearchException,
  BookmarkNotFoundException,
  BookNotFoundException,
} from '../exceptions/index'

/**
 * ErrorHandlerMiddleware
 *
 * @param err Error object
 * @param req Request object
 * @param res Response object
 * @param next NextFunction object
 * @returns Response body for Express response as MutatedResponseI<ErrorResponseI>
 *
 * @description Error handler Middleware
 *
 * ? INFO
 * ! This function's Cognitive Complexity has been measured as difficult/high
 * ! Therefore, it may be considered to improvable due to it is not coded with effectively ways
 */
export const errorHandlerMiddleware = async (
  err:
    | Error
    | ValidationError
    | UserNotFoundException
    | CredValidatorException
    | BookIdException
    | BookmarkNotFoundException
    | BookSearchException
    | BookNotFoundException
    | any,
  req: MutatedRequestI,
  res: MutatedResponseI<ErrorResponseI>,
  next: NextFunction
) => {
  if (err instanceof ValidationError) {
    const errBody = errorResponseResource.error({
      message: [...err.errors.map((error) => error.message)],
      statusCode: 400,
    })

    // DatabaseLogger.warn(errBody)

    return res.status(errBody.statusCode).json(errBody)
  } else if (err instanceof CredValidatorException) {
    const errBody = errorResponseResource.error({
      message: err.message
        ? err.message
        : err.name + ': Email and password are required',
      statusCode: err.statusCode,
    })

    // DatabaseLogger.warn(errBody)

    return res.status(errBody.statusCode).json(errBody)
  } else if (err instanceof UserNotFoundException) {
    const errBody = errorResponseResource.error({
      message: err.message ? err.message : `${err.name}: User not found`,
      statusCode: err.statusCode,
    })

    // DatabaseLogger.warn(errBody)

    return res.status(errBody.statusCode).json(errBody)
  } else if (err instanceof BookIdException) {
    const errBody = errorResponseResource.error({
      message: err.message
        ? err.message
        : `${err.name}: Book item id is not provided`,
      statusCode: err.statusCode,
    })

    // DatabaseLogger.warn(errBody)

    return res.status(errBody.statusCode).json(errBody)
  } else if (err instanceof BookSearchException) {
    const errBody = errorResponseResource.error({
      message: err.message
        ? err.message
        : `${err.name}: Search string is not provided`,
      statusCode: err.statusCode,
    })

    // DatabaseLogger.warn(errBody)

    return res.status(errBody.statusCode).json(errBody)
  } else if (err instanceof BookmarkNotFoundException) {
    const errBody = errorResponseResource.error({
      message: err.message ? err.message : `${err.name}: Bookmark not found`,
      statusCode: err.statusCode,
    })

    // DatabaseLogger.warn(errBody)

    return res.status(errBody.statusCode).json(errBody)
  } else if (err instanceof BookNotFoundException) {
    const errBody = errorResponseResource.error({
      message: err.message ? err.message : `${err.name}: Book not found`,
      statusCode: err.statusCode,
    })

    // DatabaseLogger.warn(errBody)

    return res.status(errBody.statusCode).json(errBody)
  } else {
    const errBody = errorResponseResource.error({
      message:
        err.message || err.errors || err.messages || 'Something went wrong!',
      statusCode: 500,
    })

    console.log(err)

    return res.status(errBody.statusCode).json(errBody)
  }
}
