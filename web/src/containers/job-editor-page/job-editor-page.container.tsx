import React from 'react';
import { useTranslation } from 'next-i18next';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { JobEditorContainer, JobEditorContainerValues } from '../job-editor';

export interface JobEditorPageProps {
  id: string;
  organizationName: string;
  values: JobEditorContainerValues
  onSuccess: () => void;
  paths: JobEditorPagePaths;
}

export type JobEditorPagePaths = LayoutContainerPaths;

export function JobEditorPageContainer(props: JobEditorPageProps) {
  const { t } = useTranslation();

  const submit = async (values: JobEditorContainerValues) => {
    console.log({
      id: props.id,
      values
    });
  };

  const messages = {
    submit: t('createJob')
  };

  return (
    <LayoutContainer paths={props.paths}>
      <JobEditorContainer
        organizationName={props.organizationName}
        values={props.values}
        onSuccess={props.onSuccess}
        submit={submit}
        messages={messages}
      />
    </LayoutContainer>
  )
}
