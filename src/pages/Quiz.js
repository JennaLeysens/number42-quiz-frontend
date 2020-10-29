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
  const quizId = quiz ? quiz.id : null;
  const [newRound, setAddRound] = useState([]);

  useEffect(() => {
    dispatch(fetchQuiz(id));
  }, [dispatch, id]);

  function createRound() {
    dispatch(addRound(quizId));
  }

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  const roundsSorted = quiz.rounds
    ? quiz.rounds.sort(function (a, b) {
        return a.roundNumber - b.roundNumber;
      })
    : null;

  const rounds = quiz ? quiz.rounds : null;

  const answersArrayofArrays = rounds
    ? rounds.map((round) => {
        return round.answers || [];
      })
    : null;

  const roundTotals = answersArrayofArrays
    ? answersArrayofArrays.map((answers) => {
        return answers.reduce((acc, answer) => {
          return acc + answer.points || 0;
        }, 0);
      })
    : null;
  console.log("round totals", roundTotals);

  const totalPoints = roundTotals
    ? roundTotals.reduce((acc, points) => {
        return acc + points;
      }, 0)
    : null;

  return (
    <Box>
      <Heading>Edition number {quiz.editionNumber}</Heading>
      <Heading marginBottom={5} as="h2" size="xl"></Heading>
      <Box>
        {rounds
          ? rounds.map((round) => {
              const roundTotal = round.answers
                ? round.answers.reduce((acc, answer) => {
                    return acc + answer.points;
                  }, 0)
                : null;
              return (
                <Box>
                  <Heading as="h4" size="md">
                    Round {round.roundNumber}
                  </Heading>
                  <Accordion>
                    <Round round={round}></Round>
                  </Accordion>
                  <Box marginTop={4}>Points {roundTotal}</Box>
                </Box>
              );
            })
          : null}
      </Box>
      <Box marginTop={4}> {newRound}</Box>
      <Button variantColor="red" onClick={createRound}>
        +
      </Button>
      Round
      <Box marginTop={4}>
        <Heading as="h4" size="md">
          Total points:{totalPoints}
        </Heading>
      </Box>
    </Box>
  );
}
