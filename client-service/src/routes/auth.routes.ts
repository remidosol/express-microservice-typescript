import { Router } from 'express'
import { CommonRoutes } from './common.routes'
import { errorHandlerMiddleware } from '../middlewares/index'
import { AuthController } from '../controllers/index'

/**
 * @class AuthRoutes
 *
 * @description Has created to provide routers throughout Express and make auth-service to be used.
 */
export class AuthRoutes extends CommonRoutes {
  constructor() {
    super('AuthRoutes')
  }

  static getRouter() {
    const authRouter = Router()

    authRouter.post('/register', AuthController.register)

    authRouter.post('/login', AuthController.login)

    authRouter.get('/check_token', AuthController.checkToken)

    authRouter.use(errorHandlerMiddleware)

    return authRouter
  }
}
