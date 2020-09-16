import React from "react";
import { useSelector } from "react-redux";
import { Heading, Box } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import { selectUser } from "../store/User/selector";

export default function Quiz() {
  const { id } = useParams();
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <Box>
      <Heading>Quiz</Heading>
    </Box>
  );
}
