import { readFileSync } from 'fs'
import { join } from 'path'


/**
 * @constant privateKey
 * 
 * @description Provided private key for hashing jwt
 */
export const privateKey = readFileSync(
  join(__dirname, '../../private.pem'),
  'utf8'
)


/**
 * @constant privateKey
 * 
 * @description Provided private key for resolving jwt
 */
export const publicKey = readFileSync(
  join(__dirname, '../../public.pem'),
  'utf8'
)
