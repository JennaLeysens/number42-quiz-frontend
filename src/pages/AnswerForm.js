import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import "./AnswerForm.css";
import { addAnswer } from "../store/User/actions";
import { useParams } from "react-router-dom";
import { selectUser } from "../store/User/selector";

export default function AnswerForm({ initialValue }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const quiz = user.quizDetails;
  const { id } = useParams();

  const [answer, setAnswer] = useState(initialValue.answer);
  const [points, setPoints] = useState(initialValue.points);

  const quizId = id;
  const rounds = user.quizDetails
    ? user.quizDetails.rounds.map((round) => round.id)
    : null;

  const latestRound = Math.max(...rounds);

  const roundId = latestRound;

  function submitForm() {
    dispatch(addAnswer(answer, points, roundId, quizId));
    console.log(answer, points, roundId, quizId);
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
      <Button m={10} size="md" onClick={submitForm}>
        Save answer
      </Button>
    </Box>
  );
}
