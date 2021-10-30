import React, { ReactNode } from 'react';
import { Typography, Link } from '@material-ui/core';

import { Organization } from '../../domain';

import { useOrganizationSplashStyles } from './organization-splash.styles';

export interface OrganizationSplashProps {
  data: Organization;
  jobsList?: ReactNode;
  messages: OrganizationSplashMessages;
}

export interface OrganizationSplashMessages {
  jobs: string
}

export function OrganizationSplash(props: OrganizationSplashProps) {
  const classes = useOrganizationSplashStyles();

  return (
    <div className={classes.root}>
      <Typography>
        {props.data.name}
      </Typography>

      <Typography>
        <Link href={props.data.website}>
          {props.data.website}
        </Link>
      </Typography>

      <Typography>
        {props.data.shortDescription}
      </Typography>

      <Typography>
        {props.data.longDescription}
      </Typography>

      {props.jobsList && (
        <div>
          <Typography>{props.messages.jobs}</Typography>
          {props.jobsList}
        </div>
      )}
    </div>
  )
}
