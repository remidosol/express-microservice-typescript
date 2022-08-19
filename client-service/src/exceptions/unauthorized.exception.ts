export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UnauthorizedException'
    this.statusCode = 401
  }

  name: string
  statusCode: number
}
