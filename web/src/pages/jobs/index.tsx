import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { JobsPageContainer } from '../../containers';

export interface JobsPageProps {

}

export default function JobsPage(props: JobsPageProps) {
  const router = useRouter();

  const handleClickJob = (id: string) => router.push(`/jobs/${id}`);

  return (
    <JobsPageContainer
      onClickJob={handleClickJob}
    />
  )
}

export const getServerSideProps: GetServerSideProps<JobsPageProps> = async () => {
  return {
    props: {}
  }
}
