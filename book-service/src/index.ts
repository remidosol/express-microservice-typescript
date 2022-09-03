import { initDatabase, initRedis } from './providers/index'
import { getApp } from './server'
import dotenv from 'dotenv'

dotenv.config()

const app = getApp()

const port = process.env.PORT

app.listen(port, async () => {
  await initDatabase()
  await initRedis()

  console.log(`Book service listening at http://${process.env.HOST}:${port}`)
})
