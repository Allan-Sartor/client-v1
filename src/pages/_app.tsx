import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { AuthProvider } from '../contexts/AuthContext';

if (process.env.NODE_ENV === 'development') {
  // makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <AuthProvider>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </AuthProvider>
      </ChakraProvider>
    </>

  )
}

export default MyApp
