import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobEditorPageContainer } from '../../../containers';
import { navPaths } from '../../paths';

export interface EditJobPageProps {
}

export default function EditJobPage(props: EditJobPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <JobEditorPageContainer
      id="id"
      organizationName="Organization Name"
      values={{
        title: 'title',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
      }}
      onSuccess={handleSuccess}
      paths={navPaths}
  />
)
}

export const getServerSideProps: GetServerSideProps<EditJobPageProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
