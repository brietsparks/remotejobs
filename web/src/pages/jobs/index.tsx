import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobsListContainer, JobsListContainerData, mockJobData } from '../../containers';

export interface JobsPageProps {
}

export default function JobsPage(props: JobsPageProps) {
  const paths = {
    job: (id: string) => `/jobs/${id}`,
    organization: (id: string) => `/organizations/${id}`
  };

  return (
    <JobsListContainer
      data={{
        items: [
          mockJobData(), mockJobData(), mockJobData(), mockJobData(),
          mockJobData(), mockJobData(), mockJobData(), mockJobData()
        ],
        hasMore: true,
        cursor: ''
      }}
      paths={paths}
      showOrganizationName={true}
    />
  )
}

export const getServerSideProps: GetServerSideProps<JobsPageProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
