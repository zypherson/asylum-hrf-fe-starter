import { useState } from 'react';
import { getMapView, mapTypes } from './getMapView.jsx';
import { GraphButtons } from '../../common/GraphButtons.jsx';
import { Loading } from '../../common/Loading.jsx';
import { getGraphsHeader } from './getGraphsHeader.js';

export const GraphsPage = () => {
  const [mapView, setMapView] = useState(mapTypes.ScatterPlot);

  return (
    <div className='bg-[#f9f9f9]'>
      <div className='plot-main flex w-[70%] gap-24 mx-auto justify-content-center pl-10'>
        <div className='plot-main flex flex-col'>
          <h1 className='py-5'>{getGraphsHeader(mapView)}</h1>
          <section className='maps'>{getMapView(mapView)}</section>
        </div>
        <GraphButtons mapView={mapView} setMapView={setMapView} />
      </div>
      <Loading />
    </div>
  );
};
