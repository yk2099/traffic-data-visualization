import { Text, Flex, Heading, Box } from "@chakra-ui/react";
import { SelectComponent } from "../Select";

export function Navbar() {
  return (
    <Flex color={'whiteAlpha.900'} w={'100%'} p={'0.5rem'} justifyContent={'space-between'} position={'absolute'} top={0} zIndex={1}>
      <Heading as="h1">WebGL Traffic Visualization</Heading>
      <Flex alignItems={'center'} gap={'0.5rem'}>
        <Text >Select a Dataset: </Text>
        <SelectComponent options={['NYC', 'LA']} placeholder={"City"} />
        <SelectComponent options={['Tree', 'Traffic']} placeholder={"Dataset"} />
      </Flex>
    </Flex>
  )
}