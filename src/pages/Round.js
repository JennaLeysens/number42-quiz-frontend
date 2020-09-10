import React, { useState } from "react";
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

export default function Round() {
  return (
    <Box>
      <Stack>
        <FormLabel>Round number</FormLabel>
        <NumberInput w={300} min={1} max={10}></NumberInput>
      </Stack>
      <Button>Start</Button>
    </Box>
  );
}
