import { Box, Container, Heading } from '@chakra-ui/layout';
import Head from 'next/head';
import NewsItem from '../components/NewsItem';

export default function Home() {
  return (
    <Box bg="gray.50" minH="100vh" py="6">
      <Head>
        <title>Batik Girilayu</title>
        <meta name="description" content="Website resmi dari Batik Girilayu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" color="gray.700">
        <Box as="main">
          <Box bg="gray.300" w="full" h="250px" />
          <Heading as="h1" fontSize="2xl" mt="6" mb="4">
            Berita Terbaru
          </Heading>

          <NewsItem
            title="Some Title Here"
            excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged."
          />
          <NewsItem
            title="Some Title Here"
            excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged."
          />
          <NewsItem
            title="Some Title Here"
            excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged."
          />
        </Box>
      </Container>

      <footer></footer>
    </Box>
  );
}
