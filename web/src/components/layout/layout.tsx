import React, { ReactElement } from 'react';
import { AppBar, Toolbar, Container, Link } from '@material-ui/core';

import { Logo } from './logo';
import { useLayoutStyles } from './layout.styles';

export interface LayoutProps {
  children: ReactElement;
  paths: LayoutPaths;
  messages: LayoutMessages;
}

export interface LayoutPaths {
  about: string;
  jobs: string;
  organizations: string;
}

export interface LayoutMessages {
  about: string;
  jobs: string;
  organizations: string;
}

export function Layout(props: LayoutProps) {
  const classes = useLayoutStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Container className={classes.navContainer}>
            <Logo />
            <nav>
              <ul className={classes.navList}>
                <li><Link href={props.paths.jobs}>{props.messages.jobs}</Link></li>
                <li><Link href={props.paths.organizations}>{props.messages.organizations}</Link></li>
                <li><Link href={props.paths.about}>{props.messages.about}</Link></li>
              </ul>
            </nav>
          </Container>
        </Toolbar>
      </AppBar>

      <Container component="main" className={classes.main}>
        {props.children}
      </Container>
    </div>
  )
}
