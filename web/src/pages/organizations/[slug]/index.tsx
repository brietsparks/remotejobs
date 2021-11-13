import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';

import { OrganizationPageContainer } from '../../../containers';
import { mockOrganizationData } from '../../../mocks';

export type OrganizationPageProps =
  SSRConfig & {
  id: string;
}

export default function OrganizationPage(props: OrganizationPageProps) {
  const paths = {
    organization: (id: string) => `/organizations/${id}`,
    job: (id: string) => `/jobs/${id}`,
    createJob: `/organizations/${props.id}/jobs/create`
  };

  return (
    <OrganizationPageContainer
      data={mockOrganizationData()}
      paths={paths}
    />
  );
}

export interface OrganizationPageParams {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<OrganizationPageProps, OrganizationPageParams> = async (ctx) => {
  return {
    props: {
      id: ctx.params.slug as string,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  };
};
