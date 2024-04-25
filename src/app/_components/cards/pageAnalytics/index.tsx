import React, { useEffect, useRef, useState } from 'react'
import DoughnutChart from '../../charts/doughnut'
import { linkedSites, websitePages } from '@/app/_mock/websiteData';

const PageAnalytics = ({ active }: {active: number}) => {
  const chartRef = useRef<any>(null);
  const [legendArea, setLegendArea] = useState<React.ReactNode | null>(null);
  const [pages, setPages] = useState<string[]>([]);
  const [chartData, setChartData] = useState<{labels: string[], data: number[][]}>({
    labels: [],
    data: []
  })

  useEffect(() => {
    if(active !== undefined){
        const activeSite = linkedSites[active]
        const filteredPages = websitePages[activeSite.link as keyof typeof websitePages]
       setPages(filteredPages)
    }
  },[active])

  return (
    <div className="h-full w-full">
        {legendArea}
        <div className="flex h-44 justify-center w-52 p-1">
          <div className="flex-1 ">
            {/* <DoughnutChart ref={chartRef}  data={data} options={options}/> */}
          </div>
        </div>
    </div>
  )
}

export default PageAnalytics