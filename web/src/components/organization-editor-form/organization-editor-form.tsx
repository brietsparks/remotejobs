import React, { ChangeEvent, useState, useCallback } from 'react';
import { Container, Typography, Link, TextField, Button } from '@material-ui/core';
import { useAsync } from 'react-async';

import { useOrganizationEditorFormStyles } from './organization-editor-form.styles';

export interface OrganizationEditorFormProps {
  values?: OrganizationEditorFormValues;
  messages: OrganizationEditorFormMessages;
  submit: (values: OrganizationEditorFormValues) => Promise<unknown>;
  onSuccess: (result: unknown) => void;
  onFailure?: (error: Error) => void;
  paths: OrganizationEditorFormPaths;
}

export interface OrganizationEditorFormMessages {
  name: string;
  website: string;
  shortDescription: string;
  longDescription: string;
  submit: string;
  cancel: string;
}

export interface OrganizationEditorFormPaths {
  cancel: string;
}

export interface OrganizationEditorFormValues {
  name: string;
  shortDescription: string;
  longDescription?: string;
  website: string;
}

const defaultValues: OrganizationEditorFormValues = {
  name: '',
  shortDescription: '',
  longDescription: '',
  website: ''
};

export function OrganizationEditorForm(props: OrganizationEditorFormProps) {
  const [values, setValues] = useState<OrganizationEditorFormValues>(props.values || defaultValues);

  const changeHandler = (field: keyof OrganizationEditorFormValues) => {
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
    values.name &&
    values.shortDescription &&
    values.longDescription &&
    values.website
  );

  const classes = useOrganizationEditorFormStyles();

  const requiredProps = {
    required: true,
    inputProps: { 'aria-required': true }
  };

  return (
    <Container className={classes.root} role="form" maxWidth="sm">
      <Typography>
        <Link href={props.paths.cancel}>{props.messages.cancel}</Link>
      </Typography>

      <TextField
        id="organization-name-input"
        label={props.messages.name}
        value={values.name}
        onChange={changeHandler('name')}
        {...requiredProps}
      />

      <TextField
        id="organization-website-input"
        label={props.messages.website}
        value={values.website}
        onChange={changeHandler('website')}
        {...requiredProps}
      />

      <TextField
        id="organization-short-description-input"
        label={props.messages.shortDescription}
        value={values.shortDescription}
        onChange={changeHandler('shortDescription')}
        {...requiredProps}
      />

      <TextField
        id="organization-long-description-input"
        label={props.messages.longDescription}
        value={values.longDescription}
        onChange={changeHandler('longDescription')}
        multiline
        rows={8}
      />

      <Button
        onClick={submit}
        disabled={!isValid || isPending}
        color="primary"
        variant="contained"
      >
        {props.messages.submit}
      </Button>
    </Container>
  )
}
