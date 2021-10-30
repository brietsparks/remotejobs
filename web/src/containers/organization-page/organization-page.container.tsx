import React from 'react';

import { Organization } from '../../domain';
import { OrganizationSplash } from '../../components';

export interface OrganizationPageContainerProps {
  values: Organization
}

export function OrganizationPageContainer(props: OrganizationPageContainerProps) {
  return (
    <OrganizationSplash
      values={props.values}
    />
  )
}
