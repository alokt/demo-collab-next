"use client";

import { Button, Flex, useColorMode } from "@chakra-ui/react";

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex align="center" justify="center" height="100vh" direction="column">
        <Button size="lg" onClick={() => toggleColorMode()}>
          Toggle Mode
        </Button>
      </Flex>
    </div>
  );
}
