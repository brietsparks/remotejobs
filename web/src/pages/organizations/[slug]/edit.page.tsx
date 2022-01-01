import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { OrganizationEditorPageContainer, getUpdateOrganizationInitialValues, OrganizationEditorContainerValues } from '../../../containers';
import { navPaths } from '../../paths';

export interface EditOrganizationPageProps {
  id: string;
  values: OrganizationEditorContainerValues
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
      id={props.id}
      values={props.values}
      onSuccess={handleSuccess}
      paths={paths}
    />
  );
}

export type EditOrganizationPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<EditOrganizationPageProps, EditOrganizationPageUrlParams> = async (ctx) => {
  const id = ctx.params?.slug as string;

  const values = await getUpdateOrganizationInitialValues(id);

  return {
    props: {
      id,
      values,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
