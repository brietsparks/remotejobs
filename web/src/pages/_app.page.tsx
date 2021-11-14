import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@material-ui/core';

import { appTheme } from '../styles/theme';
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
