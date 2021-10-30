import { GetServerSideProps } from 'next';

import { JobsListContainer } from '../../containers';

export interface JobsPageProps {

}

export default function JobsPage(props: JobsPageProps) {
  const paths = {
    job: (id: string) => `/jobs/${id}`,
    organization: (id: string) => `/organizations/${id}`
  };

  return (
    <JobsListContainer
      paths={paths}
      showOrganizationName={true}
    />
  )
}

export const getServerSideProps: GetServerSideProps<JobsPageProps> = async () => {
  return {
    props: {}
  }
}
