import React from 'react';
import { useTranslation } from 'next-i18next';

import { JobsList, JobsListData, JobsListItem, JobsListPaths, JobsListMessages } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface JobsListContainerProps {
  data?: JobsListContainerData;
  paths: JobsListContainerPaths
  showOrganizationName: boolean;
}

export type JobsListContainerData = JobsListData;

export type JobsListContainerPaths = JobsListPaths;

export function JobsListContainer(props: JobsListContainerProps) {
  const { t } = useTranslation();

  const messages: JobsListMessages = {
    view: t('viewJob'),
    titleLabel: t('jobTitle'),
    shortDescriptionLabel: t('jobShortDescription'),
    organizationNameLabel: t('organizationName'),
    viewLabel: ({ title, organizationName }) => t('viewJobLabel', { title, organizationName })
  };

  return (
    <JobsList
      data={props.data}
      getJobs={getJobs}
      messages={messages}
      paths={props.paths}
      showOrganizationName={props.showOrganizationName}
    />
  )
}

async function getJobs(): Promise<CursorPaginationResult<JobsListItem>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        items: [
          mockJobData(), mockJobData(), mockJobData(), mockJobData(),
          mockJobData(), mockJobData(), mockJobData(), mockJobData()
        ],
        hasMore: true,
        cursor: ''
      })
    }, 1000)
  });
}

export const mockJobData = () => {
  return {
    id: Math.random().toString(),
    organizationName: 'organizationName',
    organizationId: 'organizationId',
    title: 'name',
    shortDescription: 'shortDescription',
  }
}
