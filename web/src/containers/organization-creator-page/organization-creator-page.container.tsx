import { OrganizationEditorContainer, OrganizationEditorContainerValues } from '../organization-editor';

export interface OrganizationCreatorPageProps {
  onSuccess: () => void;
}

export function OrganizationCreatorPageContainer(props: OrganizationCreatorPageProps) {
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
