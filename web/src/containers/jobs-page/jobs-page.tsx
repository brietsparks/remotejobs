import React from 'react';

import { JobsList, JobListItem, JobsListPaths } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface JobsPageProps {
  paths: JobsPagePaths
}

export type JobsPagePaths = JobsListPaths;

export function JobsPageContainer(props: JobsPageProps) {
  return (
    <JobsList
      getJobs={getJobs}
      messages={{ view: 'View', }}
      paths={props.paths}
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
