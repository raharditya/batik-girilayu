import { Stack, Text } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/layout';

export default function GalleryItem(props) {
  return (
    <Stack w="full" direction="column" bg="white" spacing="4" mb="4" p="4" rounded="xl" shadow="xl">
      <Box bg="gray.300" h="200px" flexShrink="0" rounded="lg"></Box>
      <Box>
        <Heading as="h2" fontSize={{ base: 'lg', lg: 'xl' }} color="blue.600">
          {props.title}
        </Heading>
        <Text>{props.description}</Text>
      </Box>
    </Stack>
  );
}
