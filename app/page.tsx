"use client"

import React from 'react';
import { Map } from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import {LineLayer} from '@deck.gl/layers/typed';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

export default function Home() {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <Box>
      <Navbar />
      <DeckGL 
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <Map
          mapboxAccessToken='pk.eyJ1IjoieXV5YWZ1amltb3RvIiwiYSI6ImNsbm5wNXVwMzA3Y3Iya3Ftd2c1MW92djkifQ.gJHn2MuzuWqhlTnVg018Eg'
          mapStyle="mapbox://styles/mapbox/dark-v10"
        />
      </DeckGL>
    </Box>
  )
}
