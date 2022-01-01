import { Providers } from '../../providers';

import { OrganizationsLoader, makeOrganizationsLoader } from './organizations-loader';
import { JobsLoader, makeJobsLoader } from './jobs-loader';

export interface Loaders {
  organizationsLoader: OrganizationsLoader;
  jobsLoader: JobsLoader;
}

export function makeLoaders(providers: Providers) {
  const organizationsLoader = makeOrganizationsLoader(providers.organizationsProvider);
  const jobsLoader = makeJobsLoader(providers.jobsProvider);

  return {
    organizationsLoader,
    jobsLoader
  }
}
