import Dataloader from 'dataloader';

import { OrganizationsProvider, Organization } from '../../providers';

export interface OrganizationsLoader {
  getOrganizationsByIds: Dataloader<string, Organization>;
}

export const makeOrganizationsLoader = (provider: OrganizationsProvider): OrganizationsLoader => {
  const getOrganizationsByIds = async (ids: ReadonlyArray<string>) => {
    const organizations = await provider.getOrganizationsByIds(ids as string[]);
    return ids.map(id => organizations.find(organization => organization.id === id));
  };

  return {
    getOrganizationsByIds: new Dataloader(getOrganizationsByIds)
  };
};
