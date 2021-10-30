import { GetServerSideProps } from 'next';

import { OrganizationsPageContainer } from '../../containers';

export interface OrganizationsPageProps {

}

export default function OrganizationsPage(props: OrganizationsPageProps) {
  const paths = {
    view: (id: string) => `/organizations/${id}`
  };

  return (
    <OrganizationsPageContainer paths={paths} />
  )
}

export const getServerSideProps: GetServerSideProps<OrganizationsPageProps> = async () => {
  return {
    props: {}
  }
}
