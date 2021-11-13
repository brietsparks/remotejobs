import React from 'react';
import { useTranslation } from 'next-i18next';

import { Organization } from '../../domain';
import { OrganizationDetails } from '../../components';
import { mockJobData } from '../../mocks';
import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { JobsListContainer, JobsListContainerPaths } from '../jobs-list';

export interface OrganizationPageContainerProps {
  data: Organization
  paths: OrganizationPageContainerPaths;
}

export type OrganizationPageContainerPaths = JobsListContainerPaths & LayoutContainerPaths;

export function OrganizationPageContainer(props: OrganizationPageContainerProps) {
  const { t } = useTranslation();

  const jobsList = (
    <JobsListContainer
      data={{
        items: [
          mockJobData(), mockJobData(), mockJobData(), mockJobData(),
          mockJobData(), mockJobData(), mockJobData(), mockJobData()
        ],
        hasMore: true,
        cursor: ''
      }}
      paths={props.paths}
      showOrganizationName={false}
    />
  );

  const messages = {
    jobs: t('jobsAtOrganization', { organization: props.data.name })
  };

  return (
    <LayoutContainer paths={props.paths}>
      <OrganizationDetails
        data={props.data}
        jobsList={jobsList}
        messages={messages}
      />
    </LayoutContainer>
  );
}
