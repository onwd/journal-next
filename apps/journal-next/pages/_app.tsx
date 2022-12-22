import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import './styles.css';
import { lightTheme } from '../themes/light';
import { SSRProvider } from '@react-aria/ssr';

function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextUIProvider theme={lightTheme}>
        <Head>
          <title>Welcome to journal-next!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </SSRProvider>
  );
}

export default App;
