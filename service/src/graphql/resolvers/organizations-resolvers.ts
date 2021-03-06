import { IFieldResolver, IResolverObject } from 'apollo-server';

import { Providers, CursorPaginationParams, Organization, UpdateOrganizationParams } from '../../providers';
import { RequestContext, NestedParams } from '../types';
import * as schema from '../schema';

export function makeOrganizationsResolvers(providers: Providers) {
  const createOrganization: IFieldResolver<unknown, RequestContext, NestedParams<schema.CreateOrganizationParams>> = async (root, { params }, ctx) => {
    return providers.organizationsProvider.createOrganization({
      ...params,
      longDescription: params.longDescription || undefined
    });
  }

  const updateOrganization: IFieldResolver<unknown, RequestContext, NestedParams<schema.UpdateOrganizationParams>> = async (root, { params }) => {
    return providers.organizationsProvider.updateOrganization(params as UpdateOrganizationParams);
  };

  const resolveOrganization: IFieldResolver<unknown, RequestContext, { id: string }> = async (root, { id }) => {
    return providers.organizationsProvider.getOrganization(id);
  }

  const resolveOrganizations: IFieldResolver<unknown, RequestContext, NestedParams<schema.OrganizationsParams>> = async (root, { params }) => {
    return providers.organizationsProvider.getOrganizations({
      pagination: params.pagination as CursorPaginationParams
    });
  }

  const resolveRecentJobs: IFieldResolver<Organization, RequestContext, NestedParams<{ limit?: number }>> = async (organization, _, ctx) => {
    return ctx.loaders.jobsLoader.getRecentJobsOfOrganizations.load(organization.id);
  }

  const resolveJobs: IFieldResolver<Organization, RequestContext, NestedParams<schema.JobsParams>> = async (organization, { params }) => {
    return providers.jobsProvider.getJobsOfOrganization({
      organizationId: organization.id,
      pagination: params.pagination as CursorPaginationParams
    });
  }

  const resolveJobsCount: IFieldResolver<Organization, RequestContext> = async (organization, _, ctx) => {
    return ctx.loaders.jobsLoader.getJobsCountsOfOrganizations.load(organization.id);
  };

  const resolveOrganizationFields: IResolverObject = {
    id: o => o.id,
    creationTimestamp: o => o.creationTimestamp,
    name: o => o.name,
    website: o => o.website,
    shortDescription: o => o.shortDescription,
    longDescription: o => o.longDescription,
    recentJobs: resolveRecentJobs,
    jobs: resolveJobs,
    jobsCount: resolveJobsCount,
  };

  return {
    Query: {
      organizations: resolveOrganizations,
      organization: resolveOrganization,
    },
    Mutation: {
      createOrganization,
      updateOrganization
    },
    Organization: resolveOrganizationFields
  }
}
