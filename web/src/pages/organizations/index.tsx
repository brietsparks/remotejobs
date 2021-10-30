import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { OrganizationsPageContainer } from '../../containers';

export interface OrganizationsPageProps {

}

export default function OrganizationsPage(props: OrganizationsPageProps) {
  const router = useRouter();

  const handleClickOrganization = (id: string) => router.push(`/organizations/${id}`);

  return (
    <OrganizationsPageContainer
      onClickOrganization={handleClickOrganization}
    />
  )
}

export const getServerSideProps: GetServerSideProps<OrganizationsPageProps> = async () => {
  return {
    props: {}
  }
}
