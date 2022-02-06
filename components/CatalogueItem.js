import { Stack, Text } from '@chakra-ui/react';
import { Box, Heading, VStack } from '@chakra-ui/layout';

export default function CatalogueItem(props) {
  return (
    <Stack w="full" direction="row" bg="white" spacing="4" mb="4" p="4" rounded="xl" shadow="xl" borderWidth="1px">
      <Box
        bg="gray.300"
        w="100px"
        h="100px"
        flexShrink="0"
        rounded="lg"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={`url('${props.thumbnail}')`}
      ></Box>
      <VStack justifyContent="space-between" alignItems="start">
        <Box>
          <Heading as="h2" fontSize={{ base: 'lg', lg: 'xl' }} color="#c28e35">
            {props.title}
          </Heading>
          <Text>{props.children}</Text>
        </Box>
        <Text fontWeight="bold">{props.price}</Text>
      </VStack>
    </Stack>
  );
}
