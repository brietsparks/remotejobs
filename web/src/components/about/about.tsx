import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';

import { useAboutStyles } from './about.styles';

export interface AboutProps {
}

export function About(props: AboutProps) {
  const classes = useAboutStyles();

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h4">About</Typography>

      <Typography>
        <Link href="https://github.com/brietsparks/remotejobs" target="_blank">
          https://github.com/brietsparks/remotejobs
          <OpenInNewIcon fontSize="small" className={classes.linkIcon} />
        </Link>
      </Typography>

      <Typography>A full-stack code-kata app that explores practices for layered and scalable application code.</Typography>
      <br/>
      <Typography>Backend: TypeScript, Apollo Server, Graphql, Knex, Postgres</Typography>
      <Typography>Frontend: TypeScript, React, Nextjs, Material UI, JSS</Typography>
    </Container>
  )
}
