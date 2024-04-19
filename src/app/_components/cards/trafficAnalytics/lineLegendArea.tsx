import { lineChartData } from "@/app/_utils/constants";
import { ChartTypeRegistry } from "chart.js";
import React, { useEffect, useRef, useState } from "react";



export interface LegendAreaProps {
 chart: Chart | null;
}

export const LineLegendArea: React.FC<LegendAreaProps> = ({ chart }) => {
  const legendRef = useRef<HTMLDivElement>(null);
  const [hiddenItems, setHiddenItems] = useState<number[]>([])
  const [chartData, setChartData] = useState(lineChartData)

  useEffect(() => {
      if (chart) {
        chart.update();
      }
  }, [chart]);

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

  return <div className='mb-2'  ref={legendRef}> 
      {chartData.datasets.map((item, i) => (
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
}
