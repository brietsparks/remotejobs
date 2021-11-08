import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

import { useInfiniteLoad } from '../../hooks';
import { CursorPaginationResult } from '../../util';
import { JobPreview, JobPreviewMessages, JobPreviewData } from '../job-preview';

import { useJobsListStyles } from './jobs-list.styles';

export interface JobsListProps {
  data?: JobsListData;
  getJobs: (cursor: string) => Promise<CursorPaginationResult<JobsListItem>>;
  messages: JobsListMessages;
  paths: JobsListPaths;
  showOrganizationName: boolean;
}

export type JobsListData = Partial<CursorPaginationResult<JobsListItem>>;

export type JobsListItem = JobPreviewData & {
  id: string;
  organizationId: string;
};

export type JobsListMessages = JobPreviewMessages;

export interface JobsListPaths {
  organization: (id: string) => string;
  job: (id: string) => string;
}

export function JobsList(props: JobsListProps) {
  const { items: jobs, isPending, hasMore, loadMore } = useInfiniteLoad<JobsListItem>({
    items: props.data?.items,
    cursor: props.data?.cursor,
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
              organization: props.paths.organization(data.organizationId),
              job: props.paths.job(data.id)
            }}
            showOrganizationName={props.showOrganizationName}
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
