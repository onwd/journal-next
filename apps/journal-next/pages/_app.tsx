import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import './styles.css';
import { lightTheme } from '../themes/light';

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={lightTheme}>
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
