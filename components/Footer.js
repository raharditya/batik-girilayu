import React from 'react';
import {
  Box,
  Container,
  BoxProps,
  Stack,
  Spacer,
  Heading,
  Text,
  Flex,
  Img,
  Divider,
  Wrap,
  WrapItem,
  useTheme,
} from '@chakra-ui/layout';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { HStack } from '@chakra-ui/react';
import { sosmed } from '../data/sosial-media';

export const Footer = ({ homeUrl = '/', brand, question, navItems, socialMedia, copyrightText, ...props }) => {
  return (
    <Box as="footer" w="full" fontSize={{ base: 'sm', lg: 'md' }} flexShrink={0} borderTopWidth="1px" {...props}>
      <Container py="8" maxW="container.xl">
        <Box w="32" h="10" mb="2" bg="gray.300"></Box>
        <Text maxW="md" mb="4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </Text>

        <Text fontWeight="bold" fontSize={{ base: 'md', lg: 'lg' }} mb="1">
          Kontak Kami
        </Text>
        <HStack spacing="4">
          {sosmed.map((item, idx) => (
            <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </a>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};
