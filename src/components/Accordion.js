import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Heading, Button, Box, Icon } from "@chakra-ui/core";
import { selectUser } from "../store/User/selector";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);
  const user = useSelector(selectUser);
  const rounds = user.quizDetails ? user.quizDetails.rounds : null;
  const numbers = rounds.map((round) => {
    return round.roundNumber;
  });
  const answers = rounds ? rounds.answers : null;
  console.log(answers);

  return (
    <Box>
      <Box>
        <Button onClick={() => setIsShowing((v) => !v)}>
          {isShowing ? (
            <Icon name="chevron-down" size="24px" />
          ) : (
            <Icon name="chevron-right" size="24px" />
          )}
        </Button>
      </Box>

      <Box>Points</Box>

      {isShowing && <Box>{props.children}</Box>}
    </Box>
  );
}
