import React from 'react';
import { Container, Typography, Link, Button } from '@material-ui/core';

import { Job } from '../../domain';

import { useJobDetailsStyles } from './job-details.styles';

export interface JobDetailsProps {
  data: JobDetailsData;
  messages: JobDetailsMessages;
  paths: JobDetailsPaths;
}

export type JobDetailsData = Job & {
  organizationName: string;
}

export interface JobDetailsMessages {
  edit: string;
}

export interface JobDetailsPaths {
  organization: string;
  edit: string;
}

export function JobDetails(props: JobDetailsProps) {
  const classes = useJobDetailsStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <header className={classes.header}>
        <div>
          <Typography component="h1" className={classes.title}>
            {props.data.title}
          </Typography>

          <Typography>
            <Link href={props.paths.organization}>
              {props.data.organizationName}
            </Link>
          </Typography>
        </div>

        <div>
          <Button
            href={props.paths.edit}
            className={classes.editLink}
            variant="contained"
            color="primary"
          >
            {props.messages.edit}
          </Button>
        </div>
      </header>

      <Typography>
        {props.data.shortDescription}
      </Typography>

      <Typography>
        {props.data.longDescription}
      </Typography>
    </Container>
  );
}
