import React, { useState } from "react";
import { Button, Box, Icon, Heading } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../store/User/selector";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);
  const user = useSelector(selectUser);
  const quiz = user.quizDetails;
  const rounds = quiz ? quiz.rounds : null;
  console.log(rounds);

  return (
    <Box>
      <Heading size="md">{props.title}</Heading>
      <Box>
        <Button
          marginLeft={2}
          variantColor="red"
          onClick={() => setIsShowing((v) => !v)}
        >
          {isShowing ? (
            <Icon name="chevron-down" size="24px" />
          ) : (
            <Icon name="chevron-right" size="24px" />
          )}
        </Button>
      </Box>
      {isShowing && <Box>{props.children}</Box>}
    </Box>
  );
}
