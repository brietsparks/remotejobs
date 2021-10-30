import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

import { Organization } from '../../domain';
import { useInfiniteLoad } from '../../hooks';
import { CursorPaginationResult } from '../../util';
import { OrganizationPreview, OrganizationPreviewMessages } from '../organization-preview';

import { useOrganizationsListStyles } from './organizations-list.styles';

export interface OrganizationsListProps {
  organizations?: OrganizationListItem[];
  cursor?: string;
  getOrganizations: (cursor: string) => Promise<CursorPaginationResult<OrganizationListItem>>;
  messages: OrganizationsListMessages;
  onClickOrganization: (id: string) => void;
}

export type OrganizationListItem =
  Omit<Organization, 'longDescription'> & {
  jobsCount: number;
};

export type OrganizationsListMessages = OrganizationPreviewMessages;

export function OrganizationsList(props: OrganizationsListProps) {
  const { items: organizations, isPending, hasMore, loadMore } = useInfiniteLoad<OrganizationListItem>({
    initialItems: props.organizations,
    initialCursor: props.cursor,
    getItems: props.getOrganizations
  });

  const [endRef, endInView] = useInView();

  useEffect(() => {
    if (!isPending && hasMore && endInView) {
      loadMore();
    }
  }, [endInView, hasMore, isPending, loadMore]);


  const classes = useOrganizationsListStyles();

  const { ...organizationPreviewMessages } = props.messages;

  return (
    <div>
      {organizations.map(({ jobsCount, ...organization }) => (
        <div key={organization.id}>
          <OrganizationPreview
            organization={organization}
            jobsCount={jobsCount}
            messages={organizationPreviewMessages}
            onClick={() => props.onClickOrganization(organization.id)}
          />
        </div>
      ))}

      {isPending && (
        <div className={classes.spinnerContainer}>
          <CircularProgress />
        </div>
      )}

      <div ref={endRef} className={classes.loadingTrigger} />
    </div>
  )
}
