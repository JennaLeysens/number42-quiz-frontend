import React, { useState } from "react";
import AnswerForm from "../pages/AnswerForm";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
// import "./AnswerForm.css";
import { addAnswer } from "../store/User/actions";
import { useParams } from "react-router-dom";
import { selectUser } from "../store/User/selector";

export default function Round({ round }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const quiz = user.quizDetails;
  const { id } = useParams();
  const quizRounds = quiz ? quiz.rounds : null;

  const answers = quizRounds
    ? quizRounds.map((round) => {
        return round.answers || [];
      })
    : null;

  const [addAnswer, setAddAnswer] = useState([]);

  return (
    <Box>
      <Box>
        <Heading marginBottom={3} as="h5" size="sm">
          Add your answers
        </Heading>
        {round.answers &&
          round.answers.map((answer) => {
            return <AnswerForm initialValue={answer}></AnswerForm>;
          })}
        {addAnswer}
        <Button>+</Button>Add answer
      </Box>
    </Box>
  );
}
