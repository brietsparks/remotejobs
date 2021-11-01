import React from 'react';
import { useTranslation } from 'next-i18next';

import { JobEditorContainer, JobEditorContainerValues } from '../job-editor';

export interface JobCreatorPageProps {
  organizationId: string;
  organizationName: string;
  onSuccess: () => void;
}

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
    <JobEditorContainer
      organizationName={props.organizationName}
      onSuccess={props.onSuccess}
      submit={submit}
      messages={messages}
    />
  )
}
