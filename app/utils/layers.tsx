import { ScatterplotLayer } from "@deck.gl/layers/typed";
import { HexagonLayer } from "@deck.gl/aggregation-layers/typed";

/* NY */
function getScatterPlotNYC(link: string): ScatterplotLayer {
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
  });
}

function getHexagonNYC(link: string): HexagonLayer<any> {
  return new HexagonLayer({
    id: "hexagon-layer",
    data: link,
    pickable: true,
    extruded: true,
    radius: 200,
    elevationScale: 4,
    getPosition: (d) => [parseFloat(d.longitude), parseFloat(d.latitude)],
  });
}
/* */

/* LA */
function getScatterPlotLA(link: string): ScatterplotLayer {
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
  });
}

function getHexagonLA(link: string): HexagonLayer<any> {
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
  });
}
/* */

export const layers: any = {
  NYC: {
    "Scatter Plot": {
      Tree: getScatterPlotNYC(
        "https://data.cityofnewyork.us/resource/uvpi-gqnh.json"
      ),
      Collisions: getScatterPlotNYC(
        "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
      ),
    },
    Hexagon: {
      Tree: getHexagonNYC(
        "https://data.cityofnewyork.us/resource/uvpi-gqnh.json"
      ),
      Collisions: getHexagonNYC(
        "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
      ),
    },
  },
  LA: {
    "Scatter Plot": {
      Businesses: getScatterPlotLA(
        "https://data.lacity.org/resource/6rrh-rzua.json?$limit=100000&$WHERE=location_1 IS NOT NULL"
      ),
    },
    Hexagon: {
      Businesses: getHexagonLA(
        "https://data.lacity.org/resource/6rrh-rzua.json?$limit=100000&$WHERE=location_1 IS NOT NULL"
      ),
    },
  },
};
