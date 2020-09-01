import React, { useState } from "react";
import {
  Heading,
  Stack,
  Input,
  FormLabel,
  Button,
  Box,
  Select,
} from "@chakra-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";

export default function Quiz() {
  const [startDate, setStartDate] = useState();
  const history = useHistory();
  const selected = new Date();

  return (
    <Box>
      <Heading>I'm starting a quiz!</Heading>
      <Stack>
        <FormLabel>Edition number</FormLabel>
        <Input w={200} size="sm"></Input>
      </Stack>
      <Stack p={5}>
        <FormLabel>Quiz date</FormLabel>
        <DatePicker
          selected={selected}
          value={startDate}
          onChange={(date) => setStartDate(date, console.log(date))}
          selectsRange
          inline
        />
      </Stack>
      <Button onClick={() => history.push("/answers")}>Start quiz</Button>
    </Box>
  );
}
