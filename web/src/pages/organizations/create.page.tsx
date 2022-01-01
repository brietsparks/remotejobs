import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { OrganizationCreatorPageContainer } from '../../containers/organization-creator-page';
import { navPaths } from '../paths';

export interface CreateOrganizationPageProps {
}

export default function CreateOrganizationPage(props: CreateOrganizationPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/organizations');

  const paths = {
    cancel: '/organizations',
    ...navPaths
  }

  return (
    <OrganizationCreatorPageContainer
      onSuccess={handleSuccess}
      paths={paths}
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
