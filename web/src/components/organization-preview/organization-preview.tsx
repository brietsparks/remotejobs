import React from 'react';
import { Card, CardContent, CardActions, Typography, Link } from '@material-ui/core';

import { useOrganizationPreviewStyles } from './organization-preview.styles';

export interface OrganizationPreviewProps {
  data: OrganizationPreviewData;
  onClick?: () => void;
  messages: OrganizationPreviewMessages;
  paths: OrganizationPreviewPaths;
}

export interface OrganizationPreviewData {
  name: string;
  shortDescription: string;
  recentJobs?: {
    id: string;
    title: string;
  }[];
}

export interface OrganizationPreviewMessages {
  jobsCount?: string;
  recentJobs: string;
  view: string;
}

export interface OrganizationPreviewPaths {
  view: string;
  viewJob: (jobId: string) => string;
}

export function OrganizationPreview(props: OrganizationPreviewProps) {
  const classes = useOrganizationPreviewStyles();

  return (
    <Card variant="elevation">
      <CardContent>
        <Typography component="h2" className={classes.name}>
          {props.data.name}
        </Typography>

        <Typography>
          {props.data.shortDescription}
        </Typography>

        <div className={classes.recentJobs}>
          <Typography>
            {props.messages.recentJobs}
          </Typography>
          {props.data.recentJobs?.map(job => (
            <Typography key={job.id}>
              <Link href={props.paths.viewJob(job.id)}>
                {job.title}
              </Link>
            </Typography>
          ))}
        </div>

        <CardActions className={classes.actions}>
          <Typography>
            <Link href={props.paths.view}>
              {props.messages.view}
            </Link>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
}
