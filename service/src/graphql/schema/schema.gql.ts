import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        jobs(params: JobsParams!): JobsResult!
    }
    
    type Mutation {
        createOrganization(params: CreateOrganizationParams!): CreateOrganizationResult!
        createJob(params: CreateJobParams!): CreateJobResult!
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
    
    input JobsParams {
        a: String # placeholder        
    }
    
    type JobsResult {
        items: [Job]!
    }
    
    type Organization {
        id: String!
        name: String!
        website: String!
        shortDescription: String!
        longDescription: String
    }
  
    type Job {
        id: String!
        organizationId: String!
        organization: Organization!
        title: String!
        shortDescription: String!
        longDescription: String
    }
    
`;
