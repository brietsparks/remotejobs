import React, { useEffect } from 'react';
import { Button, Link, CircularProgress } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

import { useInfiniteLoad } from '../../hooks';
import { CursorPaginationResult } from '../../util';
import { JobPreview, JobPreviewMessages, JobPreviewData } from '../job-preview';

import { useJobsListStyles } from './jobs-list.styles';

export interface JobsListProps {
  data?: PaginatedJobs;
  getJobs: GetPaginatedJobs;
  messages: JobsListMessages;
  paths: JobsListPaths;
  showOrganizationName: boolean;
}

export type GetPaginatedJobs = (cursor?: string) => Promise<CursorPaginationResult<JobsListItem>>;

export type PaginatedJobs = Partial<CursorPaginationResult<JobsListItem>>;

export type JobsListItem = JobPreviewData & {
  id: string;
  organizationId: string;
};

export type JobsListMessages = JobPreviewMessages;

export interface JobsListPaths {
  organization?: (id: string) => string;
  job: (id: string) => string;
}

export function JobsList(props: JobsListProps) {
  const { items: jobs, isPending, isRejected, hasMore, loadMore } = useInfiniteLoad<JobsListItem>({
    ...props.data,
    getItems: props.getJobs
  });

  const [endRef, endInView] = useInView();

  useEffect(() => {
    if (!isPending && hasMore && endInView) {
      loadMore();
    }
  }, [endInView, hasMore, isPending, loadMore]);


  const classes = useJobsListStyles();

  const { ...jobPreviewMessages } = props.messages;

  return (
    <div className={classes.root}>
      {jobs.map((data) => (
        <div key={data.id} className={classes.item}>
          <JobPreview
            data={data}
            messages={jobPreviewMessages}
            paths={{
              organization: props.paths.organization?.(data.organizationId),
              job: props.paths.job(data.id)
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
        <div ref={endRef} className={classes.loadingTrigger} />
      )}
    </div>
  )
}
