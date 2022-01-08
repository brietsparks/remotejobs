import React from 'react';

import { About } from '../../components/about';
import { LayoutContainer, LayoutContainerPaths } from '../layout';

export interface AboutPageContainerProps {
  paths: LayoutContainerPaths;
}

export function AboutPageContainer(props: AboutPageContainerProps) {
  return (
    <LayoutContainer paths={props.paths}>
      <About />
    </LayoutContainer>
  )
}
