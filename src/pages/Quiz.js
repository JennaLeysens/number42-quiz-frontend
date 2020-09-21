import React from "react";
import { useSelector } from "react-redux";
import { Heading, Box } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import Round from "../components/Round";

export default function Quiz() {
  const user = useSelector(selectUser);
  console.log(user.quizzes);

  return (
    <Box>
      <Heading>Quiz </Heading>
      <Round></Round>
    </Box>
  );
}
