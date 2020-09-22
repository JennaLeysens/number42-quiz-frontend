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
import { addAnswer } from "../store/User/actions";
import { useParams } from "react-router-dom";

export default function AnswerForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const [qnumber1, setQNumber1] = useState();
  const [qnumber2, setQNumber2] = useState();
  const [qnumber3, setQNumber3] = useState();
  const [qnumber4, setQNumber4] = useState();
  const [qnumber5, setQNumber5] = useState();
  const [qnumber6, setQNumber6] = useState();
  const [qnumber7, setQNumber7] = useState();
  const [qnumber8, setQNumber8] = useState();
  const [qnumber9, setQNumber9] = useState();
  const [qnumber10, setQNumber10] = useState();

  return (
    <Box>
      <Box className="container" spacing={3}>
        <Heading>Add your answers here</Heading>
        <Stack isInline>
          <Input placeholder="Type your answer here" w={700} size="lg"></Input>
          <FormLabel>Points</FormLabel>
          <NumberInput size="sm"></NumberInput>
        </Stack>
      </Box>
      <Button m={10} size="md">
        Submit answers
      </Button>
    </Box>
  );
}
