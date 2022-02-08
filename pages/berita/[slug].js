import { useState, useEffect } from 'react';
import { Box, Center, Container, Heading, Text, VStack } from '@chakra-ui/layout';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase';
import { Image } from '@chakra-ui/image';
import { getMonthString } from '../../lib/helpers';
import { Spinner } from '@chakra-ui/react';

export default function BeritaPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const colRef = firestore.collection('berita').where('slug', '==', slug || '');

      colRef.get().then((snapshot) => {
        const _news = [];
        snapshot.forEach((doc) => {
          const _newsData = doc.data();
          _newsData['tanggal'] = new Date(_newsData.tanggal.seconds * 1000);

          _news.push(_newsData);
        });

        setNews(_news[0]);
        setLoading(false);
      });
    }
  }, [slug]);

  return (
    <>
      {loading ? (
        <Center minH="70vh">
          <Box textAlign="center">
            <Spinner size="lg" />
            <Text mt="4">Loading...</Text>
          </Box>
        </Center>
      ) : news?.judul ? (
        <>
          <Head>
            <title>{news.judul} - Batik Girilayu</title>
            {/* TODO: Fix meta */}
            <meta name="description" content="Website resmi dari Batik Girilayu" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Container maxW="container.lg" py="10">
            <Box textAlign="center" mb="6">
              <Text fontSize="xs">{`${news.tanggal.getDate()} ${getMonthString(
                news.tanggal.getMonth()
              )} ${news.tanggal.getFullYear()}`}</Text>
              <Heading color="#c28e35">{news.judul}</Heading>
            </Box>

            <Image src={news?.gambarUrl} mb="6" maxW={{ base: 'full', md: 'lg' }} mx="auto" alt="" />

            <VStack maxW={{ base: 'full', md: '70%' }} marginX="auto" spacing="4">
              <ReactMarkdown>{news.konten}</ReactMarkdown>
            </VStack>
          </Container>
        </>
      ) : (
        <>
          <Head>
            <title>Tidak Ditemukan - Batik Girilayu</title>
            {/* TODO: Fix meta */}
            <meta name="description" content="Website resmi dari Batik Girilayu" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Center minH="60vh">
            <Box textAlign="center">
              <Heading>Berita tidak ditemukan</Heading>
              <Text>Silahkan kembali ke halaman Beranda kami.</Text>
            </Box>
          </Center>
        </>
      )}
    </>
  );
}
