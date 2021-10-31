import React from 'react';

import { JobsList, JobsListData, JobsListItem, JobsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface JobsListContainerProps {
  data?: JobsListContainerData;
  paths: JobsListContainerPaths
  showOrganizationName: boolean;
}

export type JobsListContainerData = JobsListData;

export type JobsListContainerPaths = JobsListPaths;

export function JobsListContainer(props: JobsListContainerProps) {
  return (
    <JobsList
      data={props.data}
      getJobs={getJobs}
      messages={{ view: 'View', }}
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
