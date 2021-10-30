import { JobEditorContainer, JobEditorContainerValues } from '../job-editor';

export interface JobCreatorPageProps {
  organizationId: string;
  organizationName: string;
  onSuccess: () => void;
}

export function JobCreatorPageContainer(props: JobCreatorPageProps) {
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
