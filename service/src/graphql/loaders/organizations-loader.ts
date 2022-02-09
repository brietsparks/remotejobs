import Dataloader from 'dataloader';

import { OrganizationsProvider, Organization } from '../../providers';

export interface OrganizationsLoader {
  getOrganizationsByIds: Dataloader<string, Organization>;
}

export const makeOrganizationsLoader = (provider: OrganizationsProvider): OrganizationsLoader => {
  const getOrganizationsByIds = async (ids: ReadonlyArray<string>) => {
    const organizations = await provider.getOrganizationsByIds(ids as string[]);

    const organizationsById: Record<string, Organization> = {};
    for (const organization of organizations) {
      organizationsById[organization.id] = organization;
    }

    return ids.map(id => organizationsById[id]);
  };

  return {
    getOrganizationsByIds: new Dataloader(getOrganizationsByIds)
  };
};
