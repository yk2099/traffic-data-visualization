"use client"

import React, { useState } from 'react';
import { Map } from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { HexagonLayer } from '@deck.gl/aggregation-layers/typed';
import { Box } from '@chakra-ui/react';
import { Navbar } from '@/components/Navbar';

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

  /* NY */
  function getScatterPlotNYC( link: string ): ScatterplotLayer {
    return new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: link,
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

  function getHexagonNYC( link: string ): HexagonLayer<any> {
    return new HexagonLayer({
      id: 'hexagon-layer',
      data: link,
      pickable: true,
      extruded: true,
      radius: 200,
      elevationScale: 4,
      getPosition: d => [ parseFloat(d.longitude),parseFloat(d.latitude)],
    });
  }
  /* */

  /* LA */
  function getScatterPlotLA( link: string ): ScatterplotLayer {
    return new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: link,
      getPosition: d => [ parseFloat(d.location_1.longitude),parseFloat(d.location_1.latitude)],
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

  function getHexagonLA( link: string ): HexagonLayer<any> {
    return new HexagonLayer({
      id: 'hexagon-layer',
      data: link,
      pickable: true,
      extruded: true,
      radius: 200,
      elevationScale: 4,
      getPosition: d => [ parseFloat(d.location_1.longitude),parseFloat(d.location_1.latitude)],
    });
  }
  /* */

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

  const layers: any = {
    "NYC": {
      "Scatter Plot": {
        "Tree": getScatterPlotNYC("https://data.cityofnewyork.us/resource/uvpi-gqnh.json"),
        "Collisions": getScatterPlotNYC("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
      },
      "Hexagon": {
        "Tree": getHexagonNYC("https://data.cityofnewyork.us/resource/uvpi-gqnh.json"),
        "Collisions": getHexagonNYC("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
      }
    },
    "LA": {
      "Scatter Plot": {
        "Businesses": getScatterPlotLA("https://data.lacity.org/resource/6rrh-rzua.json?$limit=100000&$WHERE=location_1 IS NOT NULL")
      },
      "Hexagon": {
        "Businesses": getHexagonLA("https://data.lacity.org/resource/6rrh-rzua.json?$limit=100000&$WHERE=location_1 IS NOT NULL")
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
