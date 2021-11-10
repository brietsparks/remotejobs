import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';

import { Job } from '../../domain';

import { useJobDetailsStyles } from './job-details.styles';

export interface JobDetailsProps {
  data: JobDetailsData;
  paths: JobDetailsPaths;
}

export type JobDetailsData = Job & {
  organizationName: string;
}

export interface JobDetailsPaths {
  organization: string;
}

export function JobDetails(props: JobDetailsProps) {
  const classes = useJobDetailsStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <header>
        <Typography component="h1" className={classes.title}>
          {props.data.title}
        </Typography>

        <Typography>
          <Link href={props.paths.organization}>
            {props.data.organizationName}
          </Link>
        </Typography>
      </header>

      <Typography>
        {props.data.shortDescription}
      </Typography>

      <Typography>
        {props.data.longDescription}
      </Typography>
    </Container>
  )
}
