import { GetServerSideProps } from 'next';

import { JobPageContainer } from '../../../containers';

export interface JobPageProps {
}

export default function JobPage(props: JobPageProps) {
  const paths = {
    organization: `/organizations/organizationId`
  };

  return (
    <JobPageContainer
      data={{
        id: 'id',
        title: 'title',
        organizationId: 'organizationId',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
        organizationName: 'organizationName'
      }}
      paths={paths}
    />
  )
}

export const getServerSideProps: GetServerSideProps<JobPageProps> = async () => {
  return {
    props: {}
  }
}
