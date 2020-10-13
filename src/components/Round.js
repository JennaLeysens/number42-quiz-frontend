import React, { useState } from "react";
import { Heading, Button, Box } from "@chakra-ui/core";
import AnswerForm from "../pages/AnswerForm";

export default function Round() {
  const [addAnswer, setAddAnswer] = useState([]);

  return (
    <Box>
      <Box>
        <Heading marginBottom={3} as="h5" size="sm">
          Add your answers
        </Heading>
        <AnswerForm></AnswerForm> {addAnswer}
        <Button>+</Button>Add answer
      </Box>
    </Box>
  );
}
