import { Providers } from '../../providers';

import { makeOrganizationsResolvers } from './organizations-resolvers';
import { makeJobsResolvers } from './jobs-resolvers';

export function makeResolvers(providers: Providers) {
  const organizationsResolvers = makeOrganizationsResolvers(providers.organizationsProvider);
  const jobsResolvers = makeJobsResolvers(providers.jobsProvider);

  return {
    Query: {
      ...organizationsResolvers.Query,
      ...jobsResolvers.Query
    },
    Mutation: {
      ...organizationsResolvers.Mutation,
      ...jobsResolvers.Mutation
    },
    Job: jobsResolvers.Job
  };
}
