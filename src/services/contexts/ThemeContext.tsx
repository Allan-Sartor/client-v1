
import { createContext } from "react";

import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

import { ThemeContextProps } from "../interfaces/themes";

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const bg = useColorModeValue('gray.50', 'gray.800')
  const color = useColorModeValue('gray.900', 'gray.200')

  const backgroundPrimary = useColorModeValue('gray.50', 'blue.800');
  const textColor = useColorModeValue('black', 'white');
  const schemeColorGreen = 'green';

  return (
    <ThemeContext.Provider
      value={{
        isWideVersion,
        backgroundPrimary,
        textColor,
        schemeColorGreen
      }}>
      { children }
    </ThemeContext.Provider>
  )
}
