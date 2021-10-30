export type Organization = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  website: string;
}

export type Job = {
  id: string;
  organizationId: string;
  title: string;
  shortDescription: string;
  longDescription: string;
}
