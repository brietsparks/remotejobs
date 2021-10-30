import React from 'react';

import { OrganizationsList, OrganizationListItem, OrganizationsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface OrganizationsPageProps {
  paths: OrganizationsPagePaths;
}

export type OrganizationsPagePaths = OrganizationsListPaths;

export function OrganizationsPageContainer(props: OrganizationsPageProps) {
  return (
    <OrganizationsList
      getOrganizations={getOrganizations}
      messages={{
        view: 'View',
        jobsCount: (count) => `${count} jobs`
      }}
      paths={props.paths}
    />
  )
}

async function getOrganizations(): Promise<CursorPaginationResult<OrganizationListItem>> {
  const mockData = () => {
    return {
      id: Math.random().toString(),
      name: 'name',
      website: 'www.url.com',
      shortDescription: 'shortDescription',
      jobsCount: 3,
    }
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        items: [
          mockData(), mockData(), mockData(), mockData(),
          mockData(), mockData(), mockData(), mockData()
        ],
        hasMore: true,
        cursor: ''
      })
    }, 1000)
  });
}
