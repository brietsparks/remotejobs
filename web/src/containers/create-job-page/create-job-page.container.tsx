import { JobEditorContainer } from '../job-editor';

export interface CreateJobPageProps {
  onSuccess: () => void;
}

export function CreateJobPageContainer(props: CreateJobPageProps) {
  return (
    <JobEditorContainer
      onSuccess={props.onSuccess}
      submit={async () => {}}
      messages={{ submit: 'Create Job' }}
    />
  )
}
