export interface SuccessResponseI<T> {
  data: T
  success?: true
  statusCode: number
}

/**
 *
 * @class SuccessResponse<T>
 *
 * @implements SuccessResponseI<T>
 *
 * @description Created to provide success response in express app
 */
export class SuccessResponse<T> implements SuccessResponseI<T> {
  constructor(data: T, statusCode: number) {
    this.data = data
    this.success = true
    this.statusCode = statusCode
  }

  // private propertiesOf =
  //   <TObj>(_obj: TObj | undefined = undefined) =>
  //   <T extends keyof TObj>(name: T): T =>
  //     name

  // public GetPropertyNames = this.propertiesOf<this>()

  data: T
  success: true
  statusCode: number
}
