import { ApolloServerExpressConfig, ApolloServer } from 'apollo-server-express';

import { Providers } from '../providers';

import { RequestContext } from './types';
import { typeDefs } from './schema';
import { makeResolvers } from './resolvers';
import { makeLoaders } from './loaders';

export interface GraphqlRouterParams {
  providers: Providers;
  serverConfig?: ApolloServerExpressConfig;
}

export function makeGraphqlRouter({ providers, serverConfig }: GraphqlRouterParams) {
  const loaders = makeLoaders(providers);
  const resolvers = makeResolvers(providers);

  const context: RequestContext = {
    loaders
  }

  return new ApolloServer({
    context,
    typeDefs,
    resolvers,
  });
}
