import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { JobEditorPageContainer, getUpdateJobInitialValues, JobEditorContainerValues } from '../../../containers/job-editor-page';
import { navPaths } from '../../paths';

export interface EditJobPageProps {
  id: string;
  organizationName: string;
  values: JobEditorContainerValues;
}

export default function EditJobPage(props: EditJobPageProps) {
  const router = useRouter();

  const handleSuccess = () => router.push(`/jobs/${props.id}`);

  const paths = {
    cancel: `/jobs/${props.id}`,
    ...navPaths
  }

  return (
    <JobEditorPageContainer
      id={props.id}
      organizationName={props.organizationName}
      values={props.values}
      onSuccess={handleSuccess}
      paths={paths}
    />
  );
}

export type EditJobPageUrlParams = {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<EditJobPageProps, EditJobPageUrlParams> = async (ctx) => {
  const id = ctx.params?.slug as string;

  const {
    organization: { name: organizationName },
    ...values
  } = await getUpdateJobInitialValues(id);

  return {
    props: {
      id,
      organizationName,
      values,
      ...(await serverSideTranslations(ctx.locale as string, ['common']))
    }
  }
}
