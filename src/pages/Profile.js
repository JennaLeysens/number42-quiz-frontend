import React from "react";
import { Box, Heading, Link } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../store/User/selector";

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <Box>
      <Heading>{user.name}'s quizzes</Heading>
      {user.quizzes
        ? user.quizzes.map((quiz) => {
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
