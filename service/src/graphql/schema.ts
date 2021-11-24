import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        getSomething(a: String): String!
    }
    
    type Mutation {
        createOrganization(params: CreateOrganizationParams!): CreateOrganizationResult!
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
`;
