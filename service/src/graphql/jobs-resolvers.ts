import { IFieldResolver } from 'apollo-server';

import { ResolverContext, ResolverParams } from './context';
import * as schema from './schema.types';

export function makeJobsResolvers() {
  const createJob: IFieldResolver<unknown, ResolverContext, ResolverParams<schema.CreateJobParams>> = async (root, { params }, ctx) => {
    return ctx.providers.jobsProvider.createJob({
      ...params,
      longDescription: params.longDescription || undefined
    });
  }

  return {
    Mutation: {
      createJob
    }
  }
}
