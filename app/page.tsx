'use client'

import React, { useEffect, useState } from 'react'
import { Map } from 'react-map-gl'
import DeckGL from '@deck.gl/react/typed'
import { Box, Flex } from '@chakra-ui/react'
import { Navbar } from '@/app/components/Navbar'
import { layers } from '@/app/utils/layers'
import { getCoordinates } from '@/app/utils/coordinates'
import { Loading } from './components/Loading'

export default function Home() {
    const [city, setCity] = useState<string>('')
    const [layer, setLayer] = useState<string>('')
    const [data, setData] = useState<string>('')
    const [loadingVisible, setLoadingVisible] = useState<boolean>(true)

    function handleCityChange(pCity: string): void {
        setCity(pCity)
        setData('')
        setLayer('')
    }

    function handleLayerChange(pLayer: string): void {
        setLayer(pLayer)
        setData('')
    }

    function onDataLoad() {
        setLoadingVisible(false)
    }

    useEffect(() => {
        data ? setLoadingVisible(true) : setLoadingVisible(false)
    }, [data])

    return (
        <Box h={'100%'} w={'100%'}>
            <Navbar
                city={city}
                handleCityChange={handleCityChange}
                data={data}
                setData={setData}
                layer={layer}
                handleLayerChange={handleLayerChange}
                layers={layers}
            />
            <DeckGL
                initialViewState={getCoordinates(city)}
                controller={true}
                layers={data ? [layers(onDataLoad)[city][layer][data]] : []}
            >
                <Map
                    mapboxAccessToken={process.env.NEXT_PUBLIC_WEBGL_KEY}
                    mapStyle="mapbox://styles/mapbox/dark-v10"
                />
            </DeckGL>
            {loadingVisible && (
                <Flex
                    h={'100%'}
                    w={'100%'}
                    justify={'center'}
                    align={'center'}
                    backgroundColor={'rgba(0, 0, 0, 0.5)'}
                    position={'absolute'}
                    zIndex={1}
                >
                    <Loading />
                </Flex>
            )}
        </Box>
    )
}
