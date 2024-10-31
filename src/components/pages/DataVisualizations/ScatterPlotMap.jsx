import Plot from 'react-plotly.js';
import testData from '../../../data/test_data.json';

export const ScatterPlot = () => {
  const years = testData[0].yearResults.map(({ fiscal_year }) => Number(fiscal_year));
  const grantRates = testData[0].yearResults.map(({ granted }) => granted);
  // const grantRates = [10, 15, 20, 25, 30, 35, 40, 50];

  return (
    <div className='flex flex-col align-middle min-h-[400px]'>
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