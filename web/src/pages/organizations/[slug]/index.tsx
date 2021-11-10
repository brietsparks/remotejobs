import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { OrganizationPageContainer } from '../../../containers';
import { mockOrganizationData } from '../../../mocks';

export interface OrganizationPageProps {
}

export default function OrganizationPage(props: OrganizationPageProps) {
  const paths = {
    organization: (id: string) => `/organizations/${id}`,
    job: (id: string) => `/jobs/${id}`
  };

  return (
    <OrganizationPageContainer
      data={mockOrganizationData()}
      paths={paths}
    />
  );
}

export const getServerSideProps: GetServerSideProps<OrganizationPageProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  };
};
