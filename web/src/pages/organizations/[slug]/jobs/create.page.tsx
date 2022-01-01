import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobCreatorPageContainer, getOrganizationName } from '../../../../containers/job-creator-page';
import { navPaths } from '../../../paths';

export interface CreateJobPageProps {
  organizationId: string;
  organizationName: string;
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
      organizationId={props.organizationId}
      organizationName={props.organizationName}
      onSuccess={handleSuccess}
      paths={paths}
    />
  )
}

export type CreateJobPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<CreateJobPageProps, CreateJobPageUrlParams> = async (ctx) => {
  const organizationId = ctx.params?.slug as string;

  const organizationName = await getOrganizationName(organizationId);

  return {
    props: {
      organizationId,
      organizationName,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
