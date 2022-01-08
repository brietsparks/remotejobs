import { Knex } from 'knex';
import faker from 'faker';

import { Providers } from '../providers';

const ORGANIZATIONS_COUNT = 20;
const MAX_JOBS_PER_ORG = 40;

export async function runFixtures(knex: Knex, providers: Providers) {
  await knex.migrate.down();
  await knex.migrate.up();

  for (let o = 0; o < ORGANIZATIONS_COUNT; o++) {
    const { id: organizationId } = await providers.organizationsProvider.createOrganization({
      name: faker.company.companyName(),
      website: faker.internet.url(),
      shortDescription: (`${faker.company.catchPhrase()}. ${faker.lorem.sentences(2)}`).substring(0, 100),
      longDescription: faker.lorem.paragraphs(5),
    });

    const jobsCount = Math.floor(Math.random() * (MAX_JOBS_PER_ORG + 1))

    for (let j = 0; j < jobsCount; j++) {
      await providers.jobsProvider.createJob({
        organizationId,
        title: faker.name.jobTitle(),
        shortDescription: faker.lorem.sentence().substring(0, 100),
        longDescription: faker.lorem.paragraphs(5)
      });
    }
  }
}
