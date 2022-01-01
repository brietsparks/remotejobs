import Dataloader from 'dataloader';

import { JobsProvider, Job } from '../../providers';

export interface JobsLoader {
  getRecentJobsOfOrganizations: Dataloader<string, Job[]>;
}

export function makeJobsLoader(provider: JobsProvider): JobsLoader {
  const getRecentJobsOfOrganizations = async (organizationIds: ReadonlyArray<string>) => {
    const jobs = await provider.getRecentJobsOfOrganizations({
      organizationIds: organizationIds as string[]
    });

    const jobsByOrganizationId: Record<string, Job[]> = {};
    for (const organizationId of organizationIds) {
      jobsByOrganizationId[organizationId] = [];
    }

    for (const job of jobs) {
      jobsByOrganizationId[job.organizationId].push(job);
    }

    return organizationIds.map(organizationId => jobsByOrganizationId[organizationId]);
  };

  return {
    getRecentJobsOfOrganizations: new Dataloader(getRecentJobsOfOrganizations)
  }
}

