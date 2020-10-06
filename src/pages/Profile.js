import React, { useEffect } from "react";
import { Box, Heading, Link } from "@chakra-ui/core";
import { fetchQuizzes } from "../store/User/actions";
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
      <Heading>{user.name}'s quizzes</Heading>
      {quizzesSorted
        ? quizzesSorted.map((quiz) => {
            return (
              <Link href={`/quizzes/${quiz.id}`}>
                <Box>
                  Edition number: {quiz.editionNumber} Team: {quiz.teamMembers}
                </Box>
              </Link>
            );
          })
        : null}
    </Box>
  );
}
