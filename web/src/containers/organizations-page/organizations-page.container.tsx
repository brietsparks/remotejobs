import React from 'react';

import { OrganizationsList, OrganizationsListData, OrganizationListItem, OrganizationsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface OrganizationsPageProps {
  data? : OrganizationsListData;
  paths: OrganizationsPagePaths;
}

export type OrganizationsPagePaths = OrganizationsListPaths;

export function OrganizationsPageContainer(props: OrganizationsPageProps) {
  return (
    <OrganizationsList
      data={props.data}
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

export const mockData = () => {
  return {
    id: Math.random().toString(),
    name: 'name',
    website: 'www.url.com',
    shortDescription: 'shortDescription',
    jobsCount: 3,
  }
}
