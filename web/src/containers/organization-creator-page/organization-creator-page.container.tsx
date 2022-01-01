import React from 'react';
import { useTranslation } from 'next-i18next';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { OrganizationEditorContainer, OrganizationEditorContainerPaths, OrganizationEditorContainerValues } from '../organization-editor';

import { createOrganization } from './organization-creator-page.api';

export interface OrganizationCreatorPageContainerProps {
  onSuccess: () => void;
  paths: OrganizationCreatorPageContainerPaths
}

export type OrganizationCreatorPageContainerPaths = LayoutContainerPaths & OrganizationEditorContainerPaths;

export function OrganizationCreatorPageContainer(props: OrganizationCreatorPageContainerProps) {
  const { t } = useTranslation();

  const messages = {
    submit: t('createOrganization')
  };

  return (
    <LayoutContainer paths={props.paths}>
      <OrganizationEditorContainer
        onSuccess={props.onSuccess}
        submit={createOrganization}
        messages={messages}
        paths={props.paths}
      />
    </LayoutContainer>
  );
}
