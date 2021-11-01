import React from 'react';
import { useTranslation } from 'next-i18next';

import { Organization } from '../../domain';
import { OrganizationSplash, OrganizationSplashMessages } from '../../components';
import { JobsListContainer, JobsListContainerPaths, mockJobData } from '../jobs-list';

export interface OrganizationPageContainerProps {
  data: Organization
  paths: OrganizationPageContainerPaths;
}

export type OrganizationPageContainerPaths = JobsListContainerPaths;

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

  const messages: OrganizationSplashMessages = {
    longDescriptionHeading: t('organizationLongDescriptionHeading'),
    jobs: t('jobsAtOrganization', { organization: props.data.name }),
    nameLabel: t('organizationName'),
    websiteLabel: t('organizationWebsite'),
    shortDescriptionLabel: t('organizationShortDescription')
  };

  return (
    <OrganizationSplash
      data={props.data}
      jobsList={jobsList}
      messages={messages}
    />
  );
}
