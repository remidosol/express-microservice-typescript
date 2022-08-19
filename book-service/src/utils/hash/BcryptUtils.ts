import bcrypt from 'bcrypt'


/**
 * @class ArgonUtils
 * 
 * @description Uses Bcrypt to encrypting
 */
export default class BcryptUtils {
  static hashPassword = async (password: string) => {
    return bcrypt.hash(password, 10)
  }

  static verifyPassword = (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword)
  }
}
