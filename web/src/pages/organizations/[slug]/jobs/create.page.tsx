import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobCreatorPageContainer } from '../../../../containers';
import { navPaths } from '../../../paths';

export interface CreateJobPageProps {
  organizationId: string;
}

export default function CreateJobPage(props: CreateJobPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push(`/organizations/${props.organizationId}`);

  const paths = {
    cancel: `/organizations/${props.organizationId}`,
    ...navPaths
  }

  return (
    <JobCreatorPageContainer
      organizationId="organizationId"
      organizationName="organizationName"
      onSuccess={handleSuccess}
      paths={paths}
    />
  )
}

export type CreateJobPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<CreateJobPageProps, CreateJobPageUrlParams> = async (ctx) => {
  return {
    props: {
      organizationId: ctx.params?.slug as string,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
