import React, { useEffect } from "react";
import { Box, Heading, Link, Button } from "@chakra-ui/core";
import { fetchQuizzes, deleteQuiz } from "../store/User/actions";
import { selectUser } from "../store/User/selector";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const quizzes = user.quizzes;

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const quizzesSorted = quizzes
    ? quizzes.sort(function (a, b) {
        return a.editionNumber - b.editionNumber;
      })
    : null;

  return (
    <Box>
      <Heading marginBottom={10}>{user.name}'s quizzes</Heading>
      {quizzesSorted
        ? quizzesSorted.map((quiz) => {
            return (
              <Box padding={2}>
                <Link href={`/quizzes/${quiz.id}`}>
                  <Box>
                    <b>Edition number: </b>
                    {quiz.editionNumber} {""}
                    <b>Team name: </b>
                    {quiz.teamName} {""}
                    <b>Team:</b> {quiz.teamMembers.join(", ")}
                  </Box>
                </Link>
                <Button
                  marginTop={1}
                  variantColor="red"
                  size="xs"
                  onClick={() => dispatch(deleteQuiz(quiz.id))}
                >
                  Delete quiz
                </Button>
              </Box>
            );
          })
        : null}
    </Box>
  );
}
