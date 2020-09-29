import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import "./AnswerForm.css";
import { addAnswer } from "../store/User/actions";
import { useParams } from "react-router-dom";
import { selectUser } from "../store/User/selector";

export default function AnswerForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();
  const [answer, setAnswer] = useState();
  const [points, setPoints] = useState();
  const [show, setShow] = useState(false);

  const quizId = id;
  const rounds = user.quizDetails
    ? user.quizDetails.rounds.map((quiz) => quiz.roundNumber)
    : null;
  console.log("rounds", rounds);
  const latestRound = Math.max(...rounds);
  console.log("latest", latestRound);
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
        Submit answers
      </Button>
    </Box>
  );
}
