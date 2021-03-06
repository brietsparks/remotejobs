import { knex, Knex } from 'knex';
import express from 'express';

import { getMigrationsDirectory } from './database';
import { makeProviders } from './providers';
import { makeGraphqlRouter } from './graphql';
import { runFixtures } from './fixtures';

export interface AppParams {
  dbConn: Knex.PgConnectionConfig;
  development?: boolean;
}

export function createApp(params: AppParams) {
  const db = knex({
    client: 'pg',
    connection: params.dbConn,
    migrations: {
      directory: getMigrationsDirectory()
    }
  });
  if (params.development) {
    db.on('query', (q) => console.log(q));
  }

  const providers = makeProviders(db);

  const server = express();
  const graphqlRouter = makeGraphqlRouter({
    providers,
    onError: console.log
  });
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
