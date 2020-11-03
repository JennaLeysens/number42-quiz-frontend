import React, { useState } from "react";
import { Heading, Stack, Input, FormLabel, Button, Box } from "@chakra-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuiz } from "../store/User/actions";
import "./Forms.css";

export default function QuizForm() {
  const [date, setDate] = useState(() => new Date());
  const [editionNumber, setEdition] = useState();
  const [teamMembers, setTeamMembers] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  function submitForm() {
    dispatch(addQuiz(editionNumber, date, teamMembers));
    history.push("/quizzes");
  }

  function newTeamMember() {
    setTeamMembers(teamMembers.concat(""));
  }

  return (
    <Box className="forms">
      <Heading marginBottom={10}>Start a quiz!</Heading>
      <Box>
        <FormLabel isRequired>Edition number</FormLabel>
        <Input
          size="sm"
          value={editionNumber}
          onChange={(e) => setEdition(e.target.value)}
        ></Input>
      </Box>
      <Box paddingTop={5}>
        <FormLabel isRequired>Quiz date </FormLabel>
        <DatePicker
          selected={date}
          value={date}
          onChange={(nextValue) => {
            setDate(nextValue);
          }}
          inline
        />
      </Box>
      <Box>
        <Box p={5}>
          <FormLabel>Team name</FormLabel>
          <Input></Input>
        </Box>
        <Box p={5}>
          <FormLabel>Team member(s)</FormLabel>
          {teamMembers.map((teamMember, i) => {
            return (
              <Input
                value={teamMember}
                onChange={(e) => {
                  const name = e.target.value;
                  setTeamMembers((p) => {
                    p[i] = name;
                    return [...p];
                  });
                }}
              ></Input>
            );
          })}
        </Box>
        <Button onClick={newTeamMember}>+</Button> New team member
      </Box>
      <Button variantColor="red" margin={5} onClick={submitForm}>
        Start quiz
      </Button>
    </Box>
  );
}
