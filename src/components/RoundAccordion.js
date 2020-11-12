import React, { useState } from "react";
import { Button, Box, Icon, Heading, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../store/User/selector";
import "./RoundAccordion.css";

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
        <Box>
          <Box className="accordion">
            <Heading marginRight={650} size="md">
              {props.title}
            </Heading>
            <Icon
              name={isShowing ? "chevron-down" : "chevron-right"}
              size="28px"
            />
          </Box>
        </Box>
      </Button>
      <Box className="roundTotalContainer">
        <Text>Round total: {props.total}</Text>
      </Box>
      {isShowing && <Box>{props.children}</Box>}
    </Box>
  );
}
