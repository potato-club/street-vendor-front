import { Toast } from '@street-vendor/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NavermapsProvider } from 'react-naver-maps';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 500,
    },
  },
});

// Todo mock 서버 사용안하게 되면 삭제
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

function CustomApp({ Component, pageProps }: AppProps) {
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
        </RecoilRoot>
      </QueryClientProvider>
    </NavermapsProvider>
  );
}

export default CustomApp;
