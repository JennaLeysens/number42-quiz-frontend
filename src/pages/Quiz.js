import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Heading, Box, Button } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import Round from "../components/Round";
import AnswerForm from "../pages/AnswerForm";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const user = useSelector(selectUser);
  console.log(user.quizzes);
  const [show, setShow] = useState(false);
  const { id } = useParams();

  if (show === true) {
    return (
      <Box>
        <AnswerForm></AnswerForm>
      </Box>
    );
  }

  return (
    <Box>
      {id === user.quizzes
        ? user.quizzes.map((quiz) => {
            return (
              <Box>
                {id === quiz.id ? (
                  <Box>
                    <Heading>Edition number {quiz.editionNumber}</Heading>
                    <Heading as="h2" size="xl">
                      Team: {quiz.teamMembers}
                    </Heading>
                    <Round></Round>
                    <Box>
                      <AnswerForm></AnswerForm>
                    </Box>
                    <Box>
                      New answer
                      <Button onClick={() => setShow(true)}>+</Button>
                    </Box>{" "}
                  </Box>
                ) : null}
              </Box>
            );
          })
        : null}
    </Box>
  );
}
