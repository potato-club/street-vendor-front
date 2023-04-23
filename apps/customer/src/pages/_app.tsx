import { Loading, Toast } from '@street-vendor/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NavermapsProvider } from 'react-naver-maps';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { useWebview } from '../hooks/useWebview';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 500,
    },
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  const {} = useWebview();
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}
    >
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Head>
            <title>Welcome to customer!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
          <Toast />
          <Loading />
        </RecoilRoot>
      </QueryClientProvider>
    </NavermapsProvider>
  );
}

export default CustomApp;
