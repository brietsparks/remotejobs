import { request, gql } from '../../graphql';
import { CursorPaginationResult } from '../../util';

export async function getOrganizationWithJobs(id: string, cursor?: string) {
  const result = await request(gql`
    query organization($id: String!, $cursor: String) {
        organization(id: $id) {
            id
            name
            shortDescription
            longDescription
            website
            jobs(params: { pagination: { cursor: $cursor, limit: 10 } }) {
                items {
                    id
                    organizationId
                    title
                    shortDescription
                }
                pagination {
                    cursor
                    hasMore
                }
            }
        }
    }
  `, { id, cursor });

  return mapData(result.organization);
}

export async function getJobsOfOrganization(id: string, cursor?: string) {
  const data = await getOrganizationWithJobs(id, cursor);
  return data.jobs;
}

interface UpstreamData {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  website: string;
  jobs: CursorPaginationResult<{
    id: string;
    organizationId: string;
    title: string;
    shortDescription: string;
  }>
}

export interface GetOrganizationWithJobsResult {
  organization: {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    website: string;
  };
  jobs: CursorPaginationResult<{
    id: string;
    organizationId: string;
    organizationName: string;
    title: string;
    shortDescription: string;
  }>
}

function mapData(data: UpstreamData): GetOrganizationWithJobsResult {
  const { jobs, ...organization } = data;
  return {
    organization,
    jobs: {
      items: jobs.items.map(job => ({ ...job, organizationName: organization.name })),
      pagination: jobs.pagination
    }
  }
}
