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
  titleLabel: string;
  organizationNameLabel?: string;
  shortDescriptionLabel: string;
  viewLabel: (data: JobPreviewData) => string;
}

export interface JobPreviewPaths {
  organization: string;
  job: string;
}

export function JobPreview(props: JobPreviewProps) {
  return (
    <div>
      <Typography aria-label={props.messages.titleLabel} component="h3">
        {props.data.title}
      </Typography>

      {props.showOrganizationName && (
        <Typography>
          <Link href={props.paths.organization} aria-label={props.messages.organizationNameLabel}>
            {props.data.organizationName}
          </Link>
        </Typography>
      )}

      <Typography aria-label={props.messages.shortDescriptionLabel}>
        {props.data.shortDescription}
      </Typography>

      <Typography>
        <Link href={props.paths.job} aria-label={props.messages.viewLabel(props.data)}>
          {props.messages.view}
        </Link>
      </Typography>
    </div>
  );
}
