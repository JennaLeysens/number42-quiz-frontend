import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heading, Box, Button } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import AnswerForm from "../pages/AnswerForm";
import { useParams } from "react-router-dom";
import { fetchQuiz } from "../store/User/actions";
import { addRound } from "../store/User/actions";

export default function Quiz() {
  const { id } = useParams();
  const user = useSelector(selectUser);
  console.log(user.quizDetails);
  const roundNumber = user.quizDetails
    ? user.quizDetails.rounds.length + 1
    : null;
  console.log("new roundNumber", roundNumber);
  const dispatch = useDispatch();
  const quiz = user.quizDetails;
  const isLoading = !quiz;

  useEffect(() => {
    dispatch(fetchQuiz(id));
  }, [dispatch, id]);

  const quizId = id;

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  return (
    <Box>
      <Box>
        <Heading>Edition number {quiz.editionNumber}</Heading>
        <Heading as="h2" size="xl">
          Team: {quiz.teamMembers}
        </Heading>
        <Box>
          <Button onClick={() => dispatch(addRound(quizId, roundNumber))}>
            New round
          </Button>
          <AnswerForm></AnswerForm>
        </Box>
        <Box>
          New answer
          <Button>+</Button>
        </Box>
      </Box>
    </Box>
  );
}
