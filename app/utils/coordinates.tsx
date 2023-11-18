interface Coordinates {
  latitude: number
  longitude: number
  zoom: number
  pitch: number
  bearing: number
}

export function getCoordinates(city: string): Coordinates {
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