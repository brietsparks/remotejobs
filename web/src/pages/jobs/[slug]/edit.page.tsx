import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobEditorPageContainer } from '../../../containers';
import { navPaths } from '../../paths';

export interface EditJobPageProps {
  id: string;
}

export default function EditJobPage(props: EditJobPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push(`/jobs/${props.id}`);

  const paths = {
    cancel: `/jobs/${props.id}`,
    ...navPaths
  }

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
      paths={paths}
    />
  );
}

export type EditJobPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<EditJobPageProps, EditJobPageUrlParams> = async (ctx) => {
  return {
    props: {
      id: ctx.params?.slug as string,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
