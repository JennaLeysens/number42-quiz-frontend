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
      <Heading paddingBottom={4}>Login</Heading>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>{" "}
        <Input
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <FormLabel>Password</FormLabel>{" "}
        <Input
          placeholder="Login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </FormControl>
      <Button>Login</Button>
    </Box>
  );
}
