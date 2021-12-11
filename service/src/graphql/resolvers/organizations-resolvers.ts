import { IFieldResolver } from 'apollo-server';

import { OrganizationsProvider } from '../../providers';
import { RequestContext, NestedParams } from '../types';
import * as schema from '../schema';

export function makeOrganizationsResolvers(provider: OrganizationsProvider) {
  const createOrganization: IFieldResolver<unknown, RequestContext, NestedParams<schema.CreateOrganizationParams>> = async (root, { params }, ctx) => {
    return provider.createOrganization({
      ...params,
      longDescription: params.longDescription || undefined
    });
  }

  const resolveOrganizations: IFieldResolver<unknown, RequestContext, NestedParams<schema.OrganizationsParams>> = async (root, { params }) => {
    return provider.getOrganizations({
      pagination: {
        cursor: params.pagination?.cursor as string,
        limit: params.pagination?.limit as number
      }
    });
  }

  return {
    Query: {
      organizations: resolveOrganizations,
    },
    Mutation: {
      createOrganization,
    }
  }
}
