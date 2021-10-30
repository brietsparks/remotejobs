import React, { ChangeEvent, useState, useCallback } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useAsync } from 'react-async';

import { Job } from '../../domain';

import { useJobEditorFormStyles } from './job-editor-form.styles';

export interface JobEditorFormProps {
  values?: Job;
  messages: JobEditorFormMessages;
  submit: (values: Job) => Promise<unknown>;
  onSuccess: (result: unknown) => void;
  onFailure?: (error: Error) => void;
}

export interface JobEditorFormMessages {
  title: string;
  shortDescription: string;
  longDescription: string;
  submit: string;
}

const defaultValues = {
  id: '',
  organizationId: '',
  title: '',
  shortDescription: '',
  longDescription: '',
};

export function JobEditorForm(props: JobEditorFormProps) {
  const [values, setValues] = useState<Job>(props.values || defaultValues);

  const changeHandler = (field: keyof Job) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    }
  }

  const deferFn = useCallback(() => props.submit(values), [values]);
  const { run: submit, isPending, isRejected } = useAsync({
    deferFn,
    onResolve: props.onSuccess,
    onReject: props.onFailure
  });

  const isValid = !!(
    values.title &&
    values.shortDescription &&
    values.longDescription
  );

  const classes = useJobEditorFormStyles();

  return (
    <div className={classes.root}>
      <TextField
        label={props.messages.title}
        value={values.title}
        onChange={changeHandler('title')}
      />
  
      <TextField
        label={props.messages.shortDescription}
        value={values.shortDescription}
        onChange={changeHandler('shortDescription')}
      />

      <TextField
        label={props.messages.longDescription}
        value={values.longDescription}
        onChange={changeHandler('longDescription')}
      />

      <Button
        onClick={submit}
        disabled={!isValid || isPending}
      >
        {props.messages.submit}
      </Button>
    </div>
  )
}
