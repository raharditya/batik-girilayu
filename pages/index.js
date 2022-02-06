import { useState, useEffect } from 'react';
import { Box, Text, Container, Heading, Center } from '@chakra-ui/layout';
import Head from 'next/head';
import NewsItem from '../components/NewsItem';
import { firestore } from '../firebase';
import { TailSpin } from 'react-loader-spinner';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const colRef = firestore.collection('berita').orderBy('tanggal', 'desc');

    colRef.get().then((snapshot) => {
      const _news = [];
      snapshot.forEach((doc) => {
        _news.push(doc.data());
      });

      setNews(_news);
    });
  }, []);

  return (
    <Box bg="gray.50" py="6">
      <Head>
        <title>Batik Girilayu</title>
        <meta name="description" content="Website resmi dari Batik Girilayu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" color="gray.700" fontSize={{ base: 'sm', lg: 'md' }}>
        <Box as="main">
          <Box
            bg="gray.300"
            w="full"
            h="300px"
            rounded="xl"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundImage="url('/assets/main-header.jpg')"
          />
          <Heading as="h1" fontSize={{ base: 'xl', lg: '2xl' }} mt="6" mb="4">
            Berita Terbaru
          </Heading>

          {news.length ? (
            news.map((newsItem, idx) => (
              <NewsItem
                key={idx * 100}
                title={newsItem.judul}
                path={newsItem.slug}
                thumbnail={newsItem.gambarUrl}
                excerpt={newsItem.intisari}
              />
            ))
          ) : (
            <Center py="14">
              <Box textAlign="center">
                <TailSpin color="#00BFFF" height={80} width={80} />
                <Text mt="4">Loading...</Text>
              </Box>
            </Center>
          )}
        </Box>
      </Container>

      <footer></footer>
    </Box>
  );
}
