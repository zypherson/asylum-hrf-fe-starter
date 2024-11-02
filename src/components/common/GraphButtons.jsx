import { useAppContext } from '../../context/AppContext.jsx';
import { mapTypes } from '../pages/DataVisualizations/getMapView.jsx';

const { ScatterPlot, ChoroplethMap, HeatMap } = mapTypes;

export const GraphButtons = ({ mapView, setMapView }) => {
  const { updateQuery, clearQuery } = useAppContext();

  return (
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
  );
};
