import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { OrganizationEditorPageContainer } from '../../../containers';
import { navPaths } from '../../paths';

export interface EditOrganizationPageProps {
  id: string;
}

export default function EditOrganizationPage(props: EditOrganizationPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push(`/organizations/${props.id}`);

  const paths = {
    cancel: `/organizations/${props.id}`,
    ...navPaths
  }

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
      paths={paths}
    />
  );
}

export type EditOrganizationPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<EditOrganizationPageProps, EditOrganizationPageUrlParams> = async (ctx) => {
  return {
    props: {
      id: ctx.params?.slug as string,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
