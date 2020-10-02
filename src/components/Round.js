import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Heading, Text, Button, Box } from "@chakra-ui/core";
import AnswerForm from "../pages/AnswerForm";
import { selectUser } from "../store/User/selector";
import Accordian from "./Accordion";

export default function Round() {
  const [addAnswer, setAddAnswer] = useState([]);
  const user = useSelector(selectUser);
  const quiz = user.quizDetails;

  function newAnswer() {
    setAddAnswer(addAnswer.concat(<AnswerForm key={addAnswer.length} />));
  }

  return (
    <Box>
      <Heading>Round</Heading>
      <Accordian>
        <Text>Hello!</Text>
        <Box>
          <Heading marginBottom={3}>Add your answers here</Heading>
          <AnswerForm></AnswerForm>
          <Button onClick={newAnswer}>+</Button>Add answer
          {addAnswer}
        </Box>
      </Accordian>
    </Box>
  );
}
