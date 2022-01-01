import { request, gql } from '../../graphql';
import { CursorPaginationResult } from '../../util';
import { OrganizationsListItem } from '../../components/organizations-list';

export async function getOrganizations(cursor?: string): Promise<CursorPaginationResult<OrganizationsListItem>> {
  const result = await request(gql`
    query organizations($params: OrganizationsParams!) {
        organizations(params: $params) {
            items {
                id
                name
                shortDescription
                recentJobs {
                    id
                    title
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
      pagination: { cursor, limit: 3 }
    }
  });

  return result.organizations;
}
