import { request, gql } from '../../graphql';

export async function getJob(id: string) {
  const result = await request(gql`
    query job($id: String!) {
        job(id: $id) {
            id
            title
            shortDescription
            longDescription
            organizationId
            organization {
                name
            }
        }
    }
  `, { id });

  const { organization, ...job } = result.job;

  return {
    ...job,
    organizationName: organization.name
  };
}
