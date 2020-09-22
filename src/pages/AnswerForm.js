import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Heading,
  Stack,
  Input,
  NumberInput,
  FormLabel,
  Button,
  Box,
} from "@chakra-ui/core";
import "./AnswerForm.css";
import { addAnswer, quizAdded } from "../store/User/actions";
import { useParams } from "react-router-dom";

export default function AnswerForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { round } = useParams();
  console.log(id, round);
  const [answer, setAnswer] = useState();
  const [points, setPoints] = useState();

  const quizId = id;
  const roundId = round;

  function submitForm() {
    dispatch(addAnswer(quizId, roundId, answer, points));
  }

  return (
    <Box>
      <Box className="container" spacing={3}>
        <Heading>Add your answers here</Heading>
        <Stack isInline>
          <Input
            placeholder="Type your answer here"
            w={700}
            size="lg"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></Input>
          <FormLabel>Points</FormLabel>
          <NumberInput
            size="sm"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          ></NumberInput>
        </Stack>
      </Box>
      <Button m={10} size="md" onClick={submitForm}>
        Submit answers
      </Button>
    </Box>
  );
}
