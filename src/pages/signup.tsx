import { Button, Flex, Stack, useColorModeValue, useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../components/Form/Input";
import { Logo } from "../components/Header/Logo";
import { Form } from "../components/Form";

import { apiCreateUser } from "../services/api";
import Router from 'next/router'

type SignUpProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const signInFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(8, "No mínimo 8 caracteres"),
  password_confirmation: yup.string().required('A confirmação da senha é obrigatória').oneOf([yup.ref('password')], 'As senhas devem corresponder!'),
})

function SignUp() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;
  const toast = useToast();
  const bg = useColorModeValue('gray.50', 'gray.800')

  async function handleCreateUser({ name, email, password, password_confirmation }: SignUpProps) {
    const userData = { name, email, password, password_confirmation };

    try {
      await apiCreateUser.post('users', userData)
      toast({
        title: 'Conta cadastrada com sucesso!',
        position: 'top-right',
        status: 'success',
        isClosable: true,
      })

      setTimeout(() => { Router.push('/') }, 1000); // delay 1 second

    } catch (error) {
      toast({
        title: 'Usuário já cadastrado no sistema!',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      })
    }
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDirection="column">
      <Logo
        fontsize={["3xl", "5xl"]}
        marginBottom={5}
        width={0}
      />

      <Form
        onsubmit={handleSubmit(handleCreateUser)}
        bg={bg}
      >
        <Stack spacing="4">
          <Input
            name="name"
            type="text"
            label="Nome Completo"
            error={errors.name}
            {...register("name")}
          />

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

          <Input
            name="password_confirmation"
            type="password"
            label="Confirme sua senha"
            error={errors.password_confirmation}
            {...register("password_confirmation")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="green"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Cadastrar
        </Button>
      </Form>
    </Flex>
  );
}

export default SignUp;