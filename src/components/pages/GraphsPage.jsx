import { useState } from 'react';
import { getMapView, mapTypes } from './DataVisualizations/getMapView.jsx';

const { ScatterPlot, ChoroplethMap, HeatMap } = mapTypes;

export const GraphsPage = () => {
  const [mapView, setMapView] = useState(ScatterPlot);

  const updateQuery = () => {};

  const clearQuery = () => {};

  return (
    <div className=''>
      <h2 className=''>Graphs Container Page</h2>

      <div className='plot-main flex w-[70%] gap-24 mx-auto align-middle justify-center'>
        <section className='maps'>{getMapView(mapView)}</section>

        <section className='data-buttons flex flex-col justify-center gap-4'>
          <section className='plot-buttons flex flex-col gap-2'>
            <button className='scatter-plot bg-[#666555] text-amber-50 p-1' disabled={mapView === ScatterPlot} onClick={() => setMapView(ScatterPlot)}>
              Scatter
            </button>
            <button className='heat-map bg-[#666555] text-amber-50 p-1' disabled={mapView === HeatMap} onClick={() => setMapView(HeatMap)}>
              Heat Map
            </button>
            <button className='choropleth-map bg-[#666555] text-amber-50 p-1' disabled={mapView === ChoroplethMap} onClick={() => setMapView(ChoroplethMap)}>
              Choropleth Map
            </button>
          </section>

          <section className='query-buttons flex flex-col gap-2'>
            <button className='update-query border-amber-800 bg-white' onClick={updateQuery}>
              Update Query
            </button>
            <button className='clear-query bg-white' onClick={clearQuery}>
              Clear Query
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};