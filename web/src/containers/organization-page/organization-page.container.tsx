import React from 'react';

import { Organization } from '../../domain';
import { OrganizationSplash } from '../../components';
import { JobsListContainer, JobsListContainerPaths } from '../jobs-list';

export interface OrganizationPageContainerProps {
  data: Organization
  paths: OrganizationPageContainerPaths;
}

export type OrganizationPageContainerPaths = JobsListContainerPaths;

export function OrganizationPageContainer(props: OrganizationPageContainerProps) {
  const jobsList = (
    <JobsListContainer
      paths={props.paths}
      showOrganizationName={false}
    />
  );

  const messages = {
    jobs: `Jobs at ${props.data.name}`
  };

  return (
    <OrganizationSplash
      data={props.data}
      jobsList={jobsList}
      messages={messages}
    />
  );
}
