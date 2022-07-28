import {
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";

import {
  RiNotificationLine,
} from "react-icons/ri";
import { ThemeContext } from "../../../services/contexts/ThemeContext";

import ButtonNav from "./ButtonNav";

export function NotificationNav() {
  const { backgroundPrimary } = useContext(ThemeContext);
  
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color={backgroundPrimary}
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <ButtonNav title="Notificações" onclick={() => {}} icon={RiNotificationLine} />
    </HStack>
  );
}
