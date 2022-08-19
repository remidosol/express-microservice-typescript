import { initDatabase } from './providers/index'
import { getApp } from './server'
import dotenv from 'dotenv'
// import { SingletonServer } from './providers/SingletonServer'

dotenv.config()

const app = getApp()

const port = process.env.PORT

app.listen(port, async () => {
  await initDatabase()

  console.log(`Auth service listening at http://${process.env.HOST}:${port}`)
})
