import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { OrganizationsPageContainer, getOrganizations, PaginatedOrganizations } from '../../containers/organizations-page';
import { navPaths } from '../paths';

export interface OrganizationsPageProps {
  data?: PaginatedOrganizations;
}

export default function OrganizationsPage(props: OrganizationsPageProps) {
  const paths = {
    view: (id: string) => `/organizations/${id}`,
    viewJob: (jobId: string) => `/jobs/${jobId}`,
    create: 'organizations/create',
    ...navPaths
  };

  return (
    <OrganizationsPageContainer
      data={props.data}
      paths={paths}
    />
  )
}

export const getServerSideProps: GetServerSideProps<OrganizationsPageProps> = async ({ locale }) => {
  const data = await getOrganizations();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
