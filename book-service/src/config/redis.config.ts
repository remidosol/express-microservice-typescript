import { RedisClientOptions } from 'redis'

import dotenv from 'dotenv'
dotenv.config()

export const redisConf: RedisClientOptions = {
  socket: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT!,
  },
}
