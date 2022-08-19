import { LoggerOptions as ExpressWinstonLoggerOptions } from 'express-winston'
import winston, { LoggerOptions as WinstonLoggerOptions } from 'winston'
import dotenv from 'dotenv'
dotenv.config()

export const expressLoggerOptions: ExpressWinstonLoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  )
}
if (!process.env.DEBUG) {
  expressLoggerOptions.meta = false // when not debugging, log requests as one-liners
}

export const databaseLoggerOptions: WinstonLoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint({colorize: true, depth: 5}),
    winston.format.colorize({ all: true })
  ),
  handleExceptions: true
}