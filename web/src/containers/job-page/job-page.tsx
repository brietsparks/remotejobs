import React from 'react';

import { JobSplash, JobSplashData } from '../../components';

export interface JobPageContainerProps {
  data: JobSplashData
}

export function JobPageContainer(props: JobPageContainerProps) {
  return (
    <JobSplash
      data={props.data}
    />
  );
}
