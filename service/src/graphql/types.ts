import { Loaders } from './loaders';

export interface RequestContext {
  loaders: Loaders;
}

export interface NestedParams<T> {
  params: T
}
