import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import { Button, Link } from '@material-ui/core';

import { useInfiniteLoad } from '../../hooks';
import { CursorPaginationResult } from '../../util';
import { OrganizationPreview, OrganizationPreviewData } from '../organization-preview';

import { useOrganizationsListStyles } from './organizations-list.styles';

export interface OrganizationsListProps {
  data?: PaginatedOrganizations;
  getOrganizations: (cursor?: string) => Promise<CursorPaginationResult<OrganizationsListItem>>;
  messages: OrganizationsListMessages;
  paths: OrganizationsListPaths
}

export type PaginatedOrganizations = CursorPaginationResult<OrganizationsListItem>;

export type OrganizationsListItem = OrganizationPreviewData & {
  id: string;
  jobsCount: number;
};

export type OrganizationsListMessages = {
  jobsCount: (count: number) => string|undefined;
  recentJobs: string;
  view: string;
  create: string;
};

export interface OrganizationsListPaths {
  view: (id: string) => string;
  viewJob: (jobId: string) => string;
  create: string;
}

export function OrganizationsList(props: OrganizationsListProps) {
  const { items: organizations, isPending, isRejected, hasMore, loadMore } = useInfiniteLoad<OrganizationsListItem>({
    ...props.data,
    getItems: props.getOrganizations
  });

  const [endRef, endInView] = useInView();

  useEffect(() => {
    if (!isPending && hasMore && endInView) {
      loadMore();
    }
  }, [endInView, hasMore, isPending, loadMore]);


  const classes = useOrganizationsListStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        href={props.paths.create}
        className={classes.createLink}
      >
        {props.messages.create}
      </Button>

      {organizations.map((data) => (
        <div key={data.id} className={classes.item}>
          <OrganizationPreview
            data={data}
            messages={{
              jobsCount: data.jobsCount ? props.messages.jobsCount(data.jobsCount) : undefined,
              recentJobs: props.messages.recentJobs,
              view: props.messages.view
            }}
            paths={{
              view: props.paths.view(data.id),
              viewJob: props.paths.viewJob
            }}
          />
        </div>
      ))}

      {isPending && (
        <div className={classes.spinnerContainer}>
          <CircularProgress />
        </div>
      )}

      {!isPending && !isRejected && (
        <div ref={endRef} className={classes.loadingTrigger}/>
      )}
    </div>
  )
}
