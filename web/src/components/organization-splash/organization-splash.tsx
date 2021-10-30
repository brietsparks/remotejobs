import React from 'react';
import { Typography } from '@material-ui/core';

import { Organization } from '../../domain';

import { useOrganizationSplashStyles } from './organization-splash.styles';

export interface OrganizationSplashProps {
  values: Organization;
}

export function OrganizationSplash(props: OrganizationSplashProps) {
  const classes = useOrganizationSplashStyles();

  return (
    <div className={classes.root}>
      <Typography>
        {props.values.name}
      </Typography>

      <Typography>
        {props.values.website}
      </Typography>

      <Typography>
        {props.values.shortDescription}
      </Typography>

      <Typography>
        {props.values.longDescription}
      </Typography>
    </div>
  )
}
