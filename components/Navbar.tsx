import { Button, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex p={'0.5rem'} boxShadow='base'>
      <Heading as="h1">WebGL Traffic Visualization</Heading>
      <Spacer />
      <HStack>
        <Button bg={'transparent'}>Home</Button>
        <Button bg={'transparent'}>About</Button>
      </HStack>
    </Flex>
  )
}