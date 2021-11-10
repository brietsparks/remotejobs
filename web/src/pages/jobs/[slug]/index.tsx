import { GetServerSideProps } from 'next';

import { JobPageContainer } from '../../../containers';
import { mockJobData } from '../../../mocks';

export interface JobPageProps {
}

export default function JobPage(props: JobPageProps) {
  const paths = {
    organization: `/organizations/organizationId`
  };

  return (
    <JobPageContainer
      data={mockJobData()}
      paths={paths}
    />
  )
}

export const getServerSideProps: GetServerSideProps<JobPageProps> = async () => {
  return {
    props: {}
  }
}
