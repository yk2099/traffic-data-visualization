import { Text, Flex, Heading, Box } from "@chakra-ui/react";
import { SelectComponent } from "../Select";

interface Props {
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  data: string
  setData: React.Dispatch<React.SetStateAction<string>>
  layer: string
  setLayer: React.Dispatch<React.SetStateAction<string>>
}

export function Navbar({ city, setCity, data, setData, layer, setLayer}: Props ) {
  return (
    <Flex color={'white'} w={'100%'} p={'0.5rem'} justifyContent={'space-between'} position={'absolute'} top={0} zIndex={1}>
      <Heading as="h1">WebGL Traffic Visualization</Heading>
      <Flex alignItems={'center'} gap={'0.5rem'}>
        <Text >Select a Dataset: </Text>
        <SelectComponent options={['City', 'NYC', 'LA']} value={city} onChange={setCity} />
        <SelectComponent options={['Layer', 'Scatter Plot', 'Hexagon']} value={layer} onChange={setLayer} />
        <SelectComponent options={['Data', 'Tree', 'Traffic']} value={data} onChange={setData} />
      </Flex>
    </Flex>
  )
}