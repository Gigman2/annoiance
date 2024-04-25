'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import React, { Key, MutableRefObject, useEffect, useRef, useState } from 'react'


interface DoughnutChartProps {
  chartRef?: MutableRefObject<any>
  data: ChartData<'doughnut'>, 
  options: ChartOptions<'doughnut'>
}
const DoughnutChart = ({data, options, chartRef}: DoughnutChartProps) => {

  return (
    <Doughnut ref={chartRef}  data={data} options={options}/>
  )
}

export default DoughnutChart