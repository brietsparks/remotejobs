import React from 'react';
import { useTranslation } from 'next-i18next';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { JobEditorContainer, JobEditorContainerPaths, JobEditorContainerValues } from '../job-editor';

export interface JobCreatorPageProps {
  organizationId: string;
  organizationName: string;
  onSuccess: () => void;
  paths: JobCreatorPagePaths;
}

export type JobCreatorPagePaths = LayoutContainerPaths & JobEditorContainerPaths;

export function JobCreatorPageContainer(props: JobCreatorPageProps) {
  const { t } = useTranslation();

  const submit = async (values: JobEditorContainerValues) => {
    console.log({
      organizationId: props.organizationId,
      values
    });
  }

  const messages = {
    submit: t('createJob'),
  }

  return (
    <LayoutContainer paths={props.paths}>
      <JobEditorContainer
        organizationName={props.organizationName}
        onSuccess={props.onSuccess}
        submit={submit}
        messages={messages}
        paths={props.paths}
      />
    </LayoutContainer>
  )
}
