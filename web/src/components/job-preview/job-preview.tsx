import React from 'react';
import { Typography, Button } from '@material-ui/core';

import { Job } from '../../domain';

export interface JobPreviewProps {
  job: Omit<Job, 'longDescription'>;
  onClick?: () => void;
  messages: JobPreviewMessages;
}

export interface JobPreviewMessages {
  view: string;
}

export function JobPreview(props: JobPreviewProps) {
  return (
    <div>
      <Typography>
        {props.job.title}
      </Typography>

      <Typography>
        {props.job.shortDescription}
      </Typography>

      <Button onClick={props.onClick}>{props.messages.view}</Button>
    </div>
  );
}
