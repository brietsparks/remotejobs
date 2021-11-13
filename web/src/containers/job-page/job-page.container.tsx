import React from 'react';

import { JobDetails, JobDetailsData, JobDetailsPaths } from '../../components';
import { LayoutContainer, LayoutContainerPaths } from '../layout';

export interface JobPageContainerProps {
  data: JobDetailsData;
  paths: JobPageContainerPaths;
}

export type JobPageContainerPaths = JobDetailsPaths & LayoutContainerPaths;

export function JobPageContainer(props: JobPageContainerProps) {
  return (
    <LayoutContainer paths={props.paths}>
      <JobDetails
        data={props.data}
        paths={props.paths}
      />
    </LayoutContainer>
  );
}
