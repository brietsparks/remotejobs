import React from 'react';
import { useTranslation } from 'next-i18next';

import { JobsList, PaginatedJobs, JobsListPaths, GetPaginatedJobs } from '../../components';

export interface JobsListContainerProps {
  getJobs: GetPaginatedJobs;
  data?: PaginatedJobs;
  paths: JobsListContainerPaths
  showOrganizationName: boolean;
}

export type { GetPaginatedJobs, PaginatedJobs };

export type JobsListContainerPaths = JobsListPaths;

export function JobsListContainer(props: JobsListContainerProps) {
  const { t } = useTranslation();

  const messages = {
    view: t('viewJob'),
    create: t('createJob')
  };

  return (
    <JobsList
      data={props.data}
      getJobs={props.getJobs}
      messages={messages}
      paths={props.paths}
      showOrganizationName={props.showOrganizationName}
    />
  )
}
