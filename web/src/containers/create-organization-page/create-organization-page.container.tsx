import { OrganizationEditorContainer, OrganizationEditorContainerValues } from '../organization-editor';

export interface CreateOrganizationPageProps {
  onSuccess: () => void;
}

export function CreateOrganizationPageContainer(props: CreateOrganizationPageProps) {
  const submit = async (values: OrganizationEditorContainerValues) => {
    console.log({ values });
  }

  return (
    <OrganizationEditorContainer
      onSuccess={props.onSuccess}
      submit={submit}
      messages={{ submit: 'Create Organization' }}
    />
  )
}
