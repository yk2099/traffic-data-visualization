import React from "react";
import { HStack, Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <HStack>
      <Spinner size={"xl"} thickness={"0.25rem"} color={"white"} />
    </HStack>
  );
}
