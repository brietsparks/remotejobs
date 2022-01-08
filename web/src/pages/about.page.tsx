import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AboutPageContainer } from '../containers/about-page';
import { navPaths } from './paths';

export default function AboutPage() {
  return (
    <AboutPageContainer paths={navPaths} />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
