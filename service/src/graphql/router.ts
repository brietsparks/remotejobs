import { ApolloServerExpressConfig, ApolloServer } from 'apollo-server-express';

import { Providers } from '../providers';
import { makeOrganizationsResolvers } from './organizations-resolvers';
import { makeJobsResolvers } from './jobs-resolvers';

import { ResolverContext } from './context';
import { typeDefs } from './schema.gql';

export interface GraphqlRouterParams {
  providers: Providers;
  serverConfig?: ApolloServerExpressConfig;
}

export function makeGraphqlRouter({ providers, serverConfig }: GraphqlRouterParams) {
  const organizationsResolvers = makeOrganizationsResolvers();
  const jobsResolvers = makeJobsResolvers();

  const resolvers = {
    Mutation: {
      ...organizationsResolvers.Mutation,
      ...jobsResolvers.Mutation
    }
  };

  const context: ResolverContext = {
    providers
  }

  return new ApolloServer({
    context,
    typeDefs,
    resolvers,
  });
}
