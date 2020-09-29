import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import AnswerForm from "../pages/AnswerForm";

export default function Round() {
  return (
    <Box>
      <Heading>Round</Heading>
      <AnswerForm></AnswerForm>
    </Box>
  );
}
