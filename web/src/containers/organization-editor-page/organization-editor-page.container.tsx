import React from 'react';
import { useTranslation } from 'next-i18next';

import { OrganizationEditorContainer, OrganizationEditorContainerValues } from '../organization-editor';

export interface OrganizationEditorPageProps {
  id: string;
  values: OrganizationEditorContainerValues;
  onSuccess: () => void;
}

export function OrganizationEditorPageContainer(props: OrganizationEditorPageProps) {
  const { t } = useTranslation();

  const submit = async (values: OrganizationEditorContainerValues) => {
    console.log({
      id: props.id,
      values
    });
  };

  const messages = {
    submit: t('saveOrganization')
  };

  return (
    <OrganizationEditorContainer
      values={props.values}
      onSuccess={props.onSuccess}
      submit={submit}
      messages={messages}
    />
  )
}
