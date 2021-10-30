import { OrganizationEditorForm, OrganizationEditorFormMessages } from '../../components';

import { Organization } from '../../domain';

export interface OrganizationEditorContainerProps {
  values?: Organization;
  onSuccess: () => void;
  submit: () => Promise<unknown>;
  messages: Partial<OrganizationEditorFormMessages>;
}

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
