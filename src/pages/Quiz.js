import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heading, Box, Button, Text } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import { useParams } from "react-router-dom";
import { fetchQuiz } from "../store/User/actions";
import { addRound } from "../store/User/actions";
import Round from "../components/Round";
import Accordion from "../components/Accordion";

export default function Quiz() {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const roundNumber = user.quizDetails
    ? user.quizDetails.rounds.length + 1
    : null;
  const dispatch = useDispatch();
  const quiz = user.quizDetails;
  const isLoading = !quiz;

  useEffect(() => {
    dispatch(fetchQuiz(id));
  }, [dispatch, id]);

  const quizId = id;

  const [addRound, setAddRound] = useState([]);

  function newRound() {
    setAddRound(addRound.concat(<Round key={addRound.length} />));
  }

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  const roundsSorted = quiz.rounds
    ? quiz.rounds.sort(function (a, b) {
        return a.roundNumber - b.roundNumber;
      })
    : null;
  console.log(roundsSorted);

  return (
    <Box>
      <Heading>Edition number {quiz.editionNumber}</Heading>
      <Heading marginBottom={5} as="h2" size="xl"></Heading>
      <Box>
        {quiz.rounds
          ? quiz.rounds.map((round) => {
              const roundTotal = round.answers.reduce((acc, answer) => {
                return acc + answer.points;
              }, 0);
              console.log("hello");
              return (
                <Box>
                  <Heading as="h4" size="md">
                    Round {round.roundNumber}
                  </Heading>
                  <Accordion></Accordion>
                  <Box>Points {roundTotal}</Box>
                </Box>
              );
            })
          : null}
      </Box>
      <Box></Box>
      {addRound}
      <Button onClick={newRound}>+</Button>Round
    </Box>
  );
}
