import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import { addRound } from "../store/User/actions";

export default function Round() {
  const [roundNumber, setRound] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const quizId = id;
  console.log(quizId);

  function submitForm() {
    dispatch(addRound(roundNumber, quizId));
    console.log(roundNumber, quizId);
  }

  return (
    <Box>
      <Stack>
        <Heading>Round number</Heading>
        <FormLabel>Round number </FormLabel>
        <Input
          w={300}
          value={roundNumber}
          onChange={(e) => setRound(e.target.value)}
        ></Input>
      </Stack>
      <Button onClick={submitForm}>Start</Button>
    </Box>
  );
}
