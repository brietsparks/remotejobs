import { IFieldResolver } from 'apollo-server';

import { ResolverContext } from './context';

export interface ResolverParams<T> {
  params: T
}

export function makeOrganizationsResolver() {
  return {}
}
