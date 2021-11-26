import { IFieldResolver, IResolverObject } from 'apollo-server';

import { Providers } from '../../providers';
import { RequestContext, NestedParams } from '../types';
import * as schema from '../schema';

export function makeJobsResolvers(providers: Providers) {
  const createJob: IFieldResolver<unknown, RequestContext, NestedParams<schema.CreateJobParams>> = async (root, { params }, ctx) => {
    return providers.jobsProvider.createJob({
      ...params,
      longDescription: params.longDescription || undefined
    });
  }

  const resolveJobs: IFieldResolver<unknown, RequestContext, NestedParams<schema.JobsParams>> = async (root, { params }, ctx) => {
    const items = await providers.jobsProvider.getJobs(params);
    return {
      items
    };
  }

  const resolveJobOrganization: IFieldResolver<schema.Job, RequestContext> = async (job, { params }, ctx) => {
    return ctx.loaders.organizationsLoader.getOrganization.load(job.organizationId);
  }

  const resolveJobFields: IResolverObject<schema.Job, RequestContext> = {
    id: j => j.id,
    organizationId: j => j.organizationId,
    organization: resolveJobOrganization,
    title: j => j.title,
    shortDescription: j => j.shortDescription,
    longDescription: j => j.longDescription,
  }

  return {
    Query: {
      jobs: resolveJobs
    },
    Mutation: {
      createJob
    },
    Job: resolveJobFields
  }
}
