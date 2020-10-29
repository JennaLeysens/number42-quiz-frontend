import React, { useState } from "react";
import { Button, Box, Icon } from "@chakra-ui/core";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Box>
      <Box>
        <Button variantColor="red" onClick={() => setIsShowing((v) => !v)}>
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
