import React from 'react';
import { Typography } from '@material-ui/core';

import { Job } from '../../domain';

import { useJobSplashStyles } from './job-splash.styles';

export interface JobSplashProps {
  job: Job;
}

export function JobSplash(props: JobSplashProps) {
  const classes = useJobSplashStyles();

  return (
    <div className={classes.root}>
      <Typography>
        {props.job.title}
      </Typography>

      <Typography>
        {props.job.shortDescription}
      </Typography>

      <Typography>
        {props.job.longDescription}
      </Typography>
    </div>
  )
}
