import { Knex } from 'knex';
import { v4 as uuid } from 'uuid';

import { jobsTable } from '../database';

import { CursorPagination, CursorPaginationParams } from './pagination';

export type Job = {
  id: string;
  creationTimestamp: Date;
  organizationId: string;
  title: string;
  shortDescription: string;
  longDescription: string;
}

export interface CreateJobParams {
  organizationId: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
}

export interface GetJobsParams {
  pagination: CursorPaginationParams;
}

export class JobsProvider {
  constructor(
    private client: Knex,
  ) {}

  createJob = async (params: CreateJobParams) => {
    const id = uuid();

    await this.client
      .into(jobsTable.name)
      .insert({
        [jobsTable.columns.id]: id,
        [jobsTable.columns.title]: params.title,
        [jobsTable.columns.organizationId]: params.organizationId,
        [jobsTable.columns.shortDescription]: params.shortDescription,
        [jobsTable.columns.longDescription]: params.longDescription
      });

    return { id };
  }

  getJobs = async (params: GetJobsParams) => {
    const query = this.client
      .from(jobsTable.name)
      .select(jobsTable.columns);

    return new CursorPagination<Job>(params.pagination, {
      getCursor: job => job.creationTimestamp.getTime().toString(),
      cursorColumn: jobsTable.columns.creationTimestamp,
    }).retrievePaginatedItems(query);
  }
}
