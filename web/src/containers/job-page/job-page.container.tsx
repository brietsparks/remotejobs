import React from 'react';

import { JobDetails, JobDetailsData, JobDetailsPaths } from '../../components';

export interface JobPageContainerProps {
  data: JobDetailsData;
  paths: JobPageContainerPaths;
}

export type JobPageContainerPaths = JobDetailsPaths;

export function JobPageContainer(props: JobPageContainerProps) {
  return (
    <JobDetails
      data={props.data}
      paths={props.paths}
    />
  );
}
