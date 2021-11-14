import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';

import { JobPageContainer } from '../../../containers';
import { mockJobData } from '../../../mocks';
import { navPaths } from '../../paths';

export type JobPageProps =
  SSRConfig & {
  id: string;
  organizationId: string;
}

export default function JobPage(props: JobPageProps) {
  const paths = {
    edit: `/jobs/${props.id}/edit`,
    organization: `/organizations/${props.organizationId}`,
    ...navPaths
  };

  return (
    <JobPageContainer
      data={mockJobData()}
      paths={paths}
    />
  )
}

export type JobPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<JobPageProps, JobPageUrlParams> = async (ctx ) => {
  const jobId = 'mock-job-id';
  const organizationId = 'mock-organization-id';
  return {
    props: {
      id: jobId,
      organizationId,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
