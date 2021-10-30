import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { CreateJobPageContainer } from '../../../../containers';

export interface CreateJobPageProps {
}

export default function CreateJobPage(props: CreateJobPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <CreateJobPageContainer
      organizationId="organizationId"
      organizationName="organizationName"
      onSuccess={handleSuccess}
    />
  )
}

export const getServerSideProps: GetServerSideProps<CreateJobPageProps> = async () => {
  return {
    props: {}
  }
}
