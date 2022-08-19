export class UserNotFoundException extends Error {
    constructor (message?: string) {
      super(message)
      this.name = 'UserNotFound'
      this.statusCode = 400
    }

    name: string
    statusCode: number
  }