import { Text, Flex, Heading, Box } from '@chakra-ui/react'
import { SelectComponent } from '../Select'

interface Props {
    city: string
    handleCityChange: (pCity: string) => void
    layer: string
    handleLayerChange: (pLayer: string) => void
    data: string
    setData: React.Dispatch<React.SetStateAction<string>>
    layers: any
}

export function Navbar({
    city,
    handleCityChange,
    layer,
    handleLayerChange,
    data,
    setData,
    layers,
}: Props) {
    return (
        <Flex
            color={'white'}
            w={'100%'}
            p={'0.5rem'}
            justifyContent={'space-between'}
            position={'absolute'}
            top={0}
            zIndex={1}
        >
            <Heading as="h1">WebGL Data Visualization</Heading>
            <Flex alignItems={'center'} gap={'0.5rem'}>
                <Text>Select a Dataset: </Text>
                <SelectComponent
                    options={Object.keys(layers())}
                    value={city}
                    onChange={handleCityChange}
                    placeholder="City"
                />
                <SelectComponent
                    options={city ? Object.keys(layers()[city]) : []}
                    value={layer}
                    onChange={handleLayerChange}
                    placeholder="Layer"
                />
                <SelectComponent
                    options={layer ? Object.keys(layers()[city][layer]) : []}
                    value={data}
                    onChange={setData}
                    placeholder="Data"
                />
            </Flex>
        </Flex>
    )
}
