import { Router } from 'express'
import { CommonRoutes } from './common.routes'
import { checkUser, errorHandlerMiddleware } from '../middlewares/index'
import { BooksController } from '../controllers/index'

/**
 * @class BookRoutes
 *
 * @description Has created to provide routers throughout Express and make book-service to be used.
 */
export class BookRoutes extends CommonRoutes {
  constructor() {
    super('BookRoutes')
  }

  static getRouter() {
    const bookRouter = Router()

    bookRouter.get('/check_token', checkUser, BooksController.checkToken)

    bookRouter.post('/list', checkUser, BooksController.listBookmarks)

    bookRouter.post('/add', checkUser, BooksController.addBookmark)

    bookRouter.delete('/delete', checkUser, BooksController.deleteBookmark)

    bookRouter.post('/search', BooksController.searchBooks)

    bookRouter.use(errorHandlerMiddleware)

    return bookRouter
  }
}
