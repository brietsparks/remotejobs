import Dataloader from 'dataloader';

import { JobsProvider, Job } from '../../providers';

export interface JobsLoader {
  getRecentJobsOfOrganizations: Dataloader<string, Job[]>;
  getJobsCountsOfOrganizations: Dataloader<string, number>;
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

  const getJobsCountsOfOrganizations = async (organizationIds: ReadonlyArray<string>) => {
    const jobsCounts = await provider.getJobsCountsOfOrganizations(organizationIds as string[]);

    const jobCountsByOrganizationId: Record<string, number> = {};
    for (const jobsCount of jobsCounts) {
      jobCountsByOrganizationId[jobsCount.organizationId] = jobsCount.count;
    }

    return organizationIds.map(organizationId => jobCountsByOrganizationId[organizationId] || 0);
  }

  return {
    getRecentJobsOfOrganizations: new Dataloader(getRecentJobsOfOrganizations),
    getJobsCountsOfOrganizations: new Dataloader(getJobsCountsOfOrganizations)
  }
}

