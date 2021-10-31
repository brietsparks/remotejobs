import { GetServerSideProps } from 'next';

import { OrganizationsPageContainer, mockOrganizationData } from '../../containers';

export interface OrganizationsPageProps {

}

export default function OrganizationsPage(props: OrganizationsPageProps) {
  const paths = {
    view: (id: string) => `/organizations/${id}`
  };

  return (
    <OrganizationsPageContainer
      data={{
        items: [
          mockOrganizationData(), mockOrganizationData(), mockOrganizationData(), mockOrganizationData(),
          mockOrganizationData(), mockOrganizationData(), mockOrganizationData(), mockOrganizationData()
        ],
        hasMore: true,
        cursor: ''
      }}
      paths={paths}
    />
  )
}

export const getServerSideProps: GetServerSideProps<OrganizationsPageProps> = async () => {
  return {
    props: {}
  }
}
