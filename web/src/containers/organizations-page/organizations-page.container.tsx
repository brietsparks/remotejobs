import React from 'react';
import { useTranslation } from 'next-i18next';
import faker from 'faker';

import { OrganizationsList, OrganizationsListData, OrganizationsListItem, OrganizationsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface OrganizationsPageProps {
  data? : OrganizationsPageData;
  paths: OrganizationsPagePaths;
}

export type OrganizationsPageData = OrganizationsListData;

export type OrganizationsPagePaths = OrganizationsListPaths;

export function OrganizationsPageContainer(props: OrganizationsPageProps) {
  const { t } = useTranslation();

  const messages = {
    view: t('viewOrganization'),
    jobsCount: (count: number) => t('jobsCount', { count })
  };

  return (
    <OrganizationsList
      data={props.data}
      getOrganizations={getOrganizations}
      messages={messages}
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
    name: faker.company.companyName(),
    website: faker.internet.url(),
    shortDescription: `${faker.company.catchPhrase()}`,
    jobsCount: 0
  }
}
