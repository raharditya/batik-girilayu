import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default MyApp;
