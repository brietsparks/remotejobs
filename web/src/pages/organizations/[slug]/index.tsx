import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';

import { OrganizationPageContainer } from '../../../containers';
import { mockOrganizationData } from '../../../mocks';
import { navPaths } from '../../paths';

export type OrganizationPageProps =
  SSRConfig & {
  id: string;
}

export default function OrganizationPage(props: OrganizationPageProps) {
  const paths = {
    edit: `/organizations/${props.id}/edit`,
    job: (id: string) => `/jobs/${id}`,
    createJob: `/organizations/${props.id}/jobs/create`,
    ...navPaths
  };

  return (
    <OrganizationPageContainer
      data={mockOrganizationData()}
      paths={paths}
    />
  );
}

export interface OrganizationPageUrlParams {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<OrganizationPageProps, OrganizationPageUrlParams> = async (ctx) => {
  return {
    props: {
      id: ctx.params.slug as string,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  };
};
