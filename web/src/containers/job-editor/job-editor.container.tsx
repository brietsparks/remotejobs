import { JobEditorForm, JobEditorFormMessages, JobEditorFormValues } from '../../components';

export type JobEditorContainerValues = JobEditorFormValues;

export interface JobEditorContainerProps {
  organizationName: string;
  values?: JobEditorContainerValues;
  submit: (values: JobEditorContainerValues) => Promise<unknown>;
  onSuccess: () => void;
  messages: Partial<JobEditorFormMessages>;
}

export function JobEditorContainer(props: JobEditorContainerProps) {
  return (
    <JobEditorForm
      organizationName={props.organizationName}
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
  );
}
