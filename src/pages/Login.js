import React, { useState } from "react";
import {
  Input,
  Button,
  FormLabel,
  FormControl,
  Heading,
  Box,
} from "@chakra-ui/core";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Box>
      <Heading>Login</Heading>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel> <Input value={email}></Input>
        <FormLabel>Password</FormLabel> <Input></Input>
      </FormControl>
      <Button>Login</Button>
    </Box>
  );
}
