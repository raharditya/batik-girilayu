import { ChakraProvider } from '@chakra-ui/react';
import Nav from '../components/Nav';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
