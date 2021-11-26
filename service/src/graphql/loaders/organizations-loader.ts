import Dataloader from 'dataloader';

import { Providers } from '../../providers';
import { Organization } from '../schema';

export interface OrganizationsLoader {
  getOrganization: Dataloader<string, Organization>;
}

export const makeOrganizationsLoader = (providers: Providers): OrganizationsLoader => {
  const getOrganization = async (ids: ReadonlyArray<string>) => {
    const organizations = await providers.organizationsProvider.getOrganizations(ids as string[]);
    return ids.map(id => organizations.find(organization => organization.id === id));
  };

  return {
    getOrganization: new Dataloader(getOrganization)
  };
};
