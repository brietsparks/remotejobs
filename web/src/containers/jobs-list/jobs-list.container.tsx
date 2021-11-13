import React from 'react';
import { useTranslation } from 'next-i18next';

import { JobsList, JobsListData, JobsListItem, JobsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';
import { mockJobData } from '../../mocks';

export interface JobsListContainerProps {
  data?: JobsListContainerData;
  paths: JobsListContainerPaths
  showOrganizationName: boolean;
}

export type JobsListContainerData = JobsListData;

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

