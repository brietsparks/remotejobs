import { GetServerSideProps } from 'next';

import { JobsPageContainer } from '../../containers';

export interface JobsPageProps {

}

export default function JobsPage(props: JobsPageProps) {
  const paths = {
    job: (id: string) => `/jobs/${id}`,
    organization: (id: string) => `/organizations/${id}`
  };

  return (
    <JobsPageContainer paths={paths} />
  )
}

export const getServerSideProps: GetServerSideProps<JobsPageProps> = async () => {
  return {
    props: {}
  }
}
