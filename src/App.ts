import bodyParser from 'body-parser';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { Service } from 'typedi';

import { TodoController } from './todo/TodoController.js';

@Service()
export class App {
  private express: express.Express;

  public constructor() {
    this.express = express();
    this.express.set('view engine', 'pug');
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());

    useExpressServer(this.express, {
      controllers: [TodoController],
    });
  }

  public start() {
    const server = this.express.listen(process.env['PORT'], () => {
      const address = server.address();
      if (!address) return;
      if (typeof address === 'string') {
        console.log(`Listening at ${address}`);
      } else {
        console.log(`Listening at http://localhost:${address.port}`);
      }
    });
  }
}
