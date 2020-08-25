import React from "react";
import {
  Heading,
  Stack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";

export default function AnswerForm() {
  return (
    <Stack spacing={3}>
      <Heading>Add your answers here</Heading>
      <Stack isInline spacing={3}>
        <Input w={700} size="lg"></Input>
        <NumberInput w={100}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Stack>
      <Stack>
        <Input w={800} size="lg"></Input>
        <Input w={800} size="lg"></Input>
        <Input w={800} size="lg"></Input>
        <Input w={800} size="lg"></Input>
      </Stack>
    </Stack>
  );
}
