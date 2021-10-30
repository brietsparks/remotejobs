import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { EditJobPageContainer } from '../../../containers';

export interface EditJobPageProps {
}

export default function EditJobPage(props: EditJobPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push('/home');

  return (
    <EditJobPageContainer
      id="id"
      organizationName="Organization Name"
      values={{
        title: 'title',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
      }}
      onSuccess={handleSuccess}
  />
)
}

export const getServerSideProps: GetServerSideProps<EditJobPageProps> = async () => {
  return {
    props: {}
  }
}
