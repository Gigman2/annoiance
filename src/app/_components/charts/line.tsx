'use client'
import React, { MutableRefObject, useEffect } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);



interface ChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
  chartRef?: MutableRefObject<any>
}

export const LineChart: React.FC<ChartProps> = ({ data, options, chartRef }) => {
  useEffect(() => {
    console.log(data)
    const chart = chartRef?.current;
    if(chart){
      chart.update();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
  return <Line ref={chartRef} options={options} data={data} />;
}
