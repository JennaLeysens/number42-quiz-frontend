import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import "./AnswerForm.css";
import { addAnswer } from "../store/User/actions";
import { useParams } from "react-router-dom";

export default function AnswerForm() {
  const dispatch = useDispatch();
  const { id, round } = useParams();
  console.log(id, round);
  const [answer, setAnswer] = useState();
  const [points, setPoints] = useState();
  const [show, setShow] = useState(false);

  const quizId = id;
  const roundId = round;

  function submitForm() {
    dispatch(addAnswer(answer, points, roundId, quizId));
    console.log(answer, points, roundId, quizId);
  }

  // if (show === true) {
  //   return (
  //     <Stack isInline>
  //       <Input
  //         placeholder="Type your answer here"
  //         w={700}
  //         size="lg"
  //         value={answer}
  //         onChange={(e) => setAnswer(e.target.value)}
  //       ></Input>
  //       <FormLabel>Points</FormLabel>
  //       <Input
  //         size="sm"
  //         value={points}
  //         onChange={(e) => setPoints(e.target.value)}
  //       ></Input>
  //       <Button m={10} size="md" onClick={submitForm}>
  //         Submit answers
  //       </Button>
  //     </Stack>
  //   );
  // }

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
