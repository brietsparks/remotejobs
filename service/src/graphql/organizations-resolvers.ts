import { IFieldResolver } from 'apollo-server';

import { ResolverContext, ResolverParams } from './context';
import * as schema from './schema.types';

export function makeOrganizationsResolvers() {
  const createOrganization: IFieldResolver<unknown, ResolverContext, ResolverParams<schema.CreateOrganizationParams>> = async (root, { params }, ctx) => {
    return ctx.providers.organizationsProvider.createOrganization({
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
