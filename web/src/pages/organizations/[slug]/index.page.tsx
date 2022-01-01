import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';

import { OrganizationPageContainer, getOrganizationWithJobs, GetOrganizationWithJobsResult, getOrganization } from '../../../containers';
import { navPaths } from '../../paths';

export type OrganizationPageProps =
  SSRConfig & {
  data: GetOrganizationWithJobsResult;
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
      data={props.data}
      paths={paths}
    />
  );
}

export type OrganizationPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<OrganizationPageProps, OrganizationPageUrlParams> = async (ctx) => {
  const id = ctx.params?.slug as string;
  const data = await getOrganizationWithJobs(id);

  return {
    props: {
      id,
      data,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  };
};
