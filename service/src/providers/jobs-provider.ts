import { Knex } from 'knex';
import { v4 as uuid } from 'uuid';

import { jobsTable } from '../database';

export interface CreateJobParams {
  organizationId: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
}

export interface GetJobsParams {
  // todo: pagination params
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
    return this.client
      .from(jobsTable.name)
      .select(jobsTable.columns);
  }
}
