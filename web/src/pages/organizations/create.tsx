import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { CreateOrganizationPageContainer } from '../../containers';

export interface CreateOrganizationPageProps {
}

export default function CreateOrganizationPage(props: CreateOrganizationPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <CreateOrganizationPageContainer
      onSuccess={handleSuccess}
    />
  )
}

export const getServerSideProps: GetServerSideProps<CreateOrganizationPageProps> = async () => {
  return {
    props: {}
  }
}
