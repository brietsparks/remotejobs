import { knex } from 'knex';
import express from 'express';

import { getMigrationsDirectory } from './database';
import { makeProviders } from './providers';
import { makeGraphqlRouter } from './graphql';

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

  const providers = makeProviders(db);

  const server = express();
  const graphqlRouter = makeGraphqlRouter({ providers });
  graphqlRouter.applyMiddleware({ app: server });

  server.get('/health', (req, res) => {
    res.status(200).json({ ok: 1 });
  });

  return {
    server,
    db
  };
}