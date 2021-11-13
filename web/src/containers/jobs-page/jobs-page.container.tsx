import React from 'react';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { JobsListContainer, JobsListContainerData, JobsListContainerPaths } from '../jobs-list';

export interface JobsPageContainerProps {
  data: JobsListContainerData;
  paths: JobsPageContainerPaths;
}

export type JobsPageContainerPaths = LayoutContainerPaths & JobsListContainerPaths;

export function JobsPageContainer(props: JobsPageContainerProps) {
  return (
    <LayoutContainer paths={props.paths}>
      <JobsListContainer
        showOrganizationName
        data={props.data}
        paths={props.paths}
      />
    </LayoutContainer>
  )
}
