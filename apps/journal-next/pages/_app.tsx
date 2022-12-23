import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import './styles.css';
import { lightTheme } from '../themes/light';
import { SSRProvider } from '@react-aria/ssr';
import { CustomAppProps } from '../interfaces/custom-app-props';

function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SSRProvider>
      <NextUIProvider theme={lightTheme}>
        <Head>
          <title>Welcome to journal-next!</title>
        </Head>
        <main className="app">
          {getLayout(<Component {...pageProps} />)}
        </main>
      </NextUIProvider>
    </SSRProvider>
  );
}

export default App;
