import { Knex } from 'knex';
import { v4 as uuid } from 'uuid';

import { organizationsTable } from '../database';

import { CursorPaginationParams, CursorPagination } from './pagination';

export interface CreateOrganizationParams {
  name: string;
  website: string;
  shortDescription: string;
  longDescription?: string;
}

export interface GetOrganizationsParams {
  pagination: CursorPaginationParams;
}

export class OrganizationsProvider {
  constructor(
    private client: Knex,
  ) {}

  createOrganization = async (params: CreateOrganizationParams) => {
    const id = uuid();

    await this.client
      .into(organizationsTable.name)
      .insert({
        [organizationsTable.columns.id]: id,
        [organizationsTable.columns.name]: params.name,
        [organizationsTable.columns.website]: params.website,
        [organizationsTable.columns.shortDescription]: params.shortDescription,
        [organizationsTable.columns.longDescription]: params.longDescription
      });

    return { id };
  }

  getOrganizations = async (params: GetOrganizationsParams) => {
    const query = this.client
      .from(organizationsTable.name)
      .select(organizationsTable.columns)

    return new CursorPagination(params.pagination, {
      appField: 'creationTimestamp',
      dbField: organizationsTable.columns.creationTimestamp,
    }).retrievePaginatedItems(query);
  }

  getOrganizationsByIds = async (ids: string[]) => {
    return this.client
      .from(organizationsTable.name)
      .select(organizationsTable.columns)
      .whereIn(organizationsTable.columns.id, ids);
  }
}
