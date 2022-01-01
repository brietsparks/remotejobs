import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';

import { Layout, LayoutPaths } from '../../components/layout';

export interface LayoutContainerProps {
  children: ReactElement;
  paths: LayoutContainerPaths;
}

export type LayoutContainerPaths = LayoutPaths;

export function LayoutContainer(props: LayoutContainerProps) {
  const { t } = useTranslation();

  const messages = {
    about: t('about'),
    jobs: t('jobs'),
    organizations: t('organizations')
  }

  return (
    <Layout
      paths={props.paths}
      messages={messages}
    >
      {props.children}
    </Layout>
  )
}
