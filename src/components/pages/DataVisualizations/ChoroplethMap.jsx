import React from 'react';
import Plot from 'react-plotly.js';

export const ChoroplethMap = () => {
  const locations = ['USA', 'CAN', 'MEX'];
  const z = [30, 20, 50];
  const text = ['United States', 'Canada', 'Mexico'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Choropleth Map</h2>
      <Plot
        data={[
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: locations,
            z: z,
            text: text,
            colorscale: [
              [0, 'rgb(255,78,17)'],
              [0.5, 'rgb(250,183,51)'],
              [1, 'rgb(105,179,76)'],
            ],
            colorbar: {
              title: 'Grant %',
            },
          },
        ]}
        layout={{
          title: 'Static Grant Rates by Country',
          geo: {
            showlakes: true,
            lakecolor: 'rgb(127,205,225)',
          },
          height: 500,
          width: 700,
        }}
      />
    </div>
  );
};