import pg from 'pg';

export const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();
