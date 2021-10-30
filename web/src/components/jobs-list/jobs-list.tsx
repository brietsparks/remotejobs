import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

import { useInfiniteLoad } from '../../hooks';
import { CursorPaginationResult } from '../../util';
import { JobPreview, JobPreviewMessages, JobPreviewData } from '../job-preview';

import { useJobsListStyles } from './jobs-list.styles';

export interface JobsListProps {
  jobs?: JobListItem[];
  cursor?: string;
  getJobs: (cursor: string) => Promise<CursorPaginationResult<JobListItem>>;
  messages: JobsListMessages;
  onClickJob: (id: string) => void;
}

export type JobListItem = JobPreviewData & {
  id: string;
};

export type JobsListMessages = JobPreviewMessages;

export function JobsList(props: JobsListProps) {
  const { items: jobs, isPending, hasMore, loadMore } = useInfiniteLoad<JobListItem>({
    initialItems: props.jobs,
    initialCursor: props.cursor,
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
    <div>
      {jobs.map((data) => (
        <div key={data.id}>
          <JobPreview
            data={data}
            messages={jobPreviewMessages}
            onClick={() => props.onClickJob(data.id)}
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
