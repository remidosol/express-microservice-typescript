export class BookIdException extends Error {
    constructor(message?: string) {
      super(message)
      this.name = 'BookItemIdNotProvided'
      this.statusCode = 400
    }
  
    name: string
    statusCode: number
}

export class BookNotFoundException extends Error {
    constructor(message?: string) {
      super(message)
      this.name = 'BookNotFound'
      this.statusCode = 400
    }
  
    name: string
    statusCode: number
}

export class BookSearchException extends Error {
    constructor(message?: string) {
      super(message)
      this.name = 'BookSearchStringNotProvided'
      this.statusCode = 400
    }
  
    name: string
    statusCode: number
}

export class BookmarkNotFoundException extends Error {
    constructor(message?: string) {
      super(message)
      this.name = 'BookmarkNotFound'
      this.statusCode = 400
    }
  
    name: string
    statusCode: number
}