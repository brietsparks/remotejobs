import { Knex } from 'knex';

export function up(knex: Knex) {
  return knex.schema
    .createTable('organizations', table => {
      table.uuid('id').primary();
    })
    .createTable('jobs', table => {
      table.uuid('id').primary();
      table.foreign('organization_id')
    })
}

export function down(knex: Knex) {
  return knex.schema
    .dropTable('jobs')
    .dropTable('organizations');
}
