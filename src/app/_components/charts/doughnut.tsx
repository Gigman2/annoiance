'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import React, { Key, useEffect, useRef, useState } from 'react'
// import { LegendAreaProps } from "./line";

// const LegendArea: React.FC<LegendAreaProps<'doughnut'>> = ({ chart, data, options }) => {
//   const legendRef = useRef<HTMLDivElement>(null);
//   const [hiddenItems, setHiddenItems] = useState<number[]>([])

//   useEffect(() => {
//       if (chart && data && options) {
//         chart.update();
//       }
//   }, [chart, data, options]);

//   const handleLegendClick = (datasetIndex: number) => {
//     if (chart) {
//       const ci = chart;
//       const meta = ci.getDatasetMeta(0);

//       ci?.data?.datasets?.[0]?.data?.forEach((_, i) => {
//         if (i === datasetIndex) {
//           console.log('Meta ', meta.data[datasetIndex])
//           meta.data[datasetIndex].hidden = !meta.data[datasetIndex].hidden;
//           if(meta.data[datasetIndex].hidden){
//             setHiddenItems(prev => [...prev, datasetIndex]);
//           } else {
//             setHiddenItems(prev => prev.filter(number => number !== datasetIndex));
//           }
//         }
//       });
//       ci.update();
//     }
//  };

//   return <div className='flex items-center gap-3' >
//     <div className='mb-2'  ref={legendRef}> 
//       {data?.labels?.map((item, i) => (
//         <div 
//           className='flex gap-2 items-center mb-1 cursor-pointer' 
//           key={item as Key} 
//           onClick={() => handleLegendClick(i)}
//         >
//           <div 
//             className={`w-3 h-3 rounded-full border border-md`} 
//             style={{
//               backgroundColor: hiddenItems.includes(i) ? 'white' : Array.isArray(data?.datasets?.[0]?.backgroundColor) ? data?.datasets?.[0]?.backgroundColor[i] : 'defaultColor',
//               borderColor: Array.isArray(data?.datasets?.[0]?.backgroundColor) ? data?.datasets?.[0]?.backgroundColor[i] : 'defaultColor'
//             }}>
//             </div>
//           <p className={`text-xs text-gray-500 ${hiddenItems.includes(i) ? 'line-through': 'no-underline'}`} >{item as string}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// }


const DoughnutChart = ({data, options}: {data: ChartData<'doughnut'>, options: ChartOptions<'doughnut'>}) => {
  const chartRef = useRef<any>(null);
  const [legendArea, setLegendArea] = useState<React.ReactNode | null>(null);

  useEffect(() => { 
    if (chartRef.current) {
        const chart = chartRef.current;
        if(chart){
          chart.update();
          const chartOptions = options || {}; 
          // setLegendArea(<LegendArea chart={chart} data={data} options={chartOptions} />);
        }
    }
  }, [data, options]);

  return (
    <div className="h-full w-full">
        {legendArea}
        <div className="flex h-44 justify-center w-52 p-1">
          <div className="flex-1 ">
            <Doughnut ref={chartRef}  data={data} options={options}/>
          </div>
        </div>
    </div>
  )
}

export default DoughnutChart