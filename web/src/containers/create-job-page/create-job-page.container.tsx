import { JobEditorContainer, JobEditorContainerValues } from '../job-editor';

export interface CreateJobPageProps {
  organizationId: string;
  organizationName: string;
  onSuccess: () => void;
}

export function CreateJobPageContainer(props: CreateJobPageProps) {
  const submit = async (values: JobEditorContainerValues) => {
    console.log({
      organizationId: props.organizationId,
      values
    });
  }

  return (
    <JobEditorContainer
      organizationName={props.organizationName}
      onSuccess={props.onSuccess}
      submit={submit}
      messages={{ submit: 'Create Job' }}
    />
  )
}
