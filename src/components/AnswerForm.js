import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import "./AnswerForm.css";
import { updateAnswer } from "../store/User/actions";
import { useParams } from "react-router-dom";

export default function AnswerForm({ initialValue }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [answer, setAnswer] = useState(initialValue.answer);
  const [points, setPoints] = useState(initialValue.points);
  const [answerId, setAnswerId] = useState(initialValue.id);

  const quizId = id;
  const roundId = initialValue.roundId;

  function submitForm() {
    dispatch(updateAnswer(answer, points, roundId, quizId, answerId));
  }

  return (
    <Box>
      <Box className="container" spacing={3}>
        <Stack isInline>
          <Input
            placeholder="Type your answer here"
            w={700}
            size="lg"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></Input>
          <FormLabel>Points</FormLabel>
          <Input
            size="sm"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          ></Input>
        </Stack>
      </Box>
      <Button variantColor="red" m={5} size="sm" onClick={submitForm}>
        Save answer
      </Button>
    </Box>
  );
}
