import { readFileSync } from 'fs'
import { join } from 'path'

export const privateKey = readFileSync(
  join(__dirname, '../../private.pem'),
  'utf8'
)
export const publicKey = readFileSync(
  join(__dirname, '../../public.pem'),
  'utf8'
)
