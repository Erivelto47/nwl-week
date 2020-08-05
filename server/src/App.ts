import express from 'express'
// import cors from 'cors'
// import { createConnection } from 'typeorm'

// import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middlewares()
    App.connection()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    // this.express.use(cors())
  }

  private static connection(): void {
    // createConnection()
    //   .then(() => console.log('connected'))
    //   .catch(() => console.log('error to connect'))
  }

  private routes(): void {
    // this.express.use(routes)
  }
}

export default new App().express
