import { Typography, Button } from '@material-ui/core';

import { Organization } from '../../domain';
import React from 'react';

export interface OrganizationPreviewProps {
  organization: Omit<Organization, 'longDescription'>;
  jobsCount?: number;
  onClick?: () => void;
  messages: OrganizationPreviewMessages;
}

export interface OrganizationPreviewMessages {
  jobsCount: (count: number) => string;
  view: string;
}

export function OrganizationPreview(props: OrganizationPreviewProps) {
  return (
    <div>
      <Typography>
        {props.organization.name}
      </Typography>

      <Typography>
        {props.organization.website}
      </Typography>

      <Typography>
        {props.organization.shortDescription}
      </Typography>

      {props.jobsCount && (
        <Typography>{props.messages.jobsCount(props.jobsCount)}</Typography>
      )}

      <Button onClick={props.onClick}>{props.messages.view}</Button>
    </div>
  );
}
