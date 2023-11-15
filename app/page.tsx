"use client"

import React, { useState } from 'react';
import { Map } from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/app/components/Navbar';
import { layers } from '@/app/utils/layers';
import { getCoordinates } from '@/app/utils/coordinates';

export default function Home() {
  const [city, setCity] = useState<string>('');
  const [layer, setLayer] = useState<string>('');
  const [data, setData] = useState<string>('');

  function handleCityChange(pCity: string): void {
    setCity(pCity)
    setData('')
    setLayer('')
  }

  function handleLayerChange(pLayer: string): void {
    setLayer(pLayer)
    setData('')
  }

  return (
    <Box>
      <Navbar city={city} handleCityChange={handleCityChange} data={data} setData={setData} layer={layer} handleLayerChange={handleLayerChange} layers={layers}/>
      <DeckGL 
        initialViewState={getCoordinates(city)}
        controller={true}
        layers={data ? [layers[city][layer][data]] : []}
      >
        <Map
          mapboxAccessToken='pk.eyJ1IjoieXV5YWZ1amltb3RvIiwiYSI6ImNsbm5wNXVwMzA3Y3Iya3Ftd2c1MW92djkifQ.gJHn2MuzuWqhlTnVg018Eg'
          mapStyle="mapbox://styles/mapbox/dark-v10"
        />
      </DeckGL>
    </Box>
  )
}
