import React from 'react';
import { useTranslation } from 'next-i18next';

import {
  OrganizationsList,
  OrganizationsListData,
  OrganizationsListItem,
  OrganizationsListPaths
} from '../../components';
import { CursorPaginationResult } from '../../util';
import { mockOrganizationData } from '../../mocks';
import { LayoutContainer, LayoutContainerPaths } from '../layout';

export interface OrganizationsPageProps {
  data?: OrganizationsPageData;
  paths: OrganizationsPagePaths;
}

export type OrganizationsPageData = OrganizationsListData;

export type OrganizationsPagePaths = OrganizationsListPaths & LayoutContainerPaths;

export function OrganizationsPageContainer(props: OrganizationsPageProps) {
  const { t } = useTranslation();

  const messages = {
    view: t('viewOrganization'),
    jobsCount: (count: number) => t('jobsCount', { count })
  };

  return (
    <LayoutContainer paths={props.paths}>
      <OrganizationsList
        data={props.data}
        getOrganizations={getOrganizations}
        messages={messages}
        paths={props.paths}
      />
    </LayoutContainer>
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

