import faker from 'faker';

export const mockJobData = () => {
  return {
    id: Math.random().toString(),
    organizationName: faker.company.companyName(),
    organizationId: 'organizationId',
    title: faker.name.jobTitle(),
    shortDescription: faker.lorem.sentence(),
    longDescription: faker.lorem.paragraphs(4)
  }
}
