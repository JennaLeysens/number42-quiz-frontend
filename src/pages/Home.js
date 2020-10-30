import React from "react";
import { Box, Image, Button, Heading } from "@chakra-ui/core";
import map from "../map.png";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  return (
    <Box
      className="contentContainer"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("${map}")`,
      }}
    >
      <Box style={{ paddingTop: "200px" }}>
        <Heading p={6} as="h3" size="lg">
          Keep track of your quiz answers and score!
        </Heading>
        <Button variantColor="red" m={3} onClick={() => history.push("/quiz")}>
          Start keeping score!
        </Button>
      </Box>
    </Box>
  );
}
