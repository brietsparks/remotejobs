import { IFieldResolver } from 'apollo-server';

import { Providers } from '../../providers';
import { RequestContext, NestedParams } from '../types';
import * as schema from '../schema';

export function makeOrganizationsResolvers(providers: Providers) {
  const createOrganization: IFieldResolver<unknown, RequestContext, NestedParams<schema.CreateOrganizationParams>> = async (root, { params }, ctx) => {
    return providers.organizationsProvider.createOrganization({
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
