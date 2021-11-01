import React from 'react';
import { useTranslation } from 'next-i18next';

import { OrganizationEditorForm, OrganizationEditorFormValues, OrganizationEditorFormMessages } from '../../components';

export interface OrganizationEditorContainerProps {
  values?: OrganizationEditorFormValues;
  onSuccess: () => void;
  submit: (values: OrganizationEditorContainerValues) => Promise<unknown>;
  messages: Partial<OrganizationEditorFormMessages>;
}

export type OrganizationEditorContainerValues = OrganizationEditorFormValues;

export function OrganizationEditorContainer(props: OrganizationEditorContainerProps) {
  const { t } = useTranslation();

  const messages = {
    name: t('organizationName'),
    website: t('organizationWebsite'),
    shortDescription: t('organizationShortDescription'),
    longDescription: t('organizationLongDescription'),
    submit: t('saveJob'),
    ...props.messages
  };

  return (
    <OrganizationEditorForm
      values={props.values}
      onSuccess={props.onSuccess}
      submit={props.submit}
      messages={messages}
    />
  )
}
