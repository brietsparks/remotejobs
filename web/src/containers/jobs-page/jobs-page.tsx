import React from 'react';

import { JobsList, JobListItem } from '../../components';
import { CursorPaginationResult } from '../../util';

export interface JobsPageProps {
  onClickJob: (id: string) => void;
}

export function JobsPageContainer(props: JobsPageProps) {
  return (
    <JobsList
      getJobs={getJobs}
      messages={{ view: 'View', }}
      onClickJob={props.onClickJob}
    />
  )
}

async function getJobs(): Promise<CursorPaginationResult<JobListItem>> {
  const mockData = () => {
    return {
      id: Math.random().toString(),
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
