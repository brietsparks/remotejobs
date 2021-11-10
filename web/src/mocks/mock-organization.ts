import faker from 'faker';

export const mockOrganizationData = () => {
  return {
    id: Math.random().toString(),
    name: faker.company.companyName(),
    website: faker.internet.url(),
    shortDescription: `${faker.company.catchPhrase()}`,
    longDescription: `${faker.lorem.paragraphs(2)}`,
    jobsCount: 0
  }
}
