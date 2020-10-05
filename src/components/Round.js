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
      <Accordian>
        <Box>
          <Heading marginBottom={3} as="h5" size="sm">
            Add your answers
          </Heading>
          <AnswerForm></AnswerForm> {addAnswer}
          <Button onClick={newAnswer}>+</Button>Add answer
        </Box>
      </Accordian>
    </Box>
  );
}
