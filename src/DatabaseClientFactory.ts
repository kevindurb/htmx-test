import pg from 'pg';
import { Service } from 'typedi';

@Service()
export class DatabaseClientFactory {
  private client: pg.Client;

  public constructor() {
    this.client = new pg.Client({
      connectionString: process.env.DATABASE_URL,
    });
    this.client.connect();
  }

  public getClient() {
    return this.client;
  }
}

@Service({ factory: [DatabaseClientFactory, 'getClient'] })
export class Client extends pg.Client {}
