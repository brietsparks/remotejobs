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
};

export type JobsCountOfOrganization = {
  organizationId: string;
  count: number;
};

export interface CreateJobParams {
  organizationId: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
}

export interface UpdateJobParams {
  id: string;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
}

export interface GetJobsParams {
  pagination: CursorPaginationParams;
}

export interface GetJobsOfOrganizationParams {
  organizationId: string;
  pagination: CursorPaginationParams;
}

export interface GetRecentJobsOfOrganization {
  organizationIds: string[];
  limit?: number;
}

export const MAX_RECENT_JOBS_LIMIT = 10;
export const DEFAULT_RECENT_JOBS_LIMIT = 3;

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

  updateJob = async (params: UpdateJobParams) => {
    await this.client
      .into(jobsTable.name)
      .update({
        [jobsTable.columns.title]: params.title,
        [jobsTable.columns.shortDescription]: params.shortDescription,
        [jobsTable.columns.longDescription]: params.longDescription
      })
      .where({ [jobsTable.columns.id]: params.id })

    return { id: params.id };
  }

  getJob = async (id: string) => {
    return this.client
      .from(jobsTable.name)
      .select(jobsTable.columns)
      .where({ [jobsTable.columns.id]: id })
      .first();
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

  getJobsOfOrganization = async (params: GetJobsOfOrganizationParams) => {
    const query = this.client
      .from(jobsTable.name)
      .select(jobsTable.columns)
      .where({ [jobsTable.columns.organizationId]: params.organizationId })

    return new CursorPagination<Job>(params.pagination, {
      getCursor: job => job.creationTimestamp.getTime().toString(),
      cursorColumn: jobsTable.columns.creationTimestamp,
    }).retrievePaginatedItems(query);
  }

  getRecentJobsOfOrganizations = async (params: GetRecentJobsOfOrganization): Promise<Job[]> => {
    let limit = DEFAULT_RECENT_JOBS_LIMIT;
    if (params.limit) {
      limit = params.limit > MAX_RECENT_JOBS_LIMIT ? MAX_RECENT_JOBS_LIMIT : params.limit;
    }

    return this.client.unionAll(params.organizationIds.map(
      organizationId => this.client
        .from(jobsTable.name)
        .select(jobsTable.columns)
        .where({ [jobsTable.columns.organizationId]: organizationId })
        .orderBy(jobsTable.columns.creationTimestamp, 'desc')
        .limit(limit)
    ), true);
  }

  getJobsCountsOfOrganizations = async (ids: string[]): Promise<JobsCountOfOrganization[]> => {
    const rows = await this.client
      .from(jobsTable.name)
      .select({
        organizationId: jobsTable.columns.organizationId,
        count: this.client.raw('count(*)')
      })
      .groupBy(jobsTable.columns.organizationId)
      .whereIn(jobsTable.columns.organizationId, ids);

    return rows.map(row => ({
      ...row,
      count: parseInt(row.count)
    }));
  };
}
