import { useContext } from "react";
import { parseCookies } from 'nookies';
import { GetServerSideProps } from "next";

import { ThemeContext } from "../services/contexts/ThemeContext";

import { Box, SimpleGrid } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { Charts } from "../components/Charts";
import { Title } from "../components/Title";

export default function Dashboard() {
  const { backgroundPrimary } = useContext(ThemeContext);

  return (
    <Layout>
      <SimpleGrid flex="1" gap="4" minChildWidth="360px" alignItems="flex-start">
        <Title name="FinanceBarber | Dashboard"/>

          <Box
            p={["6", "8"]}
            bg={backgroundPrimary}
            borderRadius={8}
          >
            <Charts title="Total de entradas hoje" />
          </Box>

          <Box
            p={["6", "8"]}
            bg={backgroundPrimary}
            borderRadius={8}
          >
            <Charts title="Total de entradas na semana" />
          </Box>

          <Box
            p={["6", "8"]}
            bg={backgroundPrimary}
            borderRadius={8}
          >
            <Charts title="Quantidade de entradas por barbeiro" />
          </Box>

          <Box
            p={["6", "8"]}
            bg={backgroundPrimary}
            borderRadius={8}
          >
            <Charts title="Principais entradas" />
          </Box>

        </SimpleGrid>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ['FinanceBarbertoken']: token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
