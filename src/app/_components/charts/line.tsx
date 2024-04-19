'use client'
import React, { MutableRefObject, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
  PointElement,
  ChartOptions,
  CategoryScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { lineChartData } from '@/app/_utils/constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);



interface ChartProps {
  data: {labels: string[], data: number[]};
  options?: ChartOptions<'line'>;
  chartRef?: MutableRefObject<any>
}

export const LineChart: React.FC<ChartProps> = ({ data, options, chartRef }) => {
  const [chartData, setChartData] = useState<{labels: ChartData<'line'>['labels'], datasets: ChartData<'line'>['datasets']}>({
    datasets: [{ data: [] }],
    labels: [],
 });

 useEffect(() => {
    // Create a new object for datasets and labels to ensure React detects the change
    const newDatasets: ChartData<'line'>['datasets'] = [...lineChartData.datasets];
    let newLabels:ChartData<'line'>['labels'] = [...lineChartData.labels || []];

    if (data.data) {
      newDatasets[0].data = data.data;
    }
    if (data.labels) {
      newLabels = data.labels;
    }

    // Update the state with the new object, which will trigger a re-render
    setChartData({
      datasets: newDatasets,
      labels: newLabels,
    });
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [data]);

  return <Line ref={chartRef} options={options} data={{labels:chartData.labels, datasets: chartData.datasets}} />;
}
