import { JobEditorForm, JobEditorFormMessages } from '../../components';

import { Job } from '../../domain';

export interface JobEditorContainerProps {
  values?: Job;
  onSuccess: () => void;
  submit: () => Promise<unknown>;
  messages: Partial<JobEditorFormMessages>;
}

export function JobEditorContainer(props: JobEditorContainerProps) {
  return (
    <JobEditorForm
      values={props.values}
      onSuccess={props.onSuccess}
      submit={props.submit}
      messages={{
        title: 'Title',
        shortDescription: 'Short Description',
        longDescription: 'Long Description',
        submit: props.messages.submit || 'Submit',
        ...props.messages
      }}
    />
  )
}
