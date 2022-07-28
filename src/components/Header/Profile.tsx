import React, { useContext } from "react";
import Router from "next/router";
import { destroyCookie } from "nookies";

import { AuthContext } from "../../services/contexts/AuthContext";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Button,
  Center,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast
} from "@chakra-ui/react";

import { RiLogoutBoxLine, RiShieldUserLine } from "react-icons/ri";
import { ThemeContext } from "../../services/contexts/ThemeContext";
interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  const toast = useToast();
  const cancelRef = React.useRef();
  const { user } = useContext(AuthContext);
  const { textColor, schemeColorGreen } = useContext(ThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleLogoutUser() {
    destroyCookie(null, 'FinanceBarbertoken');

    toast({
      title: 'Logout realizado com sucesso!',
      position: 'top-right',
      status: 'success',
      duration: 2000, // 2 seconds
      isClosable: true,
    })

    Router.push('/');
  }

  return (
    <>
      <Menu>
        <MenuButton as={Button} py={7}>
          <Flex align="center">
            {
              showProfileData &&
              (
                <>
                  <Flex textAlign="right" direction="column" mr={2}>
                    <Text fontSize="md">
                      {user ? user.name : ''}
                    </Text>
                    <Text color={textColor} fontSize="sm">
                      {user ? user.email : ''}
                    </Text>
                  </Flex>
                  <Center height={8}>
                    <Divider orientation='vertical' />
                  </Center>
                </>
              )
            }

            <Avatar ml={showProfileData ? '3' : ''} size="sm" name={user ? user.name : ''} src="" />
          </Flex>
        </MenuButton>
        <MenuList fontSize="md">
          <MenuItem
            icon={<RiShieldUserLine size="20" />}
          >
            Meus dados
          </MenuItem>
          <MenuItem
            icon={<RiLogoutBoxLine size="20" />}
            onClick={onOpen}
          >
            Sair
          </MenuItem>
        </MenuList>
      </Menu>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Sair
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja sair da plataforma ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme={schemeColorGreen} onClick={handleLogoutUser} ml={3}>
                Sair
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
