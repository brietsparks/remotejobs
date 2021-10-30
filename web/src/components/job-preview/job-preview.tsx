import React from 'react';
import { Typography, Button } from '@material-ui/core';

export interface JobPreviewProps {
  data: JobPreviewData;
  onClick?: () => void;
  messages: JobPreviewMessages;
}

export interface JobPreviewData {
  organizationName: string;
  title: string;
  shortDescription: string;
}

export interface JobPreviewMessages {
  view: string;
}

export function JobPreview(props: JobPreviewProps) {
  return (
    <div>
      <Typography>
        {props.data.title}
      </Typography>

      <Typography>
        {props.data.organizationName}
      </Typography>

      <Typography>
        {props.data.shortDescription}
      </Typography>

      <Button onClick={props.onClick}>{props.messages.view}</Button>
    </div>
  );
}
