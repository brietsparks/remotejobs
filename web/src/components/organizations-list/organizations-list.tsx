import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

import { useInfiniteLoad } from '../../hooks';
import { CursorPaginationResult } from '../../util';
import { OrganizationPreview, OrganizationPreviewData, OrganizationPreviewMessages } from '../organization-preview';

import { useOrganizationsListStyles } from './organizations-list.styles';

export interface OrganizationsListProps {
  data?: OrganizationsListData;
  getOrganizations: (cursor: string) => Promise<CursorPaginationResult<OrganizationsListItem>>;
  messages: OrganizationsListMessages;
  paths: OrganizationsListPaths
}

export type OrganizationsListData = Partial<CursorPaginationResult<OrganizationsListItem>>;

export type OrganizationsListItem = OrganizationPreviewData & {
  id: string;
  jobsCount: number;
};

export type OrganizationsListMessages = {
  jobsCount: (count: number) => string|undefined;
  view: string;
};

export interface OrganizationsListPaths {
  view: (id: string) => string;
}

export function OrganizationsList(props: OrganizationsListProps) {
  const { items: organizations, isPending, hasMore, loadMore } = useInfiniteLoad<OrganizationsListItem>({
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
      {organizations.map((data) => (
        <div key={data.id} className={classes.item}>
          <OrganizationPreview
            data={data}
            messages={{
              jobsCount: props.messages.jobsCount(data.jobsCount),
              view: props.messages.view
            }}
            paths={{
              view: props.paths.view(data.id)
            }}
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
