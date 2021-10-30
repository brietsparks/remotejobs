import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { EditOrganizationPageContainer } from '../../../containers';

export interface EditOrganizationPageProps {
}

export default function EditOrganizationPage(props: EditOrganizationPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <EditOrganizationPageContainer
      values={{
        id: 'id',
        name: 'name',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
        website: 'www.url.com'
      }}
      onSuccess={handleSuccess}
    />
  )
}

export const getServerSideProps: GetServerSideProps<EditOrganizationPageProps> = async () => {
  return {
    props: {}
  }
}
