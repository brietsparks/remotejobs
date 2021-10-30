import { OrganizationEditorContainer } from '../organization-editor';

export interface CreateOrganizationPageProps {
  onSuccess: () => void;
}

export function CreateOrganizationPageContainer(props: CreateOrganizationPageProps) {
  return (
    <OrganizationEditorContainer
      onSuccess={props.onSuccess}
      submit={async () => {}}
      messages={{ submit: 'Create Organization' }}
    />
  )
}
