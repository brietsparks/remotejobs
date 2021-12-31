import { gql, request as _request } from 'graphql-request';
import { RequestDocument, Variables } from 'graphql-request/dist/types';

const graphqlBaseUrl = process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL;
if (!graphqlBaseUrl) {
  throw new Error('missing env var NEXT_PUBLIC_GRAPHQL_BASE_URL');
}

export { gql };

export const request = async <T = any, V = Variables>(
  req: RequestDocument,
  variables?: V
) => {
  return _request<T>(graphqlBaseUrl, req, variables);
};
