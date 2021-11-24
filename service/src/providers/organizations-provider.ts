import { Knex } from 'knex';
import { v4 as uuid } from 'uuid';

import { organizationsTable } from '../database';

export interface CreateOrganizationParams {
  name: string;
  website: string;
  shortDescription: string;
  longDescription?: string;
}

export class OrganizationsProvider {
  constructor(
    private client: Knex,
  ) {}

  createOrganization = async (params: CreateOrganizationParams) => {
    const id = uuid();

    this.client
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
}
