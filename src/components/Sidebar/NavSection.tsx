import { ReactNode, useContext } from "react"

import { ThemeContext } from "../../services/contexts/ThemeContext"

import { Box, Stack, Text } from "@chakra-ui/react"
interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  const { textColor } = useContext(ThemeContext);

  return (
    <Box>
      <Text fontWeight="bold" color={textColor} fontSize="small">{ title }</Text>
      <Stack spacing="4" mt="8" align="strecth">
        { children }
      </Stack>
    </Box>
  );
}
