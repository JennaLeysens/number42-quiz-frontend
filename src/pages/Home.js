import React from "react";
import { Image, Button, Heading } from "@chakra-ui/core";
import globalquiz from "../globalquiz.png";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div>
      <Image marginBottom={20} w={1500} src={globalquiz}></Image>
      <div>
        <Heading padding={6} as="h3" size="lg">
          Keep track of your quiz answers and score!
        </Heading>
        <Button onClick={() => history.push("/answers")}>
          Start keeping score!
        </Button>
      </div>
    </div>
  );
}
