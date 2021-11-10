import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';

import { Job } from '../../domain';

import { useJobSplashStyles } from './job-splash.styles';

export interface JobSplashProps {
  data: JobSplashData;
  paths: JobSplashPaths;
}

export type JobSplashData = Job & {
  organizationName: string;
}

export interface JobSplashPaths {
  organization: string;
}

export function JobSplash(props: JobSplashProps) {
  const classes = useJobSplashStyles();

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
