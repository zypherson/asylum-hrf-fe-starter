import { HeatMap } from './DataVisualizations/HeatMap.jsx';
import { ChoroplethMap } from './DataVisualizations/ChoroplethMap.jsx';
import { ScatterPlot } from './DataVisualizations/ScatterPlotMap.jsx';
import { useState } from 'react';

const mapTypes = {
  ScatterPlot: 'SCATTER',
  HeatMap: 'HEAT-MAP',
  ChoroplethMap: 'CHOROPLETH-MAP',
};

export const GraphsContainer = () => {
  const [mapView, setMapView] = useState(mapTypes.ScatterPlot);

  const getMapView = () => {
    switch (mapView) {
      case mapTypes.ScatterPlot: {
        return <ScatterPlot />;
      }
      case mapTypes.HeatMap: {
        return <HeatMap />;
      }
      case mapTypes.ChoroplethMap: {
        return <ChoroplethMap />;
      }
      default: {
        throw new Error(`Unhandled map type: mapView: ${mapView}`);
      }
    }
  };

  return (
    <div>
      <h2>Graphs Container Page</h2>
      <section className='plot-buttons flex flex-col gap-4'>
        <button className='scatter' disabled={mapView === mapTypes.ScatterPlot} onClick={() => setMapView(mapTypes.ScatterPlot)}>
          Scatter
        </button>
        <button className='heat-map' disabled={mapView === mapTypes.HeatMap} onClick={() => setMapView(mapTypes.HeatMap)}>
          Heat Map
        </button>
        <button className='choropleth-map' disabled={mapView === mapTypes.ChoroplethMap} onClick={() => setMapView(mapTypes.ChoroplethMap)}>
          Choropleth Map
        </button>
      </section>
      <section className='query-buttons flex flex-col gap-4'>
        <button className='update-query' onClick={() => {}}>
          Update Query
        </button>
        <button className='clear-query' onClick={() => {}}>
          Clear Query
        </button>
      </section>
      {getMapView()}
    </div>
  );
};