import React from 'react';
import { useTranslation } from 'next-i18next';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { OrganizationEditorContainer, OrganizationEditorContainerValues } from '../organization-editor';

export interface OrganizationEditorPageContainerProps {
  id: string;
  values: OrganizationEditorContainerValues;
  onSuccess: () => void;
  paths: OrganizationEditorPageContainerPaths;
}

export type OrganizationEditorPageContainerPaths = LayoutContainerPaths;

export function OrganizationEditorPageContainer(props: OrganizationEditorPageContainerProps) {
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
    <LayoutContainer paths={props.paths}>
      <OrganizationEditorContainer
        values={props.values}
        onSuccess={props.onSuccess}
        submit={submit}
        messages={messages}
      />
    </LayoutContainer>
  )
}
