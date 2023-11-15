"use client"

import React, { useState } from 'react';
import { Map } from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/app/components/Navbar';
import { layers } from '@/app/utils/layers';

interface Coordinates {
  latitude: number
  longitude: number
  zoom: number
  pitch: number
  bearing: number
}

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

  function getCoordinates(): Coordinates {
    switch (city) {
      case 'LA':
        return {
          latitude: 34.137187,
          longitude: -118.347238,
          zoom: 13,
          pitch: 0,
          bearing: 0
        }
      case 'NYC':
        return {
          latitude: 40.712776,
          longitude: -74.005974,
          zoom: 13,
          pitch: 0,
          bearing: 0
        }
      default: 
        return {
          latitude: 39,
          longitude: -95,
          zoom: 3,
          pitch: 0,
          bearing: 0
        }
    }
  }

  return (
    <Box>
      <Navbar city={city} handleCityChange={handleCityChange} data={data} setData={setData} layer={layer} handleLayerChange={handleLayerChange} layers={layers}/>
      <DeckGL 
        initialViewState={getCoordinates()}
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
