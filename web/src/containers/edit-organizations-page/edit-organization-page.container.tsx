import { OrganizationEditorContainer } from '../organization-editor';

import { Organization } from '../../domain';

export interface EditOrganizationPageProps {
  values: Organization;
  onSuccess: () => void;
}

export function EditOrganizationPageContainer(props: EditOrganizationPageProps) {
  return (
    <OrganizationEditorContainer
      values={props.values}
      onSuccess={props.onSuccess}
      submit={async () => {}}
      messages={{ submit: 'Save' }}
    />
  )
}
