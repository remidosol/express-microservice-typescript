import argon2 from 'argon2'


/**
 * @class ArgonUtils
 * 
 * @description Uses Argon2 to encrypting
 */
export default class ArgonUtils {
  static hashPassword = async (password: string) => {
    return argon2.hash(password, { type: 2 })
  }

  static verifyPassword = async (hashedPassword: string, password: string) => {
    return argon2.verify(hashedPassword, password, { type: 2 })
  }
}
