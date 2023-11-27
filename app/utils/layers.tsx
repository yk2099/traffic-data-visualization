import { ScatterplotLayer } from "@deck.gl/layers/typed";
import { HexagonLayer } from "@deck.gl/aggregation-layers/typed";

/* NY */
function getScatterPlotNYC(
  link: string,
  onDataLoad: () => void
): ScatterplotLayer {
  return new ScatterplotLayer({
    id: "scatterplot-layer",
    data: link,
    getPosition: (d) => [parseFloat(d.longitude), parseFloat(d.latitude)],
    getRadius: (d) => Math.sqrt(d.exits),
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 15,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getFillColor: (d) => [255, 140, 255],
    getLineColor: (d) => [124, 252, 0],
    onDataLoad,
  });
}

function getHexagonNYC(
  link: string,
  onDataLoad: () => void
): HexagonLayer<any> {
  return new HexagonLayer({
    id: "hexagon-layer",
    data: link,
    pickable: true,
    extruded: true,
    radius: 200,
    elevationScale: 4,
    getPosition: (d) => [parseFloat(d.longitude), parseFloat(d.latitude)],
    onDataLoad,
  });
}
/* */

/* LA */
function getScatterPlotLA(
  link: string,
  onDataLoad: () => void
): ScatterplotLayer {
  return new ScatterplotLayer({
    id: "scatterplot-layer",
    data: link,
    getPosition: (d) => [
      parseFloat(d.location_1.longitude),
      parseFloat(d.location_1.latitude),
    ],
    getRadius: (d) => Math.sqrt(d.exits),
    pickable: true,
    opacity: 1,
    stroked: true,
    filled: true,
    radiusScale: 15,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getFillColor: (d) => [255, 140, 255],
    getLineColor: (d) => [124, 252, 0],
    onDataLoad,
  });
}

function getHexagonLA(link: string, onDataLoad: () => void): HexagonLayer<any> {
  return new HexagonLayer({
    id: "hexagon-layer",
    data: link,
    pickable: true,
    extruded: true,
    radius: 200,
    elevationScale: 4,
    getPosition: (d) => [
      parseFloat(d.location_1.longitude),
      parseFloat(d.location_1.latitude),
    ],
    onDataLoad,
  });
}
/* */

export const layers: any = (onDataLoad: () => void) => {
  return {
    NYC: {
      "Scatter Plot": {
        Tree: getScatterPlotNYC(
          "https://data.cityofnewyork.us/resource/uvpi-gqnh.json",
          onDataLoad
        ),
        Collisions: getScatterPlotNYC(
          "https://data.cityofnewyork.us/resource/h9gi-nx95.json",
          onDataLoad
        ),
      },
      Hexagon: {
        Tree: getHexagonNYC(
          "https://data.cityofnewyork.us/resource/uvpi-gqnh.json",
          onDataLoad
        ),
        Collisions: getHexagonNYC(
          "https://data.cityofnewyork.us/resource/h9gi-nx95.json",
          onDataLoad
        ),
      },
    },
    LA: {
      "Scatter Plot": {
        Businesses: getScatterPlotLA(
          "https://data.lacity.org/resource/6rrh-rzua.json?$limit=100000&$WHERE=location_1 IS NOT NULL",
          onDataLoad
        ),
        "Grocery Stores": getScatterPlotLA(
          "https://data.lacity.org/resource/g986-7yf9.json?$limit=100000&$WHERE=location_1 IS NOT NULL",
          onDataLoad
        ),
        "Building Permits": getScatterPlotLA(
          "https://data.lacity.org/resource/nbyu-2ha9.json?$limit=100000&$WHERE=location_1 IS NOT NULL",
          onDataLoad
        ),
      },
      Hexagon: {
        Businesses: getHexagonLA(
          "https://data.lacity.org/resource/6rrh-rzua.json?$WHERE=location_1 IS NOT NULL",
          onDataLoad
        ),
        "Grocery Stores": getHexagonLA(
          "https://data.lacity.org/resource/g986-7yf9.json?$WHERE=location_1 IS NOT NULL",
          onDataLoad
        ),
        "Building Permits": getHexagonLA(
          "https://data.lacity.org/resource/nbyu-2ha9.json?$limit=100000&$WHERE=location_1 IS NOT NULL",
          onDataLoad
        ),
      },
    },
  };
};
