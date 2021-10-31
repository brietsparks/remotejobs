import React from 'react';

import { OrganizationsList, OrganizationsListData, OrganizationsListItem, OrganizationsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface OrganizationsPageProps {
  data? : OrganizationsPageData;
  paths: OrganizationsPagePaths;
}

export type OrganizationsPageData = OrganizationsListData;

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

async function getOrganizations(): Promise<CursorPaginationResult<OrganizationsListItem>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        items: [
          mockOrganizationData(), mockOrganizationData(), mockOrganizationData(), mockOrganizationData(),
          mockOrganizationData(), mockOrganizationData(), mockOrganizationData(), mockOrganizationData()
        ],
        hasMore: true,
        cursor: ''
      })
    }, 1000)
  });
}

export const mockOrganizationData = () => {
  return {
    id: Math.random().toString(),
    name: 'name',
    website: 'www.url.com',
    shortDescription: 'shortDescription',
    jobsCount: 3,
  }
}
