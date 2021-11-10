import React, { ReactNode } from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';

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
    <Container maxWidth="sm" className={classes.root}>
      <header className={classes.header}>
        <Typography component="h1" className={classes.name}>
          {props.data.name}
        </Typography>
        <Typography className={classes.shortDescription}>
          {props.data.shortDescription}
        </Typography>
        <Typography>
          <Link href={props.data.website} target="_blank">
            {props.data.website} <OpenInNewIcon fontSize="small" className={classes.linkIcon} />
          </Link>
        </Typography>
      </header>

      <Typography>
        {props.data.longDescription}
      </Typography>

      {props.jobsList && (
        <div>
          <Typography
            component="h2"
            className={classes.jobsHeading}
          >
            {props.messages.jobs}
          </Typography>

          {props.jobsList}
        </div>
      )}
    </Container>
  )
}
