import React, { useCallback } from 'react';
import { useTranslation } from 'next-i18next';

import { Organization } from '../../domain';
import { OrganizationDetails } from '../../components';
import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { JobsListContainer, JobsListContainerPaths, PaginatedJobs } from '../jobs-list';

import { getJobsOfOrganization } from './organization-page.api';

export interface OrganizationPageContainerProps {
  data: OrganizationPageContainerData;
  paths: OrganizationPageContainerPaths;
}

export interface OrganizationPageContainerData {
  organization: Organization;
  jobs?: PaginatedJobs;
}

export type OrganizationPageContainerPaths =
  LayoutContainerPaths &
  JobsListContainerPaths & {
  createJob: string;
  edit: string;
};

export function OrganizationPageContainer(props: OrganizationPageContainerProps) {
  const { t } = useTranslation();

  const getJobs = useCallback((cursor?: string) => {
    return getJobsOfOrganization(props.data.organization.id, cursor);
  }, []);

  const jobsList = (
    <JobsListContainer
      getJobs={getJobs}
      data={props.data.jobs}
      paths={props.paths}
      showOrganizationName={false}
    />
  );

  const messages = {
    edit: t('editOrganization'),
    jobs: t('jobsAtOrganization', { organization: props.data?.organization.name }),
    createJob: t('createJob')
  };

  return (
    <LayoutContainer paths={props.paths}>
      <OrganizationDetails
        data={props.data?.organization}
        jobsList={jobsList}
        messages={messages}
        paths={props.paths}
      />
    </LayoutContainer>
  );
}
