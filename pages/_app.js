import '@/src/styles/globalStyles.css';

import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/src/config/createEmotionCache';
import { useMediaQuery } from '@mui/material';
import React, { useMemo } from 'react';
import { theme } from '@/src/config/theme';
import store from '@/src/redux/store';
import { Provider } from 'react-redux';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const customTheme = useMemo(() => theme(prefersDarkMode), [prefersDarkMode]);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};