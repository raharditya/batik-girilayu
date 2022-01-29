import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

export default function NewsItem(props) {
  return (
    <Stack
      bg="white"
      direction={{ base: 'column-reverse', md: 'row' }}
      rounded="xl"
      shadow="lg"
      mb="4"
      p="4"
      spacing="4"
    >
      <Box>
        <Heading as="h2" fontSize="xl" color="blue.600" mt="0" mb="2">
          {props.title}
        </Heading>
        <Text>{props.excerpt}</Text>
      </Box>
      <Box width="100%" height="150px" bg="gray.300" rounded="lg"></Box>
    </Stack>
  );
}
