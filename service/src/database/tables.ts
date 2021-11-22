import { table } from './util';

export const organizationsTable = table('organizations', {
  id: 'id',
  name: 'name',
  shortDescription: 'short_description',
  longDescription: 'long_description',
  website: 'website',
});

export const jobsTable = table('jobs', {
  id: 'id',
  organizationId: 'organization_id',
  title: 'title',
  shortDescription: 'short_description',
  longDescription: 'long_description',
});
