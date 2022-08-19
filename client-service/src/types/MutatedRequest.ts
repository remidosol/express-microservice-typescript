import { User } from '../database/models/index'
import { Request } from 'express'
// import core from 'express-serve-static-core'

/**
 * @interface MutatedRequestI
 * 
 * @description Created to provide Request type as manipulated by using generics
 */
export interface MutatedRequestI<T = any> extends Request<T, any, T, T> {
  user?: User
}
