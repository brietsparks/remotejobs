import React from 'react';
import { useTranslation } from 'next-i18next';

import { OrganizationEditorContainer, OrganizationEditorContainerValues } from '../organization-editor';

export interface OrganizationCreatorPageProps {
  onSuccess: () => void;
}

export function OrganizationCreatorPageContainer(props: OrganizationCreatorPageProps) {
  const { t } = useTranslation();

  const submit = async (values: OrganizationEditorContainerValues) => {
    console.log({ values });
  };

  const messages = {
    submit: t('createOrganization')
  };

  return (
    <OrganizationEditorContainer
      onSuccess={props.onSuccess}
      submit={submit}
      messages={messages}
    />
  );
}
