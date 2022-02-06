import { useState, useEffect } from "react";
import { Box, Container, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import NewsItem from "../components/NewsItem";
import { firestore } from "../firebase";
// import { useCollection } from "react-firebase-hooks/firestore";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const colRef = firestore.collection("berita");

    colRef.get().then((snapshot) => {
      const _news = [];
      snapshot.forEach((doc) => {
        _news.push(doc.data());
      });

      setNews(_news);
    });
  }, []);

  return (
    <Box bg="gray.50" minH="100vh" py="6">
      <Head>
        <title>Batik Girilayu</title>
        <meta name="description" content="Website resmi dari Batik Girilayu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" color="gray.700" fontSize={{ base: "sm", lg: "md" }}>
        <Box as="main">
          <Box bg="gray.300" w="full" h="250px" />
          <Heading as="h1" fontSize={{ base: "xl", lg: "2xl" }} mt="6" mb="4">
            Berita Terbaru
          </Heading>

          {news.map((newsItem) => (
            <NewsItem
              title={newsItem.judul}
              path={newsItem.slug}
              thumbnail={newsItem.gambarUrl}
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged."
            />
          ))}
        </Box>
      </Container>

      <footer></footer>
    </Box>
  );
}
