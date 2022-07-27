import { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import { ChakraProvider } from '@chakra-ui/react';

import { SidebarDrawerProvider } from '../services/contexts/SidebarDrawerContext';
import { AuthProvider } from '../services/contexts/AuthContext';
import { ThemeProvider } from '../services/contexts/ThemeContext';

import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  // makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <ThemeProvider>
            <AuthProvider>
              <SidebarDrawerProvider>
                <Component {...pageProps} />
              </SidebarDrawerProvider>
            </AuthProvider>
          </ThemeProvider>
        </ChakraProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>

  )
}

export default MyApp
