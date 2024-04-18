'use client'
import React, { useEffect, useRef, useState } from 'react';
import {
  Chart,
  ChartData,
  ChartOptions,
  ChartTypeRegistry
} from 'chart.js';
import { LineChart } from '../charts/line';
import { lineChartData, options } from '@/app/_utils/constants';
import { IWebsiteTraffic, linkedSites, websiteTrafficData } from '@/app/_mock/websiteData';


type IFilterDateOptions = '7h' | '12h' | '1d' | '7d'

function groupDataByInterval(data: IWebsiteTraffic[], option: IFilterDateOptions) {
    // Determine the interval based on the selected option
    let interval;
    switch (option) {
        case '7h':
            interval = 1; // 1 hour interval
            break;
        case '12h':
            interval = 2; // 2 hour interval
            break;
        case '1d':
            interval = 3; // 3 hour interval
            break;
        case '7d':
            interval = 24; // 1 day interval
            break;
        default:
            throw new Error('Invalid option');
    }

    // Calculate the time range based on the selected option
    const now = new Date();
    const startTime = new Date(now.setHours(now.getHours() - interval * 7)); // Adjust for 7 intervals

    

    // Filter the data to include only items within the specified time range
    const filteredData = data.filter(item => new Date(item.createdAt) >= startTime);

    // Create a range of intervals based on the selected option
    const intervals = [];
    for (let i = 0; i < 7; i++) {
        const intervalStart = new Date(startTime);
        intervalStart.setHours(intervalStart.getHours() + i * interval);
        intervals.push(intervalStart);
    }

     // Group the filtered data by the determined interval
    const groupedData = intervals.reduce((acc, intervalStart) => {
        const key = interval === 24 ? intervalStart.toDateString() : intervalStart.getUTCHours();
        acc[key] = 0
        return acc;
    }, {} as Record<string | number, number>);

    // Populate the intervals with data
    filteredData.forEach(item => {
        const date = new Date(item.createdAt);
        const key = interval === 24 ? date.toDateString() : date.getUTCHours();
        if (groupedData[key] != undefined) {
            groupedData[key] += 1;
        }
    });


    return groupedData;
}



export interface LegendAreaProps<T extends keyof ChartTypeRegistry> {
 chart: Chart | null;
 data: ChartData<T>;
 options: ChartOptions<T>;
}

const LegendArea: React.FC<LegendAreaProps<'line'>> = ({ chart, data, options }) => {
  const legendRef = useRef<HTMLDivElement>(null);
  const [hiddenItems, setHiddenItems] = useState<number[]>([])

  useEffect(() => {
      if (chart && data && options) {
        chart.update();
      }
  }, [chart, data, options]);

  const handleLegendClick = (datasetIndex: number) => {
    if (chart) {
      const ci = chart;
      ci?.data?.datasets?.forEach((_, i) => {
        const meta = ci.getDatasetMeta(i);

        if (i === datasetIndex) {
          meta.hidden =  !meta.hidden 
          if(meta.hidden){
            setHiddenItems(prev => [...prev, datasetIndex]);
          } else {
            setHiddenItems(prev => prev.filter(number => number !== datasetIndex));
          }
        }
      });
      ci.update();
    }
 };

  return <div className='flex justify-between items-center' >
    <div className='mb-2'  ref={legendRef}> 
      {data.datasets.map((item, i) => (
        <div 
          className='flex gap-2 items-center mb-1 cursor-pointer' 
          key={item.label} 
          onClick={() => handleLegendClick(i)}
        >
          <div 
            className={`w-3 h-3 rounded-full border border-md`} 
            style={{backgroundColor: hiddenItems.includes(i) ? 'white' :item.backgroundColor as string, borderColor: item.backgroundColor as string}}>

            </div>
          <p className={`text-xs text-gray-500 ${hiddenItems.includes(i) ? 'line-through': 'no-underline'}`} >{item.label}</p>
        </div>
      ))}
    </div>
  </div>
}


interface ChartProps {
 active: number,
}



export const TrafficAnalytics: React.FC<ChartProps> = ({ active }) => {
  const chartRef = useRef<any>(null);
  const [legendArea, setLegendArea] = useState<React.ReactNode | null>(null);
  const [data, setData] = useState<typeof websiteTrafficData>([])
  const [filter, setFilter] = useState()
  const [chartData, setChartData] = useState<ChartData<'line'>>(lineChartData)

//   useEffect(() => { 
//     if (chartRef.current) {
//         const chart = chartRef.current;
//         if(chart){
//           chart.update();
//           const chartOptions = options || {}; 
//           setLegendArea(<LegendArea chart={chart} data={data} options={chartOptions} />);
//         }
//     }
//   }, []);

    useEffect(() => {
        if(active !== undefined){
            const activeSite = linkedSites[active]
            const filteredData = websiteTrafficData.filter(item => item.siteName === activeSite.link)
            setData(filteredData || [])
        }
    },[active])

    useEffect(() => {
        const groupedData = groupDataByInterval(data, '12h')
        lineChartData.labels = Object.keys(groupedData) || []
        lineChartData.datasets[0].data = Object.values(groupedData)
        setChartData(lineChartData)
    },[data])


    return <div className='w-full pb-2'>
            <div>
                {legendArea}
                <div>
                    <div className='border rounded border-gray-300 py-1 px-2 w-40 text-xs text-gray-600'>
                        Last 7 hours
                    </div>
                </div>
            </div>
            <div className="h-40">
            <LineChart chartRef={chartRef} options={options} data={chartData} />
            </div>
        </div>;
    }
