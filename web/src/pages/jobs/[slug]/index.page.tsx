import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';

import { JobPageContainer, getJob, JobDetailsData } from '../../../containers/job-page';
import { navPaths } from '../../paths';

export type JobPageProps =
  SSRConfig & {
  id: string;
  organizationId: string;
  data: JobDetailsData;
}

export default function JobPage(props: JobPageProps) {
  const paths = {
    edit: `/jobs/${props.id}/edit`,
    organization: `/organizations/${props.organizationId}`,
    ...navPaths
  };

  return (
    <JobPageContainer
      data={props.data}
      paths={paths}
    />
  );
}

export type JobPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<JobPageProps, JobPageUrlParams> = async (ctx ) => {
  const id = ctx.params?.slug as string;

  const data = await getJob(id);

  return {
    props: {
      id,
      organizationId: data.organizationId,
      data,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
