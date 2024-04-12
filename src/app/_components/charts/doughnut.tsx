'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import React from 'react'

const DoughnutChart = ({data}: {data: any}) => {
  return (
    <div>
        <Doughnut data={data} />
    </div>
  )
}

export default DoughnutChart