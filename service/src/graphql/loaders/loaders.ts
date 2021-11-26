import { Providers } from '../../providers';

import { OrganizationsLoader, makeOrganizationsLoader } from './organizations-loader';

export interface Loaders {
  organizationsLoader: OrganizationsLoader;
}

export function makeLoaders(providers: Providers) {
  const organizationsLoader = makeOrganizationsLoader(providers.organizationsProvider);

  return {
    organizationsLoader
  }
}
