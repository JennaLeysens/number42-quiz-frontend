import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function submitForm() {
    setName("");
    setEmail("");
    setPassword("");
    history.push("/");
  }

  return (
    <Box>
      <Heading paddingBottom={4}>Signup</Heading>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>{" "}
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <FormLabel>Email address</FormLabel>{" "}
        <Input
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <FormLabel>Password</FormLabel>{" "}
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </FormControl>
      <Button margin={5} onClick={submitForm()}>
        Create account
      </Button>
    </Box>
  );
}
