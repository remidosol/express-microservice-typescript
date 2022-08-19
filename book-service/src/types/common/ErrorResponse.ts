export interface ErrorResponseI {
  message: string | string[]
  success?: false
  statusCode: number
}

/**
 * 
 * @class ErrorResponse
 * 
 * @implements ErrorResponseI
 * 
 * @description Created to provide error response in express app
 */
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
