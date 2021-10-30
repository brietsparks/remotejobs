import { GetServerSideProps } from 'next';

import { OrganizationsPageContainer, mockData } from '../../containers';

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
          mockData(), mockData(), mockData(), mockData(),
          mockData(), mockData(), mockData(), mockData()
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
