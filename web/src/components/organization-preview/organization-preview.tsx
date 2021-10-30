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
  jobsCount?: number;
}

export interface OrganizationPreviewMessages {
  jobsCount: (count: number) => string;
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

      {props.data.jobsCount && (
        <Typography>{props.messages.jobsCount(props.data.jobsCount)}</Typography>
      )}

      <Typography>
        <Link href={props.paths.view}>
          {props.messages.view}
        </Link>
      </Typography>
    </div>
  );
}
