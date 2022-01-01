import React from 'react';
import { useTranslation } from 'next-i18next';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { OrganizationEditorContainer, OrganizationEditorContainerPaths, OrganizationEditorContainerValues } from '../organization-editor';

import { updateOrganization } from './organization-editor-page.api';

export interface OrganizationEditorPageContainerProps {
  id: string;
  values: OrganizationEditorContainerValues;
  onSuccess: () => void;
  paths: OrganizationEditorPageContainerPaths;
}

export type { OrganizationEditorContainerValues };

export type OrganizationEditorPageContainerPaths = LayoutContainerPaths & OrganizationEditorContainerPaths;

export function OrganizationEditorPageContainer(props: OrganizationEditorPageContainerProps) {
  const { t } = useTranslation();

  const submit = async (values: OrganizationEditorContainerValues) => {
    return updateOrganization({
      id: props.id,
      ...values
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
        paths={props.paths}
      />
    </LayoutContainer>
  )
}
