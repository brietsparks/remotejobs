import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CreateJobParams = {
  longDescription?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type CreateJobResult = {
  __typename?: 'CreateJobResult';
  id: Scalars['String'];
};

export type CreateOrganizationParams = {
  longDescription?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  website: Scalars['String'];
};

export type CreateOrganizationResult = {
  __typename?: 'CreateOrganizationResult';
  id: Scalars['String'];
};

export type CursorPaginationParams = {
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type CursorPaginationResult = {
  __typename?: 'CursorPaginationResult';
  cursor?: Maybe<Scalars['String']>;
  hasMore: Scalars['Boolean'];
};

export type Job = {
  __typename?: 'Job';
  creationTimestamp: Scalars['String'];
  id: Scalars['String'];
  longDescription?: Maybe<Scalars['String']>;
  organization: Organization;
  organizationId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type JobsParams = {
  pagination: CursorPaginationParams;
};

export type JobsResult = {
  __typename?: 'JobsResult';
  items: Array<Maybe<Job>>;
  pagination: CursorPaginationResult;
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob: CreateJobResult;
  createOrganization: CreateOrganizationResult;
  updateJob: UpdateJobResult;
  updateOrganization: UpdateOrganizationResult;
};


export type MutationCreateJobArgs = {
  params: CreateJobParams;
};


export type MutationCreateOrganizationArgs = {
  params: CreateOrganizationParams;
};


export type MutationUpdateJobArgs = {
  params: UpdateJobParams;
};


export type MutationUpdateOrganizationArgs = {
  params: UpdateOrganizationParams;
};

export type Organization = {
  __typename?: 'Organization';
  creationTimestamp: Scalars['String'];
  id: Scalars['String'];
  jobs: JobsResult;
  longDescription?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  website: Scalars['String'];
};


export type OrganizationJobsArgs = {
  params: JobsParams;
};

export type OrganizationsParams = {
  pagination: CursorPaginationParams;
};

export type OrganizationsResult = {
  __typename?: 'OrganizationsResult';
  items: Array<Maybe<Organization>>;
  pagination: CursorPaginationResult;
};

export type Query = {
  __typename?: 'Query';
  jobs: JobsResult;
  organization?: Maybe<Organization>;
  organizations: OrganizationsResult;
};


export type QueryJobsArgs = {
  params: JobsParams;
};


export type QueryOrganizationArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationsArgs = {
  params: OrganizationsParams;
};

export type UpdateJobParams = {
  id: Scalars['String'];
  longDescription?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateJobResult = {
  __typename?: 'UpdateJobResult';
  id: Scalars['String'];
};

export type UpdateOrganizationParams = {
  id: Scalars['String'];
  longDescription?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateOrganizationResult = {
  __typename?: 'UpdateOrganizationResult';
  id: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CacheControlScope: CacheControlScope;
  CreateJobParams: CreateJobParams;
  CreateJobResult: ResolverTypeWrapper<CreateJobResult>;
  CreateOrganizationParams: CreateOrganizationParams;
  CreateOrganizationResult: ResolverTypeWrapper<CreateOrganizationResult>;
  CursorPaginationParams: CursorPaginationParams;
  CursorPaginationResult: ResolverTypeWrapper<CursorPaginationResult>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Job: ResolverTypeWrapper<Job>;
  JobsParams: JobsParams;
  JobsResult: ResolverTypeWrapper<JobsResult>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationsParams: OrganizationsParams;
  OrganizationsResult: ResolverTypeWrapper<OrganizationsResult>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateJobParams: UpdateJobParams;
  UpdateJobResult: ResolverTypeWrapper<UpdateJobResult>;
  UpdateOrganizationParams: UpdateOrganizationParams;
  UpdateOrganizationResult: ResolverTypeWrapper<UpdateOrganizationResult>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateJobParams: CreateJobParams;
  CreateJobResult: CreateJobResult;
  CreateOrganizationParams: CreateOrganizationParams;
  CreateOrganizationResult: CreateOrganizationResult;
  CursorPaginationParams: CursorPaginationParams;
  CursorPaginationResult: CursorPaginationResult;
  Int: Scalars['Int'];
  Job: Job;
  JobsParams: JobsParams;
  JobsResult: JobsResult;
  Mutation: {};
  Organization: Organization;
  OrganizationsParams: OrganizationsParams;
  OrganizationsResult: OrganizationsResult;
  Query: {};
  String: Scalars['String'];
  UpdateJobParams: UpdateJobParams;
  UpdateJobResult: UpdateJobResult;
  UpdateOrganizationParams: UpdateOrganizationParams;
  UpdateOrganizationResult: UpdateOrganizationResult;
  Upload: Scalars['Upload'];
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CreateJobResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateJobResult'] = ResolversParentTypes['CreateJobResult']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrganizationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrganizationResult'] = ResolversParentTypes['CreateOrganizationResult']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CursorPaginationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CursorPaginationResult'] = ResolversParentTypes['CursorPaginationResult']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  creationTimestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['JobsResult'] = ResolversParentTypes['JobsResult']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Job']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['CursorPaginationResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createJob?: Resolver<ResolversTypes['CreateJobResult'], ParentType, ContextType, RequireFields<MutationCreateJobArgs, 'params'>>;
  createOrganization?: Resolver<ResolversTypes['CreateOrganizationResult'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'params'>>;
  updateJob?: Resolver<ResolversTypes['UpdateJobResult'], ParentType, ContextType, RequireFields<MutationUpdateJobArgs, 'params'>>;
  updateOrganization?: Resolver<ResolversTypes['UpdateOrganizationResult'], ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'params'>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  creationTimestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  jobs?: Resolver<ResolversTypes['JobsResult'], ParentType, ContextType, RequireFields<OrganizationJobsArgs, 'params'>>;
  longDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationsResult'] = ResolversParentTypes['OrganizationsResult']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Organization']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['CursorPaginationResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  jobs?: Resolver<ResolversTypes['JobsResult'], ParentType, ContextType, RequireFields<QueryJobsArgs, 'params'>>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'id'>>;
  organizations?: Resolver<ResolversTypes['OrganizationsResult'], ParentType, ContextType, RequireFields<QueryOrganizationsArgs, 'params'>>;
};

export type UpdateJobResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateJobResult'] = ResolversParentTypes['UpdateJobResult']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrganizationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrganizationResult'] = ResolversParentTypes['UpdateOrganizationResult']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  CreateJobResult?: CreateJobResultResolvers<ContextType>;
  CreateOrganizationResult?: CreateOrganizationResultResolvers<ContextType>;
  CursorPaginationResult?: CursorPaginationResultResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobsResult?: JobsResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationsResult?: OrganizationsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateJobResult?: UpdateJobResultResolvers<ContextType>;
  UpdateOrganizationResult?: UpdateOrganizationResultResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
