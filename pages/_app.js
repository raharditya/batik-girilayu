import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/global.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
