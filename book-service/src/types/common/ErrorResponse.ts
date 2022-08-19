export interface ErrorResponseI {
  message: string | string[]
  success?: false
  statusCode: number
}

export class ErrorResponse implements ErrorResponseI {
  constructor(message: string | string[], statusCode: number) {
    this.message = message
    this.success = false
    this.statusCode = statusCode
  }

  message: string | string[]
  success?: false
  statusCode: number
}
