import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Input,
  Button,
  FormLabel,
  FormControl,
  Heading,
  Box,
} from "@chakra-ui/core";
import { login } from "../store/User/actions";
import "./Forms.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  function submitForm(e) {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
    history.push("/");
  }

  return (
    <Box className="forms">
      <Heading paddingBottom={10}>Login</Heading>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>{" "}
        <Input
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          w={350}
          marginBottom={5}
        ></Input>
        <FormLabel>Password</FormLabel>{" "}
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          w={350}
        ></Input>
      </FormControl>
      <Box>
        <Button margin={5} variantColor="red" onClick={submitForm}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
