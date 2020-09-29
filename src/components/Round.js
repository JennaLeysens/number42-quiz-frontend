import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import AnswerForm from "../pages/AnswerForm";

export default function Round() {
  const [addAnswer, setAddAnswer] = useState([]);

  function newAnswer() {
    setAddAnswer(addAnswer.concat(<AnswerForm key={addAnswer.length} />));
  }

  return (
    <Box>
      <Heading>Round</Heading>
      <Heading marginBottom={3}>Add your answers here</Heading>
      <AnswerForm></AnswerForm>
      <Button onClick={newAnswer}>+</Button>Add answer
      {addAnswer}
    </Box>
  );
}
