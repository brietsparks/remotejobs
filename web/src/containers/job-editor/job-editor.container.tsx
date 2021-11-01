import React from 'react';
import { useTranslation } from 'next-i18next';

import { JobEditorForm, JobEditorFormMessages, JobEditorFormValues } from '../../components';

export type JobEditorContainerValues = JobEditorFormValues;

export interface JobEditorContainerProps {
  organizationName: string;
  values?: JobEditorContainerValues;
  submit: (values: JobEditorContainerValues) => Promise<unknown>;
  onSuccess: () => void;
  messages: Partial<JobEditorFormMessages>;
}

export function JobEditorContainer(props: JobEditorContainerProps) {
  const { t } = useTranslation();

  const messages = {
    title: t('jobTitle'),
    shortDescription: t('jobShortDescription'),
    longDescription: t('jobLongDescription'),
    submit: t('saveJob'),
    ...props.messages
  };

  return (
    <JobEditorForm
      organizationName={props.organizationName}
      values={props.values}
      onSuccess={props.onSuccess}
      submit={props.submit}
      messages={messages}
    />
  );
}
