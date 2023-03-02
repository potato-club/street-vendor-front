import { Toast } from '@street-vendor/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './styles.css';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Head>
          <title>Welcome to boss!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
        <Toast />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default CustomApp;
