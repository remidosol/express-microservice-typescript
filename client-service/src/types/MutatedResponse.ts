import { Response } from 'express'

// https://stackoverflow.com/a/68111218/8935402
// Created to provide a type with generic that is used by MutatedResponseI interface
type Send<ResBody = any, T = Response<ResBody>> = (body?: ResBody) => T

/**
 * @interface MutatedResponseI
 * 
 * @description Created to provide Response type as manipulated by using generics
 */
export interface MutatedResponseI<T = undefined> extends Response {
  json: Send<T, this>
}