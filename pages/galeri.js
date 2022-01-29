import { Stack } from '@chakra-ui/react';
import { Box, Container } from '@chakra-ui/layout';
import Head from 'next/head';
import GalleryItem from '../components/GalleryItem';

export default function GaleriPage() {
  return (
    <Box bg="gray.50" minH="100vh" py="6">
      <Head>
        <title>Galeri - Batik Girilayu</title>
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
              <GalleryItem
                title="Batik Entah Apa Namanya"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              />
              <GalleryItem
                title="Batik Entah Apa Namanya"
                description="standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
              />
              <GalleryItem title="Batik Entah Apa Namanya" description="make a type specimen book." />
            </Box>
          </Stack>
        </Box>
      </Container>

      <footer></footer>
    </Box>
  );
}
