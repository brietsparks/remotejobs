import React from 'react';
import { Card, CardContent, CardActions, Typography, Link } from '@material-ui/core';

import { useJobPreviewStyles } from './job-preview.styles';

export interface JobPreviewProps {
  data: JobPreviewData;
  onClick?: () => void;
  messages: JobPreviewMessages;
  paths: JobPreviewPaths;
}

export interface JobPreviewData {
  organizationName: string;
  title: string;
  shortDescription: string;
}

export interface JobPreviewMessages {
  view: string;
}

export interface JobPreviewPaths {
  organization?: string;
  job: string;
}

export function JobPreview(props: JobPreviewProps) {
  const classes = useJobPreviewStyles();

  return (
    <Card variant="elevation">
      <CardContent>
        <Typography component="h3" className={classes.title}>
          {props.data.title}
        </Typography>

        {props.paths.organization && (
          <Typography>
            <Link href={props.paths.organization}>
              {props.data.organizationName}
            </Link>
          </Typography>
        )}

        <Typography>
          {props.data.shortDescription}
        </Typography>

        <CardActions className={classes.actions}>
          <Typography>
            <Link href={props.paths.job}>
              {props.messages.view}
            </Link>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
}
