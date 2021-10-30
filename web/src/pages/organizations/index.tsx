import { GetServerSideProps } from 'next';

import { OrganizationsPageContainer } from '../../containers';

export interface OrganizationsPageProps {

}

export default function OrganizationsPage(props: OrganizationsPageProps) {
  return (
    <OrganizationsPageContainer />
  )
}

export const getServerSideProps: GetServerSideProps<OrganizationsPageProps> = async () => {
  return {
    props: {}
  }
}
