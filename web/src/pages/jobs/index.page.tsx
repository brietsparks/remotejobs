import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobsPageContainer, getJobs, PaginatedJobs } from '../../containers';
import { navPaths } from '../paths';

export interface JobsPageProps {
  data?: PaginatedJobs;
}

export default function JobsPage(props: JobsPageProps) {
  const paths = {
    job: (id: string) => `/jobs/${id}`,
    organization: (id: string) => `/organizations/${id}`,
    ...navPaths
  };

  return (
    <JobsPageContainer
      data={props.data}
      paths={paths}
    />
  )
}

export const getServerSideProps: GetServerSideProps<JobsPageProps> = async ({ locale }) => {
  const data = await getJobs();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
