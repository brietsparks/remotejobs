import { Knex } from 'knex';

import { OrganizationsProvider } from './organizations-provider';

export interface Providers {
  organizationsProvider: OrganizationsProvider;
}

export function makeProviders(knex: Knex) {
  return {
    organizationsProvider: new OrganizationsProvider(knex)
  }
}
