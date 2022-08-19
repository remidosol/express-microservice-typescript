/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

import { Umzug, SequelizeStorage } from 'umzug'
import { DatabaseLogger } from '../providers/SingletonServer'
// import { User } from './../database/models/User'

import dotenv from 'dotenv'
dotenv.config()

export interface DatabaseConfigI {
  development: SequelizeOptions
  production: SequelizeOptions
}

export const databaseConfig: DatabaseConfigI = {
  development: {
    username: process.env.DEV_MYSQL_USERNAME,
    password: process.env.DEV_MYSQL_PASSWORD,
    database: process.env.DEV_MYSQL_SCHEMA,
    host: process.env.DEV_MYSQL_HOST,
    port: +process.env.DEV_MYSQL_PORT!,
    dialect: 'mysql',
  },
  production: {
    username: process.env.PROD_MYSQL_USERNAME,
    password: process.env.PROD_MYSQL_PASSWORD,
    database: process.env.PROD_MYSQL_SCHEMA,
    host: process.env.PROD_MYSQL_HOST,
    port: +process.env.PROD_MYSQL_PORT!,
    dialect: 'mysql',
  },
}

const currentEnvConfig = databaseConfig.development

export const databaseConnection: Sequelize = new Sequelize({
  host: currentEnvConfig.host,
  port: currentEnvConfig.port,
  username: currentEnvConfig.username,
  password: currentEnvConfig.password,
  database: currentEnvConfig.database,
  dialect: currentEnvConfig.dialect,
  logging: () => DatabaseLogger,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

export const migrator = new Umzug({
  context: databaseConnection.getQueryInterface(),
  migrations: {
    glob: ['../database/migrations/*.ts', { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
      const migration = require(path || '')
      return {
        name,
        up: async () => migration.up({ context }),
        down: async () => migration.down({ context }),
      }
    },
  },
  storage: new SequelizeStorage({ sequelize: databaseConnection }),
  logger: DatabaseLogger,
})

// export const seeder = new Umzug({
//   context: databaseConnection.getQueryInterface(),
//   migrations: {
//     glob: ['../database/seeders/*.ts', { cwd: __dirname }],
//     resolve: ({ name, path, context }) => {
//       const seed = require(path || '')
//       return {
//         name,
//         up: async () => seed.up({ context }),
//         down: async () => seed.down({ context }),
//       }
//     },
//   },
//   storage: new SequelizeStorage({ sequelize: databaseConnection }),
//   logger: DatabaseLogger,
// })
