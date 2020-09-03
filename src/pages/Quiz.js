import React, { useState } from "react";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";

export default function Quiz() {
  const [date, setDate] = useState(() => new Date());
  const history = useHistory();

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
          selected={date}
          value={date}
          onChange={(nextValue) => {
            setDate(nextValue);
            console.log(nextValue);
          }}
          inline
        />
      </Stack>
      <Button onClick={() => history.push("/answers")}>Start quiz</Button>
    </Box>
  );
}
