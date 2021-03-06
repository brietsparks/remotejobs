import React from 'react';
import { useTranslation } from 'next-i18next';

import { LayoutContainer, LayoutContainerPaths } from '../layout';
import { JobEditorContainer, JobEditorContainerPaths, JobEditorContainerValues } from '../job-editor';

import { updateJob } from './job-editor-page.api';

export interface JobEditorPageProps {
  id: string;
  organizationName: string;
  values: JobEditorContainerValues
  onSuccess: () => void;
  paths: JobEditorPagePaths;
}

export type { JobEditorContainerValues };

export type JobEditorPagePaths = LayoutContainerPaths & JobEditorContainerPaths;

export function JobEditorPageContainer(props: JobEditorPageProps) {
  const { t } = useTranslation();

  const submit = async (values: JobEditorContainerValues) => {
    return updateJob({
      id: props.id,
      ...values,
    })
  };

  const messages = {
    submit: t('saveJob')
  };

  return (
    <LayoutContainer paths={props.paths}>
      <JobEditorContainer
        organizationName={props.organizationName}
        values={props.values}
        onSuccess={props.onSuccess}
        submit={submit}
        messages={messages}
        paths={props.paths}
      />
    </LayoutContainer>
  )
}
