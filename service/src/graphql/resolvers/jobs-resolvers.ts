import { IFieldResolver, IResolverObject } from 'apollo-server';

import { Providers, CursorPaginationParams, UpdateJobParams } from '../../providers';
import { RequestContext, NestedParams } from '../types';
import * as schema from '../schema';

export function makeJobsResolvers(providers: Providers) {
  const createJob: IFieldResolver<unknown, RequestContext, NestedParams<schema.CreateJobParams>> = async (root, { params }) => {
    return providers.jobsProvider.createJob({
      ...params,
      longDescription: params.longDescription || undefined
    });
  }

  const updateJob: IFieldResolver<unknown, RequestContext, NestedParams<schema.UpdateJobParams>> = async (root, { params }) => {
    return providers.jobsProvider.updateJob(params as UpdateJobParams);
  }

  const resolveJob: IFieldResolver<unknown, RequestContext, { id: string }> = (root, { id }) => {
    return providers.jobsProvider.getJob(id);
  };

  const resolveJobs: IFieldResolver<unknown, RequestContext, NestedParams<schema.JobsParams>> = async (root, { params }) => {
    return providers.jobsProvider.getJobs({
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
      jobs: resolveJobs,
      job: resolveJob
    },
    Mutation: {
      createJob,
      updateJob
    },
    Job: resolveJobFields
  }
}
