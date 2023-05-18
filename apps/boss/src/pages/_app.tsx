import { Toast } from '@street-vendor/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { NavermapsProvider } from 'react-naver-maps';
import './styles.css';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}
      submodules={['geocoder']}
    >
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
    </NavermapsProvider>
  );
}

export default CustomApp;
