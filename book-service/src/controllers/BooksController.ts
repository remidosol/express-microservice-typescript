import {
  ErrorResponseI,
  MutatedResponseI,
  SuccessResponseI,
  MutatedRequestI,
  BookSearchTypes,
  Item,
  User,
} from '../types/index'

import { successResponseResource, manipulateSearchBooks } from '../utils/index'

import {
  BookIdException,
  BookmarkNotFoundException,
  BookNotFoundException,
  BookSearchException,
  CredValidatorException,
} from '../exceptions/index'

// import { DatabaseLogger } from '../providers/index'
import { NextFunction } from 'express'
import { AxiosBookInstance } from '../providers/index'
import { Bookmark } from '../database/models/index'

type MutatedResponse = MutatedResponseI<
  SuccessResponseI<Bookmark> | ErrorResponseI
>

type BookmarksAndCounts = SuccessResponseI<Bookmark[]> | { count: number }

/**
 * @class BooksController
 *
 * @description Consists static functions/controllers that coded for book service
 */
export class BooksController {
  /**
   * checkToken
   *
   * @param req Mutated Express Request Object Interface
   * @param res Mutated Express Response Object Interface
   * @returns Mutated Response
   *
   * @description Checks whether user authenticated or not (with checkUser middlewares)
   */
  static checkToken = async (
    req: MutatedRequestI,
    res: MutatedResponseI<SuccessResponseI<User>>
    // next: NextFunction
  ) => {
    return res.status(200).json(
      successResponseResource.success<User>({
        data: req.user!,
        statusCode: 200,
      })
    )
  }

  /**
   * listBookmarks
   *
   * @param req Mutated Express Request Object Interface
   * @param res Mutated Express Response Object Interface
   * @param next Express NextFunction Object Interface
   *
   * @returns A list of bookmarks for a specific user
   *
   * @description Lists a bookmark for a specific user
   */
  static listBookmarks = async (
    req: MutatedRequestI,
    res: MutatedResponseI<BookmarksAndCounts>,
    next: NextFunction
  ) => {
    try {
      const user = req.user
      if (user) {
        const bookmarksOfUser = await Bookmark.findAndCountAll({
          where: { userId: user.id },
        })

        return res.status(200).json({
          data: bookmarksOfUser.rows,
          count: bookmarksOfUser.count,
          statusCode: 200,
          success: true,
        })
      } else {
        next(new CredValidatorException())
      }
    } catch (err) {
      return next(err)
    }
  }

  /**
   * addBookmark
   *
   * @param req Mutated Express Request Object Interface
   * @param res Mutated Express Response Object Interface
   * @param next Express NextFunction Object Interface
   *
   * @returns Added bookmark data
   *
   * @description Creates a bookmark for a specific user
   */
  static addBookmark = async (
    req: MutatedRequestI<Pick<Bookmark, 'itemId'>>,
    res: MutatedResponse,
    next: NextFunction
  ) => {
    try {
      const successRes: MutatedResponseI<SuccessResponseI<Bookmark>> = res
      const { itemId } = req.body

      if (!itemId) {
        return next(new BookIdException())
      }

      const book = await AxiosBookInstance.get<BookSearchTypes>('', {
        params: {
          q: itemId,
        },
      })

      if (book.data.items) {
        const {
          title,
          subtitle,
          authors,
          pageCount,
          publisher,
          publishedDate,
          imageLinks,
          language,
          infoLink: link,
        } = book.data.items[0].volumeInfo

        const bookmark = Bookmark.build({
          userId: req.user?.id,
          itemId,
          title,
          subtitle,
          pageCount,
          publisher,
          publishedDate,
          language,
        })

        bookmark.authors = authors && `${JSON.stringify(authors)}`
        bookmark.link = link && `${link}`

        if (imageLinks && imageLinks?.smallThumbnail && imageLinks?.thumbnail) {
          bookmark.image = `['${imageLinks.smallThumbnail}' , '${imageLinks.thumbnail}']`
        } else if (imageLinks && imageLinks.thumbnail) {
          bookmark.image = `['${imageLinks.thumbnail}']`
        } else if (imageLinks && imageLinks.smallThumbnail) {
          bookmark.image = `['${imageLinks.smallThumbnail}']`
        } else {
          bookmark.image = undefined
        }

        await bookmark.save()

        if (bookmark) {
          return successRes.json(
            successResponseResource.success<Bookmark>({
              data: bookmark.toJSON(),
              statusCode: 201,
            })
          )
        } else {
          return next(new Error())
        }
      } else {
        return next(new BookNotFoundException())
      }
    } catch (err) {
      console.log(err)
      return next(err)
    }
  }

  /**
   * deleteBookmark
   *
   * @param req Mutated Express Request Object Interface
   * @param res Mutated Express Response Object Interface
   * @param next Express NextFunction Object Interface
   *
   * @returns Deleted bookmark count
   *
   * @description Deletes a bookmark for a specific user
   */
  static deleteBookmark = async (
    req: MutatedRequestI<Pick<Bookmark, 'itemId'>>,
    res: MutatedResponseI<SuccessResponseI<string>>,
    next: NextFunction
  ) => {
    try {
      if (req.user) {
        if (req.body.itemId) {
          const bookmark = await Bookmark.findOne({
            where: { itemId: req.body.itemId },
          })

          await bookmark?.destroy()

          if (bookmark) {
            return res.status(200).json(
              successResponseResource.success<string>({
                data: 'Your bookmark has been successfully deleted!',
                statusCode: 200,
              })
            )
          } else {
            next(new BookmarkNotFoundException())
          }
        } else {
          next(new BookIdException())
        }
      } else {
        next(new CredValidatorException())
      }
    } catch (err) {
      return next(err)
    }
  }

  static searchBooks = async (
    req: MutatedRequestI<{ query: string }>,
    res: MutatedResponseI<SuccessResponseI<Partial<Item>[]>>,
    next: NextFunction
  ) => {
    try {
      if (req.body) {
        const searchedBooks = await AxiosBookInstance.get<BookSearchTypes>('', {
          params: {
            q: req.body.query,
          },
        })

        if (searchedBooks.data.items) {
          const asBookmark = manipulateSearchBooks(searchedBooks.data.items)

          // console.log(searchedBooks.data)

          return res.status(200).json(
            successResponseResource.success<Partial<Item>[]>({
              data: asBookmark,
              statusCode: 200,
              success: true,
            })
          )
        } else {
          next(new BookNotFoundException())
        }
      } else {
        next(new BookSearchException('Please provide a search string!'))
      }
    } catch (err) {
      next(err)
    }
  }
}
