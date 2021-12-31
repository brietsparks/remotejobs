import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        organizations(params: OrganizationsParams!): OrganizationsResult!
        jobs(params: JobsParams!): JobsResult!
    }
    
    type Mutation {
        createOrganization(params: CreateOrganizationParams!): CreateOrganizationResult!
        createJob(params: CreateJobParams!): CreateJobResult!
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
    
    input CreateJobParams {
        organizationId: String!
        title: String!
        shortDescription: String!
        longDescription: String
    }

    type CreateJobResult {
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
