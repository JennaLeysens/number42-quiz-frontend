import React, { useState } from "react";
import { Button, Box, Icon, Heading } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../store/User/selector";
import "./Accordion.css";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);
  const user = useSelector(selectUser);
  const quiz = user.quizDetails;
  const rounds = quiz ? quiz.rounds : null;
  console.log(rounds);

  return (
    <Box marginTop={4}>
      <Button
        padding={8}
        width={800}
        variant="outline"
        variantColor="red"
        onClick={() => setIsShowing((v) => !v)}
      >
        {isShowing ? (
          <Box className="accordion">
            <Heading marginRight={650} size="md">
              {props.title}
            </Heading>
            <Icon name="chevron-down" size="28px" />
          </Box>
        ) : (
          <Box className="accordion">
            <Heading marginRight={650} size="md">
              {props.title}
            </Heading>
            <Icon name="chevron-right" size="28px" />
          </Box>
        )}
      </Button>
      {isShowing && <Box>{props.children}</Box>}
    </Box>
  );
}
