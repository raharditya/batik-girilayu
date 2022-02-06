import { useState, useEffect } from 'react';
import { Box, Center, Container, Heading, Text, VStack } from '@chakra-ui/layout';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase';
import { Image } from '@chakra-ui/image';
import { getMonthString } from '../../lib/helpers';

export default function KatalogPage() {
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
      {/* {loading ? (
        <Center minH="100vh">
          <Box textAlign="center">
            <Heading>Loading...</Heading>
            <Text>Mohon tunggu beberapa saat.</Text>
          </Box>
        </Center>
      ) : news?.judul ? ( */}
      <Container maxW="container.lg" py="10">
        <Box textAlign="center" mb="6">
          <Heading color="#c28e35">Judul Nama Batik</Heading>
        </Box>

        {/* <Image src={news?.gambarUrl} mb="6" maxW={{ base: 'full', md: 'lg' }} mx="auto" /> */}

        <VStack maxW={{ base: 'full', md: '70%' }} marginX="auto" spacing="4">
          <ReactMarkdown>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of **Lorem Ipsum**.
          </ReactMarkdown>
        </VStack>
      </Container>
      {/* ) : (
        <Center minH="100vh">
          <Box textAlign="center">
            <Heading>Katalog tidak ditemukan</Heading>
            <Text>Silahkan kembali ke halaman Beranda kami.</Text>
          </Box>
        </Center>
      )} */}
    </>
  );
}
