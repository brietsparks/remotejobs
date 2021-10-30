import React from 'react';
import { Typography } from '@material-ui/core';

import { Job } from '../../domain';

import { useJobSplashStyles } from './job-splash.styles';

export interface JobSplashProps {
  data: JobSplashData;
}

export type JobSplashData = Job & {
  organizationName: string;
}

export function JobSplash(props: JobSplashProps) {
  const classes = useJobSplashStyles();

  return (
    <div className={classes.root}>
      <Typography>
        {props.data.title}
      </Typography>

      <Typography>
        {props.data.organizationName}
      </Typography>

      <Typography>
        {props.data.shortDescription}
      </Typography>

      <Typography>
        {props.data.longDescription}
      </Typography>
    </div>
  )
}
