import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 500,
    }
  }
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Head>
          <title>Welcome to customer!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default CustomApp;
