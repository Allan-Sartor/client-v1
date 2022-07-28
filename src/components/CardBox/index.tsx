import React, { ReactElement, useContext } from 'react';
import NextLink from "next/link";

import { ThemeContext } from '../../services/contexts/ThemeContext';

import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Icon 
} from '@chakra-ui/react';

import { RiAddLine } from 'react-icons/ri';

type CardBoxProps = {
  title: string;
  buttonRedirect?: string;
  children?: ReactElement;
}

export function CardBox({ title, buttonRedirect, children }: CardBoxProps) {
  const { backgroundPrimary } = useContext(ThemeContext);

  return (
    <Box
      flex="1"
      borderRadius={8}
      bg={backgroundPrimary}
      p="8"
    >
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          { title }
        </Heading>

        {
          buttonRedirect ?
            <NextLink href={ buttonRedirect }>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                cursor="pointer"
                leftIcon={<Icon as={ RiAddLine } fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
            :
            <></>
        }

      </Flex>
      { children }
    </Box>
  );
}
