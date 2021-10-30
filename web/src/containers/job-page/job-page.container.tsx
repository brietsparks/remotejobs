import React from 'react';

import { JobSplash, JobSplashData, JobSplashPaths } from '../../components';

export interface JobPageContainerProps {
  data: JobSplashData;
  paths: JobPageContainerPaths;
}

export type JobPageContainerPaths = JobSplashPaths;

export function JobPageContainer(props: JobPageContainerProps) {
  return (
    <JobSplash
      data={props.data}
      paths={props.paths}
    />
  );
}
