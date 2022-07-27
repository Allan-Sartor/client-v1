
import { useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { createContext } from "react";

import { ThemeContextProps } from "../interfaces/themes";

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const backgroundPrimary = useColorModeValue('gray.50', 'blue.800');
  const colorSchemeGreen = useColorModeValue('green', 'gray');
  const textColor = useColorModeValue('black', 'white');

  return (
    <ThemeContext.Provider
      value={{
        isWideVersion,
        backgroundPrimary,
        textColor,
        colorSchemeGreen,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
