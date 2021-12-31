import React from 'react';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { JobsListContainer, PaginatedJobs, JobsListContainerPaths } from '../jobs-list';

import { getJobs } from './jobs-page.api';

export interface JobsPageContainerProps {
  data?: PaginatedJobs;
  paths: JobsPageContainerPaths;
}

export type { PaginatedJobs };

export type JobsPageContainerPaths = LayoutContainerPaths & JobsListContainerPaths;

export function JobsPageContainer(props: JobsPageContainerProps) {
  return (
    <LayoutContainer paths={props.paths}>
      <JobsListContainer
        getJobs={getJobs}
        showOrganizationName
        data={props.data}
        paths={props.paths}
      />
    </LayoutContainer>
  )
}
