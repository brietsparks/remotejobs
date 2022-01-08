import React from 'react';
import { Typography } from '@material-ui/core';

export interface AboutProps {
}

export function About(props: AboutProps) {
  return (
    <div>
      <Typography variant="h1">About</Typography>
      <Typography>This is the about page</Typography>
    </div>
  )
}
