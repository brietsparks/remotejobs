import { Job } from '../../domain';
import { JobEditorContainer } from '../job-editor';

export interface EditJobPageProps {
  values: Job
  onSuccess: () => void;
}

export function EditJobPageContainer(props: EditJobPageProps) {
  return (
    <JobEditorContainer
      values={props.values}
      onSuccess={props.onSuccess}
      submit={async () => {}}
      messages={{ submit: 'Create Job' }}
    />
  )
}
