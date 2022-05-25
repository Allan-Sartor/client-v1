import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import NextLink from "next/link";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useEffect, useState } from "react";

import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";
import { useQuery } from "react-query";

export default function UserList({ users, pagination }) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error, refetch } = useUsers(page, {
    initialData: users,
  });
  // const { data, isLoading, isFetching, error, refetch } = useQuery('users', async () => {
  //   const response = await fetch(`${api}/users`)
  //   const data = await response.json();
    
  //   return data;
  // })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // async function handlePrefetchUser(userId: string) {
  //   await queryClient.prefetchQuery(['user', userId], async () => {
  //     const response = await api.get(`users/${userId}`)
  //     console.warn('data', response.data)
  //     return response.data
  //   }, {
  //     staleTime: 1000 * 60 * 10, // 10 minutos armazenados em cache
  //   })
  // }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários

              {/* { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/> } */}
            </Heading>

            <NextLink href="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                cursor="pointer"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          {/* { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter os dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && <Th>Data de cadastro</Th> }
                    <Th width="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  { users.map(user => {
                    return (
                      <Tr key={ user.id }>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link color="purple.400">
                              <Text fontWeight="bold">{ user.name }</Text>
                            </Link>
                            <Text fontSize="sm" color="gray.300">
                              { user.email }
                            </Text>
                          </Box>
                        </Td>
                        { isWideVersion && <Td>{ user.createdAt }</Td>}
                        <Td>
                          { isWideVersion && (
                            <Button
                              as="a"
                              size="sm"
                              cursor="pointer"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={ RiPencilLine } fontSize="16" />}
                            >
                              Editar
                            </Button>
                          )}
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination 
                totalCountOfRegisters={pagination.meta.totalItems}
                currentPage={pagination.meta.current_page}
                registerPerPage={pagination.meta.itemsPerPage}
                onPageChange={setPage}
              />
            </>
          )} */}
        </Box>
      </Flex>
    </Box>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { users, pagination } = await getUsers();

//   console.log('users index', users)
//   console.log('pagination index', pagination)

//   return {
//     props: {
//       users,
//       pagination
//     }
//   }
// }
