import React, { useState } from "react";
import AnswerForm from "./AnswerForm";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Button, Box, Text } from "@chakra-ui/core";
// import "./AnswerForm.css";
import { addAnswer } from "../store/User/actions";
import { useParams } from "react-router-dom";
import "./Round.css";

export default function Round({ round }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  // const [addAnswer] = useState([]);
  const [answer, setAnswer] = useState("");
  const [points, setPoints] = useState(null);

  const quizId = id;
  const roundId = round.id;

  function newAnswer() {
    dispatch(addAnswer(answer, points, roundId, quizId));
  }

  return (
    <Box className="round">
      <Box>
        {round.answers &&
          round.answers.map((answer) => {
            return (
              <Box>
                <Text></Text>
                <AnswerForm initialValue={answer}></AnswerForm>
              </Box>
            );
          })}
        {addAnswer}
        <Box>
          <Button
            size="sm"
            marginTop={6}
            variantColor="red"
            onClick={newAnswer}
          >
            +
          </Button>{" "}
          <Text marginTop={2}>Add answer</Text>
        </Box>
      </Box>
    </Box>
  );
}
