import React from 'react';
import { Typography, Link } from '@material-ui/core';

export interface JobPreviewProps {
  data: JobPreviewData;
  onClick?: () => void;
  messages: JobPreviewMessages;
  paths: JobPreviewPaths;
  showOrganizationName: boolean;
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
  organization: string;
  job: string;
}

export function JobPreview(props: JobPreviewProps) {
  return (
    <div>
      <Typography>
        {props.data.title}
      </Typography>

      {props.showOrganizationName && (
        <Typography>
          <Link href={props.paths.organization}>
            {props.data.organizationName}
          </Link>
        </Typography>
      )}

      <Typography>
        {props.data.shortDescription}
      </Typography>

      <Typography>
        <Link href={props.paths.job}>
          {props.messages.view}
        </Link>
      </Typography>
    </div>
  );
}
