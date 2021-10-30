import { GetServerSideProps } from 'next';

import { OrganizationPageContainer } from '../../../containers';

export interface OrganizationPageProps {
}

export default function OrganizationPage(props: OrganizationPageProps) {

  return (
    <OrganizationPageContainer
      values={{
        name: 'name',
        shortDescription: 'shortDescription',
        longDescription: 'longDescription',
        website: 'www.url.com'
      }}
    />
  )
}

export const getServerSideProps: GetServerSideProps<OrganizationPageProps> = async () => {
  return {
    props: {}
  }
}
