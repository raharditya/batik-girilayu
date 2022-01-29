import { Stack } from '@chakra-ui/react';
import { Box, Container } from '@chakra-ui/layout';
import Head from 'next/head';
import CatalogueItem from '../components/CatalogueItem';

export default function KatalogPage() {
  return (
    <Box bg="gray.50" minH="100vh" py="6">
      <Head>
        <title>Katalog - Batik Girilayu</title>
        <meta name="description" content="Website resmi dari Batik Girilayu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" color="gray.700">
        <Box as="main">
          <Stack direction={{ base: 'column', md: 'row' }} spacing="6">
            <Box
              bg="gray.300"
              w={{ base: 'full', md: '30%' }}
              h={{ base: '200px', md: '250px' }}
              flexShrink="0"
              rounded="xl"
            ></Box>
            <Box w={{ base: 'full', md: '70%' }}>
              <CatalogueItem title="Batik Entah Apa Namanya" price="Rp 300.000">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              </CatalogueItem>

              <CatalogueItem title="Batik Entah Apa Namanya" price="Rp 300.000">
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              </CatalogueItem>

              <CatalogueItem title="Batik Entah Apa Namanya" price="Rp 300.000">
                scrambled it to make a type specimen book.
              </CatalogueItem>
            </Box>
          </Stack>
        </Box>
      </Container>

      <footer></footer>
    </Box>
  );
}
