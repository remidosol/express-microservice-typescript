export class CredValidatorException extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'UnvalidCredentials'
    this.statusCode = 400
  }

  name: string
  statusCode: number
}
