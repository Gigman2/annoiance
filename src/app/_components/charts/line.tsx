'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Data sent',
      data: labels.map(() => faker.number.int({ min: 0, max: 7 })),
      borderColor: 'rgb(59, 50, 16)',
      backgroundColor: 'rgba(59, 50, 16, 1)',
      pointRadius: 0,
      tension: 0.1
    },
    { 
      label: 'Data received',
      data: labels.map(() => faker.number.int({ min: 0, max: 7 })),
      borderColor: 'rgb(255, 191, 0)',
      backgroundColor: 'rgba(255, 191, 0, 1)',
      pointRadius: 0,
      tension:0.1
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
