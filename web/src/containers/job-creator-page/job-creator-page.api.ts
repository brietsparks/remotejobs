import { request, gql, CreateJobParams } from '../../graphql';

export async function createJob(params: CreateJobParams) {
  const result = await request(gql`
      mutation createJob($params: CreateJobParams!) {
          createJob(params: $params) {
              id
          }
      }
  `,{ params });

  return result.id;
}

export async function getOrganizationName(id: string) {
  const result = await request(gql`
    query organization($id: String!) {
        organization(id: $id) {
            name
        }
    }
  `, { id });

  return result.organization.name;
}
