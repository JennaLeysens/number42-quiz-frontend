import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heading, Box, Button } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import Round from "../components/Round";
import AnswerForm from "../pages/AnswerForm";
import { useParams } from "react-router-dom";
import { fetchQuiz } from "../store/User/actions";

export default function Quiz() {
  const { id } = useParams();
  console.log("id", id);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const quiz = user.quizDetails;
  const isLoading = !quiz;

  useEffect(() => {
    dispatch(fetchQuiz(id));
  }, [dispatch, id]);

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
        <Round></Round>
        <Box>
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
