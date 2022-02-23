import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { NextIntlProvider } from 'next-intl';
import NextApp, { AppContext, AppProps as NextAppProps } from 'next/app';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

type AppProps = NextAppProps & {
  messages: Record<string, unknown>;
  locale: string;
};

function MyApp({ Component, pageProps, messages, locale }: AppProps) {
  return (
    <NextIntlProvider
      locale={locale}
      messages={{ ...messages, ...pageProps.messages }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </NextIntlProvider>
  );
}

MyApp.getInitialProps = async function getInitialProps(context: AppContext) {
  const { router } = context;
  const locale = router.locale || router.defaultLocale || 'pt-BR';
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: (await import(`../../i18n/${locale}.json`)).default,
    locale
  };
};

export default MyApp;
