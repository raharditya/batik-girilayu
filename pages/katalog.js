import { Stack } from '@chakra-ui/react';
import { Box, Center, Container, Heading } from '@chakra-ui/layout';
import Head from 'next/head';
import CatalogueItem from '../components/CatalogueItem';

export default function KatalogPage() {
  return (
    <Box bg="gray.50" py="6">
      <Head>
        <title>Katalog - Batik Girilayu</title>
        <meta name="description" content="Website resmi dari Batik Girilayu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" color="gray.700" fontSize={{ base: 'sm', lg: 'md' }}>
        <Box as="main">
          <Stack direction={{ base: 'column', md: 'row' }} spacing="6">
            <Center
              bg="gray.300"
              w={{ base: 'full', md: '30%' }}
              h={{ base: '200px', md: '250px' }}
              flexShrink="0"
              rounded="xl"
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundImage="url('/assets/dark/asset-2.jpg')"
            >
              <Heading color="white" fontSize="4xl">
                Katalog
              </Heading>
            </Center>
            <Box w={{ base: 'full', md: '70%' }}>
              <CatalogueItem title="Judul Batik 1" price="Rp 300.000" thumbnail="/assets/original/asset-4.jpg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              </CatalogueItem>

              <CatalogueItem title="Judul Batik 2" price="Rp 300.000" thumbnail="/assets/original/asset-6.jpg">
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              </CatalogueItem>

              <CatalogueItem title="Judul Batik 3" price="Rp 300.000" thumbnail="/assets/original/asset-3.jpg">
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
