import express from 'express';
import { knex } from 'knex';

import { getMigrationsDirectory } from './database';

export interface ContainerParams {
  pgUrl: string
}

export function createContainer(params: ContainerParams) {
  const db = knex({
    client: 'pg',
    connection: params.pgUrl,
    migrations: {
      directory: getMigrationsDirectory()
    }
  });

  const server = express();

  server.get('/health', (req, res) => {
    res.json({ ok: 1 });
  });

  return {
    server,
    db
  };
}
