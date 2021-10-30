import { OrganizationEditorContainer, OrganizationEditorContainerValues } from '../organization-editor';

export interface EditOrganizationPageProps {
  id: string;
  values: OrganizationEditorContainerValues;
  onSuccess: () => void;
}

export function EditOrganizationPageContainer(props: EditOrganizationPageProps) {
  const submit = async (values: OrganizationEditorContainerValues) => {
    console.log({
      id: props.id,
      values
    });
  };

  return (
    <OrganizationEditorContainer
      values={props.values}
      onSuccess={props.onSuccess}
      submit={submit}
      messages={{ submit: 'Save' }}
    />
  )
}
