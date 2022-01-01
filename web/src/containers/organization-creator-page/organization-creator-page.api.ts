import { request, gql, CreateOrganizationParams } from '../../graphql';

export async function createOrganization(params: CreateOrganizationParams) {
  const result = await request(gql`
    mutation createOrganization($params: CreateOrganizationParams!) {
        createOrganization(params: $params) {
            id
        }
    }
  `,{ params });

  return result.id;
}
