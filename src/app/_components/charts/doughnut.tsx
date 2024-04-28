'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import React, { Key, MutableRefObject, useEffect, useState } from 'react'
import { doughnutChartData } from "@/app/_utils/constants";


interface DoughnutChartProps {
  chartRef?: MutableRefObject<any>
  data:{labels: ChartData<'doughnut'>['labels'], datasets: ChartData<'doughnut'>['datasets']}, 
  options: ChartOptions<'doughnut'>
}
const DoughnutChart = ({data, options, chartRef}: DoughnutChartProps) => {

  return (
    <Doughnut ref={chartRef}  data={data} options={options} />
  )
}

export default DoughnutChart