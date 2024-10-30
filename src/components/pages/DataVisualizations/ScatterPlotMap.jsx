import Plot from 'react-plotly.js';

export const ScatterPlot = () => {
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  const grantRates = [10, 15, 20, 25, 30, 35, 40, 50];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '400px' }}>
      <h2>Asylum Grant Rate Over Time</h2>
      <Plot
        data={[
          {
            x: years,
            y: grantRates,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
          },
        ]}
        layout={{
          title: 'Asylum Grant Rate Over Time',
          xaxis: { title: 'Fiscal Year' },
          yaxis: { title: 'Grant Rate (%)', range: [0, 100] },
          height: 500,
          width: 700,
          paper_bgcolor: '#f9f9f9',
        }}
      />
    </div>
  );
};