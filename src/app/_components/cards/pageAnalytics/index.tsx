import React, { useEffect, useRef, useState } from 'react'
import DoughnutChart from '../../charts/doughnut'
import { IWebsiteTraffic, linkedSites, websitePages, websiteTrafficData } from '@/app/_mock/websiteData';
import { doughnutChartData, options } from '@/app/_utils/constants';
import DoughnutLegendArea from './doughnutLegendArea';
import { ChartData } from 'chart.js';
import { only } from 'node:test';
import { getRandomColor } from '@/app/_lib/helpers/misc';


const PageAnalytics = ({ active }: {active: number}) => {
  const chartRef = useRef<any>(null);
  const [legendArea, setLegendArea] = useState<React.ReactNode | null>(null);
  const [pageTraffic, setPageTraffic] = useState<number[]>([]);
  const [pages, setPages] = useState<string[]>([]);
  const [data, setData] = useState<{labels: string[], data: number[]}>({
    labels: [],
    data: []
  })
  const [chartData, setChartData] = useState<{labels: ChartData<'doughnut'>['labels'], datasets: ChartData<'doughnut'>['datasets']}>({
    datasets: [{ data: [] }],
    labels: [],
  });

  useEffect(() => {
    if(active !== undefined){
      const activeSite = linkedSites[active]
      const filteredPages = websitePages[activeSite.link as keyof typeof websitePages]
      const filteredWebsiteData = websiteTrafficData.filter(item => item.siteName === activeSite.link) 
      const onlyPages = filteredWebsiteData.reduce((acc, curr) => {
        if(!acc[curr.page]) acc[curr.page] = 0
        acc[curr.page]++
        return acc
      },{} as Record<string, number>)
      setPages(filteredPages)
      setPageTraffic(Object.values(onlyPages))
    }
  },[active])

  useEffect(() => {
      setData({labels: pages, data: [...pageTraffic]})
        setLegendArea(<DoughnutLegendArea chart={chartRef.current} labels={pages} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pages])

  useEffect(() => {
    const newDatasets: ChartData<'doughnut'>['datasets'] = [...doughnutChartData.datasets];
    let newLabels:ChartData<'doughnut'>['labels'] = [...doughnutChartData.labels || []];

    newDatasets[0].data = data.data
    if (chartData.labels) {
      newLabels = data.labels;
    }
    
    setChartData({
      datasets: newDatasets,
      labels: newLabels,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])


  return (
    <div className="h-full w-full">
        {legendArea}
        <div className="flex h-44 justify-center w-52 p-1">
          <div className="flex-1 ">
            <DoughnutChart chartRef={chartRef}  data={chartData} options={options}/>
          </div>
        </div>
    </div>
  )
}

export default PageAnalytics