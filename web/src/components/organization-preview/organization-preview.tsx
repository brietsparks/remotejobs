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
}

export interface OrganizationPreviewMessages {
  jobsCount?: string;
  view: string;
}

export interface OrganizationPreviewPaths {
  view: string;
}

export function OrganizationPreview(props: OrganizationPreviewProps) {
  const classes = useOrganizationPreviewStyles();

  return (
    <Card variant="elevation">
      <CardContent>
        <Typography variant="h2" className={classes.name}>
          {props.data.name}
        </Typography>

        <Typography>
          {props.data.shortDescription}
        </Typography>

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
