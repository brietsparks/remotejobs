import { knex } from 'knex';
import express from 'express';

import { getMigrationsDirectory } from './database';
import { makeProviders } from './providers';
import { makeGraphqlRouter } from './graphql';
import { runFixtures } from './fixtures';

export interface ContainerParams {
  pgUrl: string
  development?: boolean;
}

export function createContainer(params: ContainerParams) {
  const db = knex({
    client: 'pg',
    connection: params.pgUrl,
    migrations: {
      directory: getMigrationsDirectory()
    }
  });
  if (params.development) {
    db.on('query', (q) => console.log(q));
  }

  const providers = makeProviders(db);

  const server = express();
  const graphqlRouter = makeGraphqlRouter({ providers });
  graphqlRouter.applyMiddleware({ app: server });

  server
    // just for demo purposes
    .post('/fixtures', async (req, res) => {
    try {
      await runFixtures(db, providers);
      res.status(200).json({ ok: 1 });
    } catch (error) {
      res.status(500).send();
    }
  });

  return {
    server,
    db
  };
}
