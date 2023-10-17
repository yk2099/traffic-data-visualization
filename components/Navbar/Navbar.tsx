import { Text, Flex, Heading, Box } from "@chakra-ui/react";
import { SelectComponent } from "../Select";

export function Navbar() {
  return (
    <Flex p={'0.5rem'} boxShadow='base' justifyContent={'space-between'}>
      <Heading as="h1">WebGL Traffic Visualization</Heading>
      <Flex alignItems={'center'} gap={'0.5rem'}>
        <Text >Select a Dataset: </Text>
        <SelectComponent options={['NYC', 'LA']} placeholder={"City"} />
        <SelectComponent options={['Tree', 'Traffic']} placeholder={"Dataset"} />
      </Flex>
    </Flex>
  )
}