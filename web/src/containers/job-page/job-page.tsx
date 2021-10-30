import React from 'react';

import { Job } from '../../domain';
import { JobSplash } from '../../components';

export interface JobPageContainerProps {
  values: Job
}

export function JobPageContainer(props: JobPageContainerProps) {
  return (
    <JobSplash
      job={props.values}
    />
  );
}
