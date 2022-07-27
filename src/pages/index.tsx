import { useContext } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";

import { AuthContext } from "../services/contexts/AuthContext";
import { ThemeContext } from "../services/contexts/ThemeContext";

import {
  Flex,
  Button,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";

import { Title } from "../components/Title";
import { Input } from "../components/Form/Input";
import { Logo } from "../components/Header/Logo";
import { ButtonLightOrDark } from "../components/ButtonLightOrDark";
import { SignInData } from "../services/interfaces/authenticate";

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const {
    backgroundPrimary,
    textColor,
    colorSchemeGreen
  } = useContext(ThemeContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInData> = async (values) => {
    await signIn(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDirection="column">
      <Title name="FinanceBarber | Login" />
      <Logo
        fontsize={["3xl", "5xl"]}
        marginBottom={5}
        width={0}
      />

      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg={backgroundPrimary}
        p="8" // medida chakra
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme={colorSchemeGreen}
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

        <Flex justify="space-between" align="flex-start">
          <Text mr={3} mt={4} color={textColor}>
            Não possui conta?
            <Link ml={2} href="/signup">
              Clique aqui!
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Flex mt={2}>
        <ButtonLightOrDark />
      </Flex>
    </Flex>
  );
}
