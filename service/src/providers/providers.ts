import { Knex } from 'knex';

import { OrganizationsProvider } from './organizations-provider';
import { JobsProvider } from './jobs-provider';

export interface Providers {
  organizationsProvider: OrganizationsProvider;
  jobsProvider: JobsProvider;
}

export function makeProviders(knex: Knex) {
  return {
    organizationsProvider: new OrganizationsProvider(knex),
    jobsProvider: new JobsProvider(knex)
  }
}
