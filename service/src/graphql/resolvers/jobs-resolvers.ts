import { IFieldResolver, IResolverObject } from 'apollo-server';

import { JobsProvider, CursorPaginationParams } from '../../providers';
import { RequestContext, NestedParams } from '../types';
import * as schema from '../schema';

export function makeJobsResolvers(provider: JobsProvider) {
  const createJob: IFieldResolver<unknown, RequestContext, NestedParams<schema.CreateJobParams>> = async (root, { params }) => {
    return provider.createJob({
      ...params,
      longDescription: params.longDescription || undefined
    });
  }

  const resolveJobs: IFieldResolver<unknown, RequestContext, NestedParams<schema.JobsParams>> = async (root, { params }) => {
    return provider.getJobs({
      pagination: params.pagination as CursorPaginationParams
    });
  }

  const resolveJobOrganization: IFieldResolver<schema.Job, RequestContext> = async (job, { params }, ctx) => {
    return ctx.loaders.organizationsLoader.getOrganizationsByIds.load(job.organizationId);
  }

  const resolveJobFields: IResolverObject<schema.Job, RequestContext> = {
    id: j => j.id,
    organizationId: j => j.organizationId,
    organization: resolveJobOrganization,
    title: j => j.title,
    shortDescription: j => j.shortDescription,
    longDescription: j => j.longDescription,
    creationTimestamp: j => j.creationTimestamp
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
