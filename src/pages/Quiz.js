import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heading, Box, Button } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import { useParams } from "react-router-dom";
import { fetchQuiz } from "../store/User/actions";
import { addRound } from "../store/User/actions";
import Round from "../components/Round";

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
      <Heading>Edition number {quiz.editionNumber}</Heading>
      <Heading marginBottom={5} as="h2" size="xl"></Heading>
      <Box>
        <Round></Round>
      </Box>
    </Box>
  );
}
