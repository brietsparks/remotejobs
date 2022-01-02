import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        organizations(params: OrganizationsParams!): OrganizationsResult!
        organization(id: String!): Organization
        jobs(params: JobsParams!): JobsResult!
        job(id: String!): Job
    }
    
    type Mutation {
        createOrganization(params: CreateOrganizationParams!): CreateOrganizationResult!
        updateOrganization(params: UpdateOrganizationParams!): UpdateOrganizationResult!
        createJob(params: CreateJobParams!): CreateJobResult!
        updateJob(params: UpdateJobParams!): UpdateJobResult!
    }
    
    input CursorPaginationParams {
        cursor: String
        limit: Int!
    }

    type CursorPaginationResult {
        cursor: String
        hasMore: Boolean!
    }

    input CreateOrganizationParams {
        name: String!
        website: String!
        shortDescription: String!
        longDescription: String
    }

    type CreateOrganizationResult {
        id: String!
    }

    input UpdateOrganizationParams {
        id: String!
        name: String
        website: String
        shortDescription: String
        longDescription: String
    }

    type UpdateOrganizationResult {
        id: String!
    }
    
    input CreateJobParams {
        organizationId: String!
        title: String!
        shortDescription: String!
        longDescription: String
    }

    type CreateJobResult {
        id: String!
    }
    
    input UpdateJobParams {
        id: String!
        title: String
        shortDescription: String
        longDescription: String
    }

    type UpdateJobResult {
        id: String!
    }
    
    input OrganizationsParams {
        pagination: CursorPaginationParams!
    }
    
    type OrganizationsResult {
        items: [Organization]!
        pagination: CursorPaginationResult!
    }

    input JobsParams {
        pagination: CursorPaginationParams!        
    }
    
    type JobsResult {
        items: [Job]!
        pagination: CursorPaginationResult!
    }
    
    type Organization {
        id: String!
        creationTimestamp: String!
        name: String!
        website: String!
        shortDescription: String!
        longDescription: String
        recentJobs: [Job]!
        jobs(params: JobsParams!): JobsResult!
        jobsCount: Int!
    }
  
    type Job {
        id: String!
        creationTimestamp: String!
        organizationId: String!
        organization: Organization!
        title: String!
        shortDescription: String!
        longDescription: String
    }
    
`;
