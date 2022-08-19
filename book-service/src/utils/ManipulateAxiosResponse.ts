import { Bookmark } from '../database/models/index'
import { Item } from '../types/index'


/**
 * manipulateSearchBooks
 * 
 * @param items Comes in Google Books API body Item[]
 * @returns manipulated items
 * 
 * @description  Created for manipulating Google Books API search response to match Bookmark
 */
export const manipulateSearchBooks = (
  items: Item[]
  // searchedContext: Partial<BookSearchTypes>
) => {
  const result: Partial<Item>[] = []
  const bookmarkAttributes = [
    ...Object.keys(Bookmark.getAttributes()),
    'infoLink',
    'imageLinks',
  ]

  for (const bookItem of items){
    result.push(deleteAttrs(bookItem, bookmarkAttributes))
  }

  return result
}

/**
 * deleteAttrs
 *
 * @param item Google Books APı Book Item
 * @param modelAttrs Bookmark Model Attributes
 * @returns Manipulated item as partial Bookmark Model
 */
const deleteAttrs = (
  item: Partial<Item>,
  modelAttrs: string[]
): Partial<Item> => {

  
  for (const key in Object.keys(item)) {
    if (!modelAttrs.includes(key)) {
      delete item[key as keyof typeof item]
    }
  }

  if (item.volumeInfo) {
    for (const key in item.volumeInfo) {
      if (!modelAttrs.includes(key)) {
        delete item.volumeInfo[key as keyof typeof item.volumeInfo]
      }
    }

    if (item.volumeInfo.imageLinks) {
      for (const key in item.volumeInfo.imageLinks) {
        if (!modelAttrs.includes(key)) {
          delete item.volumeInfo.imageLinks[
            key as keyof typeof item.volumeInfo.imageLinks
          ]
        }
      }
    }
  }

  return item
}
