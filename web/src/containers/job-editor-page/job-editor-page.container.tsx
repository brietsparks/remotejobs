import { JobEditorContainer, JobEditorContainerValues } from '../job-editor';

export interface JobEditorPageProps {
  id: string;
  organizationName: string;
  values: JobEditorContainerValues
  onSuccess: () => void;
}

export function JobEditorPageContainer(props: JobEditorPageProps) {
  const submit = async (values: JobEditorContainerValues) => {
    console.log({
      id: props.id,
      values
    });
  };

  return (
    <JobEditorContainer
      organizationName={props.organizationName}
      values={props.values}
      onSuccess={props.onSuccess}
      submit={submit}
      messages={{ submit: 'Create Job' }}
    />
  )
}
