import { Knex } from 'knex';

export function up(knex: Knex) {
  return knex.schema
    .createTable('organizations', table => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.string('website').notNullable();
      table.string('short_description', 100).notNullable();
      table.text('long_description');
    })
    .createTable('jobs', table => {
      table.uuid('id').primary();
      table.uuid('organization_id').notNullable();
      table.string('title').notNullable();
      table.string('short_description').notNullable();
      table.text('long_description');

      table.foreign('organization_id');
    })
}

export function down(knex: Knex) {
  return knex.schema
    .dropTable('jobs')
    .dropTable('organizations');
}
