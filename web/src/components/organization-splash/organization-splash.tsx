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
  jobs: string;
  longDescriptionHeading: string;
  nameLabel: string;
  websiteLabel: string;
  shortDescriptionLabel: string;
}

export function OrganizationSplash(props: OrganizationSplashProps) {
  const classes = useOrganizationSplashStyles();

  return (
    <div className={classes.root}>
      <Typography component="h1" aria-label={props.messages.nameLabel}>
        {props.data.name}
      </Typography>

      <Typography aria-label={props.messages.websiteLabel}>
        <Link href={props.data.website}>
          {props.data.website}
        </Link>
      </Typography>

      <Typography aria-label={props.messages.shortDescriptionLabel}>
        {props.data.shortDescription}
      </Typography>

      <div aria-labelledby="long-description-heading">
        <Typography component="h2" id="long-description-heading">{props.messages.longDescriptionHeading}</Typography>
        <Typography>
          {props.data.longDescription}
        </Typography>
      </div>

      {props.jobsList && (
        <div aria-labelledby="jobs-list-heading">
          <Typography component="h2" id="jobs-list-heading">{props.messages.jobs}</Typography>

          {props.jobsList}
        </div>
      )}
    </div>
  )
}
