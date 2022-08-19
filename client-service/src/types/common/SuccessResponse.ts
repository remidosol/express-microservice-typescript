export interface SuccessResponseI<T> {
  data: T
  success?: true
  statusCode: number
}

export class SuccessResponse<T> implements SuccessResponseI<T> {
  constructor(data: T, statusCode: number) {
    this.data = data
    this.success = true
    this.statusCode = statusCode
  }

  data: T
  success: true
  statusCode: number
}
