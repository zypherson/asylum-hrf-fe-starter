import React from 'react';
import Plot from 'react-plotly.js';

export const HeatMap = () => {
  const data = {
    x: ['Office A', 'Office B', 'Office C'],
    y: ['2018', '2019', '2020'],
    z: [
      [0.2, 0.4, 0.6], // Grant rate data for 2018
      [0.5, 0.3, 0.7], // Grant rate data for 2019
      [0.8, 0.2, 0.5], // Grant rate data for 2020
    ],
  };

  return (
    <div>
      <h2>Grant Rate Data</h2>
      <Plot
        data={[
          {
            x: data.x,
            y: data.y,
            z: data.z,
            colorscale: [
              ['0.0', 'rgb(165,0,38)'],
              ['0.111111111111', 'rgb(215,48,39)'],
              ['0.222222222222', 'rgb(244,109,67)'],
              ['0.333333333333', 'rgb(253,174,97)'],
              ['0.444444444444', 'rgb(254,224,144)'],
              ['0.555555555556', 'rgb(224,243,248)'],
              ['0.666666666667', 'rgb(171,217,233)'],
              ['0.777777777778', 'rgb(116,173,209)'],
              ['0.888888888889', 'rgb(69,117,180)'],
              ['1.0', 'rgb(49,54,149)'],
            ],
            type: 'heatmap',
          },
        ]}
        layout={{
          title: 'Grant Rate Data',
          height: 500,
          width: 700,
          paper_bgcolor: 'white',
          hoverlabel: {
            bordercolor: 'white',
          },
        }}
      />
    </div>
  );
};