import React from 'react';
import { Typography, Link } from '@material-ui/core';

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
  return (
    <div>
      <Typography>
        {props.data.name}
      </Typography>

      <Typography>
        {props.data.shortDescription}
      </Typography>

      {props.messages.jobsCount && (
        <Typography>{props.messages.jobsCount}</Typography>
      )}

      <Typography>
        <Link href={props.paths.view}>
          {props.messages.view}
        </Link>
      </Typography>
    </div>
  );
}
