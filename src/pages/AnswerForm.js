import React from "react";
import {
  Heading,
  Stack,
  Input,
  NumberInput,
  FormLabel,
  Button,
  Box,
  Select,
} from "@chakra-ui/core";
import "./AnswerForm.css";

export default function AnswerForm() {
  return (
    <Box>
      <Box className="container" spacing={3}>
        <Heading>Add your answers here</Heading>
        <Stack>
          <FormLabel>Round number</FormLabel>
          <Select w={300}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Select>
        </Stack>
        <Stack isInline>
          <Input w={700} size="lg"></Input>
          <FormLabel>Points</FormLabel>
          <NumberInput size="sm"></NumberInput>
        </Stack>
        <Stack isInline>
          <Input w={700} size="lg"></Input>
          <FormLabel>Points</FormLabel>
          <NumberInput size="sm"></NumberInput>
        </Stack>
        <Stack isInline>
          <Input w={700} size="lg"></Input>
          <FormLabel>Points</FormLabel>
          <NumberInput size="sm"></NumberInput>
        </Stack>
        <Stack isInline>
          <Input w={700} size="lg"></Input>
          <FormLabel>Points</FormLabel>
          <NumberInput size="sm"></NumberInput>
        </Stack>
        <Stack isInline>
          <Input w={700} size="lg"></Input>
          <FormLabel>Points</FormLabel>
          <NumberInput size="sm"></NumberInput>
        </Stack>
      </Box>{" "}
      <Button m={10} size="md">
        Submit answers
      </Button>
    </Box>
  );
}
