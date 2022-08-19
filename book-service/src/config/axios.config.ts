import { AxiosRequestConfig } from 'axios'
import { BookSearchTypes } from '../types/index'

import dotenv from 'dotenv'
dotenv.config()

const googleBooksBaseURI = process.env.GOOGLE_BOOKS_API_BASE_URI
const googleBooksApiKey = process.env.GOOGLE_BOOKS_API_KEY
const authBaseURI = process.env.AUTH_API_BASE_URI

export const authApiConfig: AxiosRequestConfig = {
  baseURL: authBaseURI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

}

export const googleBooksApiConfig: AxiosRequestConfig<BookSearchTypes> = {
  baseURL: googleBooksBaseURI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    apiKey: googleBooksApiKey
  }
}