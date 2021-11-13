import React from 'react';
import { Typography, Link } from '@material-ui/core';

import { useLogoStyles } from './logo.styles';

export interface LogoProps {
}

export function Logo(props: LogoProps) {
  const classes = useLogoStyles();
  return (
    <Typography>
      <Link href="/" className={classes.link}>
        Remote Jobs
      </Link>
    </Typography>
  );
}
