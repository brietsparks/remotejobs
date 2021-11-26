import Dataloader from 'dataloader';

import { OrganizationsProvider } from '../../providers';
import { Organization } from '../schema';

export interface OrganizationsLoader {
  getOrganization: Dataloader<string, Organization>;
}

export const makeOrganizationsLoader = (provider: OrganizationsProvider): OrganizationsLoader => {
  const getOrganization = async (ids: ReadonlyArray<string>) => {
    const organizations = await provider.getOrganizations(ids as string[]);
    return ids.map(id => organizations.find(organization => organization.id === id));
  };

  return {
    getOrganization: new Dataloader(getOrganization)
  };
};