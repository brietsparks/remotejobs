import { IFieldResolver } from 'apollo-server';

import { OrganizationsProvider, CursorPaginationParams } from '../../providers';
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
      pagination: params.pagination as CursorPaginationParams
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
