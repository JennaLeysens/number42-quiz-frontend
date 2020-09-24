import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Heading, Box, Button } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import Round from "../components/Round";
import AnswerForm from "../pages/AnswerForm";

export default function Quiz() {
  const user = useSelector(selectUser);
  console.log(user.quizzes);
  const [show, setShow] = useState(false);

  if (show === true) {
    return (
      <Box>
        <AnswerForm></AnswerForm>
      </Box>
    );
  }

  return (
    <Box>
      <Heading>Quiz </Heading>
      <Round></Round>
      <Box>
        <AnswerForm></AnswerForm>
      </Box>
      <Box>
        New answer
        <Button onClick={() => setShow(true)}>+</Button>
      </Box>
    </Box>
  );
}
