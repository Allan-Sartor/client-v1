import React from 'react';

import { Icon } from '@chakra-ui/react';

export default function ButtonNav({ title, onclick, icon }) {
  return (
    <Icon
      as={icon}
      fontSize="24"
      title={title}
      cursor="pointer"
      onClick={onclick}
      _hover={{ color: "blue.500" }}
    />
  );
}
