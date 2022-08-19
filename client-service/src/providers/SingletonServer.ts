import winston, { Logger as WinstonLogger } from 'winston'
import { Handler } from 'express'
import ExpressWinston from 'express-winston'

import {
  databaseConnection,
  databaseLoggerOptions,
  expressLoggerOptions,
  migrator,
  // seeder,
} from '../config/index'

import { Sequelize } from 'sequelize-typescript'
import { User } from '../database/models/index'

import dotenv from 'dotenv'
dotenv.config()

/**
 * @class SingletonServer
 *
 * @description Has been created to apply Singleton pattern as globally
 */
export class SingletonServer {
  private constructor() {
    this._dbConnection = databaseConnection

    this._dbConnection.addModels([User])

    this._initDb = async () => {
      try {
        await this._dbConnection.authenticate()
        await (async () => {
          try {
            await migrator.up()
            // await seeder.up()
            this._databaseLogger().info(
              'Connection established, migrations and seeders run .'
            )
          } catch (error) {
            this._databaseLogger().error(
              'Unable to connect to the database:' + error
            )
          }
        })()

        await this._dbConnection.sync({ force: true }) // force: true

        console.log(
          'Connection has been established and models synced successfully.'
        )
      } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
    }

    this._expressLogger = () => ExpressWinston.logger(expressLoggerOptions)

    this._databaseLogger = () => winston.createLogger(databaseLoggerOptions)
  }

  private _expressLogger: () => Handler
  private _databaseLogger: () => WinstonLogger

  private _dbConnection: Sequelize

  static _instance: Readonly<SingletonServer>

  private _initDb: () => Promise<void>

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
}

SingletonServer.getInstance()

export const ExpressLogger = SingletonServer.getInstance().expressLogger()()
export const DatabaseLogger = SingletonServer.getInstance().databaseLogger()()

export const DatabaseConnection = SingletonServer.getInstance().dbConnection()
export const initDatabase = SingletonServer.getInstance().initDb()
