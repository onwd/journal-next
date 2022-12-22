import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import './styles.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <title>Welcome to journal-next!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

export default App;
