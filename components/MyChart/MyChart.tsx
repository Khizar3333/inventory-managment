"use client"
import { CategoryScale, Chart, LinearScale,BarElement, ChartData, Point, BubbleDataPoint } from 'chart.js';
import dynamic from 'next/dynamic';
import { Bar } from 'react-chartjs-2';



Chart.register(CategoryScale)
Chart.register(LinearScale)
Chart.register(BarElement)


const BarChart = ({ data, width=1500 , height=600 }: { data: ChartData<'bar', (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>; width?: number; height?: number }) => {
    return (
      <div className='  w-[100vw] lg:w-[54vw]  h-[270px] object-fill lg:max-w-[100vw] flex justify-center lg:justify-normal px-6'>
        <Bar data={data}  width={width}  height={height}/>
      </div>
    );
  };
  export default BarChart;