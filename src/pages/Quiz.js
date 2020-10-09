import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heading, Box, Button } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";
import { useParams } from "react-router-dom";
import { fetchQuiz } from "../store/User/actions";
import { addRound } from "../store/User/actions";
import Round from "../components/Round";
import Accordion from "../components/Accordion";

export default function Quiz() {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const quiz = user.quizDetails;
  const isLoading = !quiz;

  useEffect(() => {
    dispatch(fetchQuiz(id));
  }, [dispatch, id]);

  const quizId = quiz ? quiz.id : null;

  const [newRound, setAddRound] = useState([]);

  function createRound() {
    dispatch(addRound(quizId));
  }

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  // const roundsSorted = quiz.rounds
  //   ? quiz.rounds.sort(function (a, b) {
  //       return a.roundNumber - b.roundNumber;
  //     })
  //   : null;

  const rounds = quiz ? quiz.rounds : null;

  const answers = rounds
    ? rounds.map((round) => {
        return round.answers;
      })
    : null;

  const roundTotals = answers
    ? answers.map((answers) => {
        return answers.reduce((acc, answer) => {
          return acc + answer.points;
        }, 0);
      })
    : null;
  console.log(roundTotals);

  const points = roundTotals
    ? roundTotals.reduce((acc, points) => {
        return acc + points;
      }, 0)
    : null;

  console.log("total", points);

  return (
    <Box>
      <Heading>Edition number {quiz.editionNumber}</Heading>
      <Heading marginBottom={5} as="h2" size="xl"></Heading>
      <Box>
        {quiz.rounds
          ? quiz.rounds.map((round) => {
              const roundTotal = round.answers
                ? round.answers.reduce((acc, answer) => {
                    return acc + answer.points;
                  }, 0)
                : null;
              console.log(roundTotal + roundTotal);
              return (
                <Box>
                  <Heading as="h4" size="md">
                    Round {round.roundNumber}
                  </Heading>
                  <Accordion>
                    <Round></Round>
                  </Accordion>
                  <Box>Points {roundTotal}</Box>
                </Box>
              );
            })
          : null}
      </Box>
      <Box></Box>
      {newRound}
      <Box>
        <Heading as="h5" size="sm">
          Total points:{}
        </Heading>
      </Box>
      <Button onClick={createRound}>+</Button>Round
    </Box>
  );
}
