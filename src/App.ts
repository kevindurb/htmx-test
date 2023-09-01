import express from 'express';
import { createExpressServer } from 'routing-controllers';
import { Service } from 'typedi';

import { TodosController } from './todos/TodosController';

@Service()
export class App {
  private express: express.Express;

  public constructor() {
    this.express = createExpressServer({ controllers: [TodosController] });
    this.express.set('view engine', 'pug');
  }

  public start() {
    const server = this.express.listen(process.env['PORT'], () => {
      const address = server.address();
      if (!address) return;
      if (typeof address === 'string') {
        console.log(`Listening at ${address}`);
      } else {
        console.log(
          `Listening at http://${
            address.address === '::' ? 'localhost' : address.address
          }:${address.port}`,
        );
      }
    });
  }
}
