import express, { Application } from 'express'
import bodyParser from 'body-parser'
import { BookRoutes } from './routes/books.routes'
import { ExpressLogger, AxiosAuthInstance, AxiosBookInstance } from './providers/index'
import { requestLogger, errorLogger } from 'axios-logger'

export const getApp: () => Application = () => {
  const app = express()

  // Logging express
  app.use(ExpressLogger)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(bodyParser.raw())

  app.use('/books', BookRoutes.getRouter())

  // Logging Auth Api Requests
  AxiosAuthInstance.interceptors.request.use(requestLogger, errorLogger)

  // Logging Google Books Api Requests
  AxiosBookInstance.interceptors.request.use(
    requestLogger,
    errorLogger
  )

  return app
}
