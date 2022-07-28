import { useSidebarDrawer } from "../../services/contexts/SidebarDrawerContext";
import { ThemeContext } from "../../services/contexts/ThemeContext";

import { 
  Flex, 
  Icon, 
  IconButton, 
} from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";

import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationNav } from "./NotificationNav";
import { ButtonLightOrDark } from "../ButtonLightOrDark";
import { useContext } from "react";

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const { isWideVersion } = useContext(ThemeContext);

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="2"
        />
      )}

      <Logo />

      <SearchBox showSearchBox={isWideVersion} />

      <ButtonLightOrDark ml={3}/>

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
