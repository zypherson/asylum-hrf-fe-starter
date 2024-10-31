import React from 'react';
import Plot from 'react-plotly.js';
import { useAppContext } from '../../../context/AppContext.jsx';

export const HeatMap = () => {
  const { graphData, getYears } = useAppContext();

  const yearResults = graphData?.yearResults ?? [];
  const officeNames = yearResults.map(({ yearData }) => yearData.map(({ office }) => office))[0];
  const grantRates = yearResults.map(r => r.yearData.map(({ granted }) => granted));
  const data = { x: officeNames, y: getYears(), z: grantRates };

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