import React from 'react';
import { useTranslation } from 'next-i18next';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { OrganizationEditorContainer, OrganizationEditorContainerPaths, OrganizationEditorContainerValues } from '../organization-editor';

export interface OrganizationCreatorPageContainerProps {
  onSuccess: () => void;
  paths: OrganizationCreatorPageContainerPaths
}

export type OrganizationCreatorPageContainerPaths = LayoutContainerPaths & OrganizationEditorContainerPaths;

export function OrganizationCreatorPageContainer(props: OrganizationCreatorPageContainerProps) {
  const { t } = useTranslation();

  const submit = async (values: OrganizationEditorContainerValues) => {
    console.log({ values });
  };

  const messages = {
    submit: t('createOrganization')
  };

  return (
    <LayoutContainer paths={props.paths}>
      <OrganizationEditorContainer
        onSuccess={props.onSuccess}
        submit={submit}
        messages={messages}
        paths={props.paths}
      />
    </LayoutContainer>
  );
}
