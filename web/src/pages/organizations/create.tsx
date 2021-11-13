import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { OrganizationCreatorPageContainer } from '../../containers';
import { navPaths } from '../paths';

export interface CreateOrganizationPageProps {
}

export default function CreateOrganizationPage(props: CreateOrganizationPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <OrganizationCreatorPageContainer
      onSuccess={handleSuccess}
      paths={navPaths}
    />
  )
}

export const getServerSideProps: GetServerSideProps<CreateOrganizationPageProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
