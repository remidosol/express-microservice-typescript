import winston, { Logger as WinstonLogger } from 'winston'
import { Handler } from 'express'
import ExpressWinston from 'express-winston'

import {
  databaseConnection,
  authApiConfig,
  googleBooksApiConfig,
  databaseLoggerOptions,
  expressLoggerOptions,
  migrator,
  redisConf,
} from '../config/index'

import { Sequelize } from 'sequelize-typescript'
import { Bookmark } from '../database/models/index'
import axios, { AxiosInstance } from 'axios'
import { createClient } from 'redis'

import dotenv from 'dotenv'
dotenv.config()

/**
 * @class SingletonServer
 *
 * @description Has been created to apply Singleton pattern as globally
 */
export class SingletonServer {

  /**
   * INITIALIZATION OF GLOBAL OBJECTS
   */
  private constructor() {
    this._dbConnection = databaseConnection

    this._dbConnection.addModels([Bookmark])

    this._initDb = async () => {
      try {
        await this._dbConnection.authenticate()
        await (async () => {
          try {
            await migrator.up()

            this._databaseLogger().info(
              'Connection established and migrations run .'
            )
          } catch (error) {
            this._databaseLogger().error(
              'Unable to connect to the database:' + error
            )
          }
        })()

        await this._dbConnection.sync({}) // force: true

        this._databaseLogger().info(
          'Connection has been established and models synced successfully.'
        )

        console.log()
      } catch (error) {
        this._databaseLogger().error(
          'Unable to connect to the database:' + error
        )
      }
    }

    this._redisConnection = createClient(redisConf)

    this._initRedis = async () => {
      try {
        this._redisConnection.on('error', (err) => {
          this._databaseLogger().error(err.message)
        })

        this._redisConnection.on('ready', () => {
          this._databaseLogger().info(
            'Connection to Redis has been established.'
          )
        })

        await this._redisConnection.connect()

        await this._redisConnection.flushAll()
      } catch (error) {
        this._databaseLogger().error('Unable to connect to Redis:' + error)
      }
    }

    this._expressLogger = () => ExpressWinston.logger(expressLoggerOptions)

    this._databaseLogger = () => winston.createLogger(databaseLoggerOptions)

    this._axios_auth = axios.create(authApiConfig)
    this._axios_google_books = axios.create(googleBooksApiConfig)
  }

  private _expressLogger: () => Handler
  private _databaseLogger: () => WinstonLogger

  private _dbConnection: Sequelize
  private _redisConnection: ReturnType<typeof createClient>

  private _axios_auth: AxiosInstance
  private _axios_google_books: AxiosInstance

  static _instance: Readonly<SingletonServer>

  private _initDb: () => Promise<void>

  private _initRedis: () => Promise<void>

  static getInstance() {
    if (this._instance) {
      return this._instance
    }

    this._instance = new SingletonServer()
    return this._instance
  }

  public expressLogger = () => this._expressLogger

  public databaseLogger = () => this._databaseLogger

  public dbConnection = () => this._dbConnection

  public initDb = () => this._initDb

  public initRedis = () => this._initRedis

  public redisConnection = () => this._redisConnection

  public authApi = () => this._axios_auth

  public googleBooksApi = () => this._axios_google_books
}

SingletonServer.getInstance()

export const ExpressLogger = SingletonServer.getInstance().expressLogger()()
export const DatabaseLogger = SingletonServer.getInstance().databaseLogger()()

export const DatabaseConnection = SingletonServer.getInstance().dbConnection()
export const initDatabase = SingletonServer.getInstance().initDb()

export const RedisConnection = SingletonServer.getInstance().redisConnection()
export const initRedis = SingletonServer.getInstance().initRedis()

export const AxiosAuthInstance = SingletonServer.getInstance().authApi()
export const AxiosBookInstance = SingletonServer.getInstance().googleBooksApi()
