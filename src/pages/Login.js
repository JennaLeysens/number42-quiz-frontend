import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <Button onClick={submitForm}>Login</Button>
    </Box>
  );
}
