import { request, gql } from '../../graphql';
import { CursorPaginationResult } from '../../util';
import { JobsListItem } from '../../components/jobs-list';

export async function getJobs(cursor?: string): Promise<CursorPaginationResult<JobsListItem>> {
  const result = await request(gql`
      query jobs($params: JobsParams!) {
          jobs(params: $params) {
              items {
                  id
                  organizationId
                  title
                  shortDescription
                  organization {
                      name
                  }
              }
              pagination {
                  cursor
                  hasMore
              }
          }
      }
  `, {
    params: {
      pagination: { cursor, limit: 10 }
    }
  });

  return {
    items: mapItems(result.jobs.items),
    pagination: result.jobs.pagination
  };
}


interface UpstreamJob {
  id: string;
  organizationId: string;
  title: string;
  shortDescription: string;
  organization: {
    name: string;
  }
}

interface MappedJob {
  id: string;
  organizationId: string;
  title: string;
  shortDescription: string;
  organizationName: string;
}

function mapItems(items: UpstreamJob[]): MappedJob[] {
  return items.map(({ organization, ...job }) => ({
    ...job,
    organizationName: organization.name
  }));
}
