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

export function makeGraphqlRouter({ providers }: GraphqlRouterParams) {
  const resolvers = makeResolvers(providers);

  return new ApolloServer({
    context: (): RequestContext => ({
      loaders: makeLoaders(providers)
    }),
    typeDefs,
    resolvers,
  });
}
