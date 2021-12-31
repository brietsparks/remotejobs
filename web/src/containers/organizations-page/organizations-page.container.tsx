import React from 'react';
import { useTranslation } from 'next-i18next';

import { OrganizationsList, PaginatedOrganizations, OrganizationsListPaths } from '../../components';
import { LayoutContainer, LayoutContainerPaths } from '../layout';

import { getOrganizations } from './organizations-page.api';

export interface OrganizationsPageProps {
  data?: PaginatedOrganizations;
  paths: OrganizationsPagePaths;
}

export type { PaginatedOrganizations };

export type OrganizationsPagePaths = OrganizationsListPaths & LayoutContainerPaths;

export function OrganizationsPageContainer(props: OrganizationsPageProps) {
  const { t } = useTranslation();

  const messages = {
    view: t('viewOrganization'),
    create: t('createOrganization'),
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
  );
}

