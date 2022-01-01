import React from 'react';
import { useTranslation } from 'next-i18next';

import { JobDetails, JobDetailsData, JobDetailsPaths } from '../../components/job-details';
import { LayoutContainer, LayoutContainerPaths } from '../layout';

export interface JobPageContainerProps {
  data: JobDetailsData;
  paths: JobPageContainerPaths;
}

export type { JobDetailsData };

export type JobPageContainerPaths = JobDetailsPaths & LayoutContainerPaths;

export function JobPageContainer(props: JobPageContainerProps) {
  const { t } = useTranslation();

  const messages = {
    edit: t('editJob')
  }

  return (
    <LayoutContainer paths={props.paths}>
      <JobDetails
        data={props.data}
        paths={props.paths}
        messages={messages}
      />
    </LayoutContainer>
  );
}
