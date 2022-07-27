import { Text } from "@chakra-ui/react";

type LogoProps = {
  fontsize?: string[];
  marginBottom?: number;
  width?: number;
}

export function Logo({ fontsize, marginBottom, width }: LogoProps) {
  return (
    <Text 
      fontSize={fontsize ? fontsize : ["2xl", "3xl"]}
      fontWeight="bold" 
      letterSpacing="tight" 
      w={width ? width : "64"}
      marginBottom={ marginBottom }
      marginLeft={4}
    >
      Fin 
      <Text as="span" color="green.500">
        {`. `}
      </Text>
      Barber
    </Text>
  );
}
