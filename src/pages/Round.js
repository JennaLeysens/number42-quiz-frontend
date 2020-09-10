import React, { useState } from "react";
import {
  Heading,
  Stack,
  NumberInput,
  FormLabel,
  Button,
  Box,
} from "@chakra-ui/core";

export default function Round() {
  const [round, setRound] = useState();

  return (
    <Box>
      <Stack>
        <Heading>Round number</Heading>
        <FormLabel>Round number</FormLabel>
        <NumberInput
          w={300}
          min={1}
          max={10}
          value={round}
          onChange={(e) => setRound(e.target.value)}
        ></NumberInput>
      </Stack>
      <Button>Start</Button>
    </Box>
  );
}
