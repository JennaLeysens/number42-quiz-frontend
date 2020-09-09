import React, { useState } from "react";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizAdded } from "../store/User/actions";

export default function Quiz() {
  const [date, setDate] = useState(() => new Date());
  const [edition, setEdition] = useState();
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  const [team3, setTeam3] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const team = [team1, team2, team3];

  function submitForm() {
    dispatch(quizAdded(edition, date, team));
  }

  return (
    <Box>
      <Heading>I'm starting a quiz!</Heading>
      <Stack>
        <FormLabel>Edition number</FormLabel>
        <Input
          w={200}
          size="sm"
          value={edition}
          onChange={(e) => setEdition(e.target.value)}
        ></Input>
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
      <Stack>
        <FormLabel>Team member(s)</FormLabel>
        <Input value={team1} onChange={(e) => setTeam1(e.target.value)}></Input>
        <Input value={team2} onChange={(e) => setTeam2(e.target.value)}></Input>
        <Input value={team3} onChange={(e) => setTeam3(e.target.value)}></Input>
      </Stack>
      <Button margin={5} onClick={submitForm}>
        Start quiz
      </Button>
    </Box>
  );
}
