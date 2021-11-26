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

export type Job = {
  __typename?: 'Job';
  id: Scalars['String'];
  longDescription?: Maybe<Scalars['String']>;
  organization: Organization;
  organizationId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type JobsParams = {
  a?: InputMaybe<Scalars['String']>;
};

export type JobsResult = {
  __typename?: 'JobsResult';
  items: Array<Maybe<Job>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob: CreateJobResult;
  createOrganization: CreateOrganizationResult;
};


export type MutationCreateJobArgs = {
  params: CreateJobParams;
};


export type MutationCreateOrganizationArgs = {
  params: CreateOrganizationParams;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String'];
  longDescription?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  shortDescription: Scalars['String'];
  website: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  jobs: JobsResult;
};


export type QueryJobsArgs = {
  params: JobsParams;
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
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Job: ResolverTypeWrapper<Job>;
  JobsParams: JobsParams;
  JobsResult: ResolverTypeWrapper<JobsResult>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateJobParams: CreateJobParams;
  CreateJobResult: CreateJobResult;
  CreateOrganizationParams: CreateOrganizationParams;
  CreateOrganizationResult: CreateOrganizationResult;
  Int: Scalars['Int'];
  Job: Job;
  JobsParams: JobsParams;
  JobsResult: JobsResult;
  Mutation: {};
  Organization: Organization;
  Query: {};
  String: Scalars['String'];
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

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createJob?: Resolver<ResolversTypes['CreateJobResult'], ParentType, ContextType, RequireFields<MutationCreateJobArgs, 'params'>>;
  createOrganization?: Resolver<ResolversTypes['CreateOrganizationResult'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'params'>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  jobs?: Resolver<ResolversTypes['JobsResult'], ParentType, ContextType, RequireFields<QueryJobsArgs, 'params'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  CreateJobResult?: CreateJobResultResolvers<ContextType>;
  CreateOrganizationResult?: CreateOrganizationResultResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobsResult?: JobsResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};