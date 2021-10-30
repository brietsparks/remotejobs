import { JobEditorContainer, JobEditorContainerValues } from '../job-editor';

export interface EditJobPageProps {
  id: string;
  organizationName: string;
  values: JobEditorContainerValues
  onSuccess: () => void;
}

export function EditJobPageContainer(props: EditJobPageProps) {
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
