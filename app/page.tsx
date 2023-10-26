"use client"

import React, { useState } from 'react';
import { Map } from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { HexagonLayer } from '@deck.gl/aggregation-layers/typed';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar';

const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

export default function Home() {
  const [city, setCity] = useState('LA');
  const [data, setData] = useState('Tree');

  function getHexagonNYC() {
    return new HexagonLayer({
      id: 'hexagon-layer',
      data: 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json',
      pickable: true,
      extruded: true,
      radius: 200,
      elevationScale: 4,
      getPosition: d => [ parseFloat(d.longitude),parseFloat(d.latitude)],
    });
  }

  function getHexagonLA() {
    return new HexagonLayer({
      id: 'hexagon-layer',
      data: 'https://data.lacity.org/resource/vt5t-mscf.json',
      pickable: true,
      extruded: true,
      radius: 200,
      elevationScale: 4,
      getPosition: d => [ parseFloat(d.location_1.latitude),parseFloat(d.location_1.longitude)],
    });
  }

  function getScatterPlotLA() {
    return new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: 'https://data.lacity.org/resource/vt5t-mscf.json',
      getPosition: d => [ parseFloat(d.location_1.latitude),parseFloat(d.location_1.longitude)],
      getRadius: d => Math.sqrt(d.exits),
      pickable: true,
      opacity: 1,
      stroked: true,
      filled: true,
      radiusScale: 15,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      lineWidthMinPixels: 1,
      getFillColor: d => [255, 140, 255],
      getLineColor: d => [124,252,0]
    })
  };

  function getScatterPlotNYC() {
    return new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: 'https://data.cityofnewyork.us/resource/uvpi-gqnh.json',
      getPosition: d => [ parseFloat(d.longitude),parseFloat(d.latitude)],
      getRadius: d => Math.sqrt(d.exits),
      pickable: true,
      opacity: 1,
      stroked: true,
      filled: true,
      radiusScale: 15,
      radiusMinPixels: 1,
      radiusMaxPixels: 100,
      lineWidthMinPixels: 1,
      getFillColor: d => [255, 140, 255],
      getLineColor: d => [124,252,0]
    })
  };

  function getCoordinates() {
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
    }
  }

  return (
    <Box>
      <Navbar city={city} setCity={setCity} data={data} setData={setData} />
      <DeckGL 
        initialViewState={getCoordinates()}
        controller={true}
        layers={[getHexagonLA()]}
      >
        <Map
          mapboxAccessToken='pk.eyJ1IjoieXV5YWZ1amltb3RvIiwiYSI6ImNsbm5wNXVwMzA3Y3Iya3Ftd2c1MW92djkifQ.gJHn2MuzuWqhlTnVg018Eg'
          mapStyle="mapbox://styles/mapbox/dark-v10"
        />
      </DeckGL>
    </Box>
  )
}
