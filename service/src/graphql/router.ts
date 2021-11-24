import { ApolloServerExpressConfig, ApolloServer } from 'apollo-server-express';

import { Providers } from '../providers';

import { typeDefs } from './schema';

export interface GraphqlRouterParams {
  providers: Providers;
  serverConfig?: ApolloServerExpressConfig;
}

export function makeGraphqlRouter({ providers, serverConfig }: GraphqlRouterParams) {
  return new ApolloServer({
    typeDefs,
    resolvers: {},
  });
}
