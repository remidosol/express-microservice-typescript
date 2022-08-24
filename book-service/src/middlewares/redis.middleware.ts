import { NextFunction } from 'express'
import {
  MutatedRequestI,
  MutatedResponseI,
  SuccessResponseI,
  BookSearchTypes,
} from '../types/index'

import { RedisConnection, DatabaseLogger } from '../providers/index'
import { successResponseResource } from '../utils/index'

export const checkCache = async (
  req: MutatedRequestI<{ query: string }>,
  res: MutatedResponseI<SuccessResponseI<BookSearchTypes>>,
  next: NextFunction
) => {
  try {
    const { query } = req.body

    const cachedResult = await RedisConnection.get(query)

    if (cachedResult) {
      DatabaseLogger.info('Data cached before.')

      return res.status(200).json(
        successResponseResource.success<BookSearchTypes>({
          data: JSON.parse(cachedResult),
          statusCode: 200,
        })
      )
    }

    next()
  } catch (err: any) {
    DatabaseLogger.error(err.message)
    next(new Error(err.message))
  }
}
