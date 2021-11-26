import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        getSomething(a: String): String!
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
`;
