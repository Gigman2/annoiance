import { doughnutChartData } from "@/app/_utils/constants";
import { useEffect, useRef, useState } from "react";

export interface IDoughnutLegendArea {
 chart: Chart | null;
 labels?: string[]
}
const DoughnutLegendArea: React.FC<IDoughnutLegendArea> = ({ chart, labels}) => {
  const legendRef = useRef<HTMLDivElement>(null);
  const [hiddenItems, setHiddenItems] = useState<number[]>([])
  const [chartData, setChartData] = useState(doughnutChartData)


  useEffect(() => {
      if (chart) {
        chart.update();
      }
  }, [chart]);

  const handleLegendClick = (datasetIndex: number) => {
    if (chart) {
      const ci = chart;
      const meta = ci.getDatasetMeta(0);

      ci?.data?.datasets?.[0]?.data?.forEach((_, i) => {
        if (i === datasetIndex) {
          meta.data[datasetIndex].hidden = !meta.data[datasetIndex].hidden;
          if(meta.data[datasetIndex].hidden){
            setHiddenItems(prev => [...prev, datasetIndex]);
          } else {
            setHiddenItems(prev => prev.filter(number => number !== datasetIndex));
          }
        }
      });
      ci.update();
    }
 };

  return <div className='flex items-center gap-3' >
    <div className='mb-2'  ref={legendRef}> 
      {labels?.map((item: string, i: number) => (
        <div 
          className='flex gap-2 items-center mb-1 cursor-pointer' 
          key={item} 
          onClick={() => handleLegendClick(i)}
        >
          <div 
            className={`w-3 h-3 rounded-full border border-md`} 
            style={{
              backgroundColor: hiddenItems.includes(i) ? 'white' : Array.isArray(chartData?.datasets?.[0]?.backgroundColor) ? chartData?.datasets?.[0]?.backgroundColor[i] : 'defaultColor',
              borderColor: Array.isArray(chartData?.datasets?.[0]?.backgroundColor) ? chartData?.datasets?.[0]?.backgroundColor[i] : 'defaultColor'
            }}>
            </div>
          <p className={`text-xs text-gray-500 ${hiddenItems.includes(i) ? 'line-through': 'no-underline'}`} >{item as string}</p>
        </div>
      ))}
    </div>
  </div>
}

export default DoughnutLegendArea