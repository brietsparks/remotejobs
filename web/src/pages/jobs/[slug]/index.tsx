import { GetServerSideProps } from 'next';

import { JobPageContainer } from '../../../containers';

export interface JobPageProps {
}

export default function JobPage(props: JobPageProps) {
  return (
    <JobPageContainer
      values={{
        id: 'id',
        title: 'title',
        organizationId: 'organizationId',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
      }}
    />
  )
}

export const getServerSideProps: GetServerSideProps<JobPageProps> = async () => {
  return {
    props: {}
  }
}
