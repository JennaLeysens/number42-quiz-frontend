import React from "react";
import { Image, Button } from "@chakra-ui/core";
import globalquiz from "../globalquiz.png";

export default function Home() {
  return (
    <div>
      <Image marginBottom={20} w={1500} src={globalquiz}></Image>
      <div>
        <Button>Start keeping score!</Button>
      </div>
    </div>
  );
}
