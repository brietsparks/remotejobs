import React from 'react';
import { Typography, Link } from '@material-ui/core';

import { Organization } from '../../domain';

import { useOrganizationSplashStyles } from './organization-splash.styles';

export interface OrganizationSplashProps {
  organization: Organization;
}

export function OrganizationSplash(props: OrganizationSplashProps) {
  const classes = useOrganizationSplashStyles();

  return (
    <div className={classes.root}>
      <Typography>
        {props.organization.name}
      </Typography>

      <Typography>
        <Link href={props.organization.website}>
          {props.organization.website}
        </Link>
      </Typography>

      <Typography>
        {props.organization.shortDescription}
      </Typography>

      <Typography>
        {props.organization.longDescription}
      </Typography>
    </div>
  )
}
