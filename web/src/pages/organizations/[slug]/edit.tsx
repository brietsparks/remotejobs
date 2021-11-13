import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { OrganizationEditorPageContainer } from '../../../containers';
import { navPaths } from '../../paths';

export interface EditOrganizationPageProps {
}

export default function EditOrganizationPage(props: EditOrganizationPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <OrganizationEditorPageContainer
      id="id"
      values={{
        name: 'name',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
        website: 'www.url.com'
      }}
      onSuccess={handleSuccess}
      paths={navPaths}
    />
  );
}

export const getServerSideProps: GetServerSideProps<EditOrganizationPageProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
