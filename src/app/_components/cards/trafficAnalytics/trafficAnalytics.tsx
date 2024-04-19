'use client'
import React, { useEffect, useRef, useState } from 'react';
import {
  Chart,
  ChartData,
  ChartOptions,
  ChartTypeRegistry
} from 'chart.js';
import { LineChart } from '../../charts/line';
import { lineChartData, options } from '@/app/_utils/constants';
import { IWebsiteTraffic, linkedSites, websiteTrafficData } from '@/app/_mock/websiteData';
import { LineLegendArea } from './lineLegendArea';


type IFilterDateOptions = '7h' | '12h' | '1d' | '7d'

const suffixAmPm = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;

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
        let key;
        if (interval === 24) {
            key = intervalStart.toDateString();
        } else {
            const hour = intervalStart.getUTCHours();
            key = suffixAmPm(hour); // Use the suffixAmPm function to add AM/PM suffix
        }

        acc[key] = 0
        return acc;
    }, {} as Record<string | number, number>);

    // Populate the intervals with data
    filteredData.forEach(item => {
        const date = new Date(item.createdAt);
        let key;
        if (interval === 24) {
            key = date.toDateString();
        } else {
            const hour = date.getUTCHours();
            key = suffixAmPm(hour); // Use the suffixAmPm function to add AM/PM suffix
        }
        if (groupedData[key] != undefined) {
            groupedData[key] += 1;
        }
    });


    return groupedData;
}


interface ChartProps {
 active: number,
}



export const TrafficAnalytics: React.FC<ChartProps> = ({ active }) => {
  const chartRef = useRef<any>(null);
  const [legendArea, setLegendArea] = useState<React.ReactNode | null>(null);
  const [data, setData] = useState<typeof websiteTrafficData>([])
  const [filter, setFilter] = useState<IFilterDateOptions>('7h')
  const [chartData, setChartData] = useState<{labels: string[], data: number[]}>({
    labels: [],
    data: []
  })

  useEffect(() => { 
    if (chartRef.current) {
        const chart = chartRef.current;
        if(chart){
          chart.update();
          setLegendArea(<LineLegendArea chart={chart} />);
        }
    }
  }, []);

    useEffect(() => {
        if(active !== undefined){
            const activeSite = linkedSites[active]
            const filteredData = websiteTrafficData.filter(item => item.siteName === activeSite.link)
            setData(filteredData || [])
        }
    },[active])

    useEffect(() => {
        const groupedData = groupDataByInterval(data, filter)
        setChartData({labels: Object.keys(groupedData), data: Object.values(groupedData)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])


    return <div className='w-full pb-2'>
            <div className='flex justify-between items-center'>
                <div>
                  {legendArea}
                </div>
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
