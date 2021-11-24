import { knex } from 'knex';
import express from 'express';
import { createServer } from 'http';

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

  const appRouter = express();
  const graphqlRouter = makeGraphqlRouter({ providers });
  graphqlRouter.applyMiddleware({ app: appRouter });
  const server = createServer(appRouter);

  return {
    server,
    db
  };
}
