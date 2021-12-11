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



  return {
    Mutation: {
      createOrganization,
    }
  }
}
