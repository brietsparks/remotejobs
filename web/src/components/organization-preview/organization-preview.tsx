import React from 'react';
import { Typography, Button } from '@material-ui/core';

export interface OrganizationPreviewProps {
  data: OrganizationPreviewData;
  onClick?: () => void;
  messages: OrganizationPreviewMessages;
}

export interface OrganizationPreviewData {
  name: string;
  shortDescription: string;
  website: string;
  jobsCount?: number;
}

export interface OrganizationPreviewMessages {
  jobsCount: (count: number) => string;
  view: string;
}

export function OrganizationPreview(props: OrganizationPreviewProps) {
  return (
    <div>
      <Typography>
        {props.data.name}
      </Typography>

      <Typography>
        {props.data.website}
      </Typography>

      <Typography>
        {props.data.shortDescription}
      </Typography>

      {props.data.jobsCount && (
        <Typography>{props.messages.jobsCount(props.data.jobsCount)}</Typography>
      )}

      <Button onClick={props.onClick}>{props.messages.view}</Button>
    </div>
  );
}
