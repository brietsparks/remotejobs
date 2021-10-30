import { OrganizationEditorForm, OrganizationEditorFormValues, OrganizationEditorFormMessages } from '../../components';

export interface OrganizationEditorContainerProps {
  values?: OrganizationEditorFormValues;
  onSuccess: () => void;
  submit: (values: OrganizationEditorContainerValues) => Promise<unknown>;
  messages: Partial<OrganizationEditorFormMessages>;
}

export type OrganizationEditorContainerValues = OrganizationEditorFormValues;

export function OrganizationEditorContainer(props: OrganizationEditorContainerProps) {
  return (
    <OrganizationEditorForm
      values={props.values}
      onSuccess={props.onSuccess}
      submit={props.submit}
      messages={{
        name: 'Organization Name',
        website: 'Website URL',
        shortDescription: 'Short Description',
        longDescription: 'Long Description',
        submit: props.messages.submit || 'Submit',
        ...props.messages
      }}
    />
  )
}
