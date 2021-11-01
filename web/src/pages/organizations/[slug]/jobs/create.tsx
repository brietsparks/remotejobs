import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobCreatorPageContainer } from '../../../../containers';

export interface CreateJobPageProps {
}

export default function CreateJobPage(props: CreateJobPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <JobCreatorPageContainer
      organizationId="organizationId"
      organizationName="organizationName"
      onSuccess={handleSuccess}
    />
  )
}

export const getServerSideProps: GetServerSideProps<CreateJobPageProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
