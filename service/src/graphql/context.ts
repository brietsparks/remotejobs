import { Providers } from '../providers';

export interface ResolverContext {
  providers: Providers;
}

export interface ResolverParams<T> {
  params: T
}
