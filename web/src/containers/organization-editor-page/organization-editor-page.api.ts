import { request, gql, UpdateOrganizationParams, Organization } from '../../graphql';

export async function updateOrganization(params: UpdateOrganizationParams) {
  const result = await request(gql`
    mutation updateOrganization($params: UpdateOrganizationParams!) {
        updateOrganization(params: $params) {
            id
        }
    }
  `, { params });

  return result.id;
}

export async function getOrganization(id: string) {
  const result = await request(gql`
    query organization($id: String!) {
        organization(id: $id) {
            id
            name
            website
            shortDescription
            longDescription
        }
    }
  `, { id });

  return {
    ...result.organization,
    longDescription: result.organization.longDescription || undefined
  };
}
