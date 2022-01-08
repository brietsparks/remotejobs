import { ApolloServerExpressConfig, ApolloServer } from 'apollo-server-express';

import { Providers } from '../providers';

import { RequestContext } from './types';
import { typeDefs } from './schema';
import { makeResolvers } from './resolvers';
import { makeLoaders } from './loaders';

export interface GraphqlRouterParams {
  providers: Providers;
  serverConfig?: ApolloServerExpressConfig;
  onError: (error: Error) => void;
}

export function makeGraphqlRouter({ providers, onError }: GraphqlRouterParams) {
  const resolvers = makeResolvers(providers);

  return new ApolloServer({
    playground: true,
    introspection: true,
    formatError: (error) => {
      onError(error);
      return new Error('Server Error');
    },
    context: (): RequestContext => ({
      loaders: makeLoaders(providers)
    }),
    typeDefs,
    resolvers,
  });
}
