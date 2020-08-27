import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes'
import * as path from "path";

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    dotenv.config({path: __dirname + '/.env'});
    console.log(process.env.SECRET)
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
