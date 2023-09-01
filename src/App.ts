import express from 'express';
import { Service } from 'typedi';

@Service()
export class App {
  private express: express.Express;

  public constructor() {
    this.express = express();
  }

  public start() {
    const server = this.express.listen(process.env['PORT'], () => {
      const address = server.address();
      if (!address) return;
      if (typeof address === 'string') {
        console.log(`Listening at ${address}`);
      } else {
        console.log(`Listening at http://${address.address}:${address.port}`);
      }
    });
  }
}
