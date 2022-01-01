import { request, gql, UpdateJobParams, Job } from '../../graphql';

export async function updateJob(params: UpdateJobParams) {
  const result = await request(gql`
      mutation updateJob($params: UpdateJobParams!) {
          updateJob(params: $params) {
              id
          }
      }
  `, { params });

  return result.id;
}

export interface GetJobResult {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  organization: {
    id: string;
    name: string;
  }
}

export async function getUpdateJobInitialValues(id: string): Promise<GetJobResult> {
  const result = await request(gql`
      query job($id: String!) {
          job(id: $id) {
              id
              title
              shortDescription
              longDescription
              organization {
                  name
              }
          }
      }
  `, { id });

  return {
    ...result.job,
    longDescription: result.job.longDescription || undefined
  };
}
