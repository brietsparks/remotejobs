import { Organization } from '../../domain';
import { OrganizationEditorContainer } from '../organization-editor';

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
