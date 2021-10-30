import React from 'react';

import { JobsList, JobListItem, JobsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface JobsListContainerProps {
  paths: JobsListContainerPaths
  showOrganizationName: boolean;
}

export type JobsListContainerPaths = JobsListPaths;

export function JobsListContainer(props: JobsListContainerProps) {
  return (
    <JobsList
      getJobs={getJobs}
      messages={{ view: 'View', }}
      paths={props.paths}
      showOrganizationName={props.showOrganizationName}
    />
  )
}

async function getJobs(): Promise<CursorPaginationResult<JobListItem>> {
  const mockData = () => {
    return {
      id: Math.random().toString(),
      organizationName: 'organizationName',
      organizationId: 'organizationId',
      title: 'name',
      shortDescription: 'shortDescription',
    }
  }

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
