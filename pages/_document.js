import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import PropTypes from 'prop-types';
import createEmotionCache from '@/src/config/createEmotionCache';
import { theme, poppins } from '@/src/config/theme';

export default function MyDocument(props) {
  const { emotionStyleTags } = props;
  const defaultTheme = theme();

  return (
    <Html style={{ height: '100%' }} className={poppins.className}>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <meta name='theme-color' content={defaultTheme.palette.primary.main} />
        <meta name='emotion-insertion-point' content='' />
        {emotionStyleTags}
      </Head>
      <body style={{ height: '100%' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        }
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags
  };
};

MyDocument.propTypes = {
  emotionStyleTags: PropTypes.array.isRequired
};