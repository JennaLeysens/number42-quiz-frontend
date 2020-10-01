import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/core";

export default function Accordian(props) {
  return (
    <Box>
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionHeader _expanded={{ bg: "tomato", color: "white" }}>
            <Box flex="1" textAlign="left">
              Round {props.id}
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
