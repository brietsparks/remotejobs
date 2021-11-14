import React, { ReactNode } from 'react';
import { Container, Typography, Link, Button } from '@material-ui/core';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';

import { Organization } from '../../domain';

import { useOrganizationDetailsStyles } from './organization-details.styles';

export interface OrganizationDetailsProps {
  data: Organization;
  jobsList?: ReactNode;
  messages: OrganizationDetailsMessages;
  paths: OrganizationDetailsPaths;
}

export interface OrganizationDetailsMessages {
  edit: string;
  jobs: string;
  createJob: string;
}

export interface OrganizationDetailsPaths {
  edit: string;
  createJob: string;
}

export function OrganizationDetails(props: OrganizationDetailsProps) {
  const classes = useOrganizationDetailsStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <header className={classes.header}>
        <div>
          <Typography component="h1" className={classes.name}>
            {props.data.name}
          </Typography>
          <Typography className={classes.shortDescription}>
            {props.data.shortDescription}
          </Typography>
          <Typography>
            <Link href="#">
              {props.data.website} <OpenInNewIcon fontSize="small" className={classes.linkIcon} />
            </Link>
          </Typography>
        </div>

        <div>
          <Button
            href={props.paths.edit}
            className={classes.editLink}
            variant="contained"
            color="primary"
          >
            {props.messages.edit}
          </Button>
        </div>
      </header>

      <Typography className={classes.longDescription}>
        {props.data.longDescription}
      </Typography>

      {props.jobsList && (
        <div>
          <div className={classes.jobsHeader}>
            <Typography
              component="h2"
              className={classes.jobsHeading}
            >
              {props.messages.jobs}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              href={props.paths.createJob}
              className={classes.createJobLink}
            >
              {props.messages.createJob}
            </Button>
          </div>

          {props.jobsList}
        </div>
      )}
    </Container>
  )
}
