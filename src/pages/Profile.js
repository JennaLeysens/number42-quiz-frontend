import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../store/User/selector";

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <Box>
      <Heading>{user.name}'s quizzes</Heading>
    </Box>
  );
}
