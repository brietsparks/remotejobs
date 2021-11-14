import React, { ChangeEvent, useState, useCallback } from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { useAsync } from 'react-async';

import { useJobEditorFormStyles } from './job-editor-form.styles';

export interface JobEditorFormProps {
  organizationName: string;
  values?: JobEditorFormValues;
  messages: JobEditorFormMessages;
  submit: (values: JobEditorFormValues) => Promise<unknown>;
  onSuccess: (result: unknown) => void;
  onFailure?: (error: Error) => void;
}

export interface JobEditorFormMessages {
  title: string;
  shortDescription: string;
  longDescription: string;
  submit: string;
}

export interface JobEditorFormValues {
  title: string;
  shortDescription: string;
  longDescription: string;
}

const defaultValues: JobEditorFormValues = {
  title: '',
  shortDescription: '',
  longDescription: '',
};

export function JobEditorForm(props: JobEditorFormProps) {
  const [values, setValues] = useState<JobEditorFormValues>(props.values || defaultValues);

  const changeHandler = (field: keyof JobEditorFormValues) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }));
    }
  }

  const deferFn = useCallback(() => props.submit(values), [props, values]);
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

  const requiredProps = {
    required: true,
    inputProps: { 'aria-required': true }
  };

  return (
    <Container className={classes.root} role="form">
      <Typography>
        {props.organizationName}
      </Typography>

      <TextField
        id="job-title-input"
        label={props.messages.title}
        value={values.title}
        onChange={changeHandler('title')}
        {...requiredProps}
      />

      <TextField
        id="job-short-description-input"
        label={props.messages.shortDescription}
        value={values.shortDescription}
        onChange={changeHandler('shortDescription')}
        {...requiredProps}
      />

      <TextField
        id="job-long-description-input"
        label={props.messages.longDescription}
        value={values.longDescription}
        onChange={changeHandler('longDescription')}
        {...requiredProps}
      />

      <Button
        onClick={submit}
        disabled={!isValid || isPending}
      >
        {props.messages.submit}
      </Button>
    </Container>
  )
}
