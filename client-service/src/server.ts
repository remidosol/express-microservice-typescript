import express, { Application } from 'express'
import bodyParser from 'body-parser'
import { AuthRoutes } from './routes/auth.routes'
import { ExpressLogger } from './providers/index'

export const getApp: () => Application = () => {
  const app = express()

  // Logging express
  app.use(ExpressLogger)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(bodyParser.raw())

  app.use('/auth', AuthRoutes.getRouter())

  return app
}
