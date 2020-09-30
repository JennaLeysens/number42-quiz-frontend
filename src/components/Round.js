import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import AnswerForm from "../pages/AnswerForm";
import { selectUser } from "../store/User/selector";

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
      {quiz.answers
        ? quiz.answers.map((answer) => {
            return (
              <Box>
                <Heading as="h5" size="sm">
                  Question {answer.id}
                </Heading>
              </Box>
            );
          })
        : null}
      <Heading marginBottom={3}>Add your answers here</Heading>
      <AnswerForm></AnswerForm>
      <Button onClick={newAnswer}>+</Button>Add answer
      {addAnswer}
    </Box>
  );
}
