import React, { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

import { Layout, LayoutPaths } from '../../components';

export interface LayoutContainerProps {
  children: ReactNode;
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
