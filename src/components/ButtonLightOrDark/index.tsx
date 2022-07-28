import React, { useContext } from 'react'

import { Button, Icon, useColorMode } from '@chakra-ui/react'

import { RiMoonLine, RiSunLine } from 'react-icons/ri'

import { ThemeContext } from '../../services/contexts/ThemeContext';

export function ButtonLightOrDark({...rest}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { backgroundPrimary } = useContext(ThemeContext);

  return (
    <Button
      w="12"
      h="12"
      p="7"
      bg={backgroundPrimary}
      onClick={toggleColorMode}
      {...rest}
    >
      {colorMode === 'light' ?
        <Icon as={RiMoonLine} fontSize="20" />
        :
        <Icon as={RiSunLine} fontSize="20" />
      }
    </Button>
  )
}
