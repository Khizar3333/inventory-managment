"use client"

import React, { useRef, useEffect } from 'react';
import { BarElement, CategoryScale, Chart, LinearScale ,LineController,PointElement,LineElement} from 'chart.js';
import { YAxis } from 'recharts';
import { Line } from 'react-chartjs-2';
import { FaCircle } from "react-icons/fa";
Chart.register(CategoryScale)
Chart.register(LinearScale)
Chart.register(BarElement)
Chart.register(LineController)
Chart.register(PointElement);
Chart.register(LineElement);

const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Product A',
        data: [2000,7000,20000,12000,15000,10000,8000,9000,6000,7000,3000,4000,5000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor:'#04B4FC'
      },
      {
        label: 'Product B',
        data: [1000,4000,7000,6000,4000,3000,5000,10000,12000,8000,11000,10000,21000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor:'#6C11D9'
      },
      {
        label: 'Product C',
        data: [5000,8000,4000,6000,7000,20000,15000,10000,9000,12000,13000,14000,15000],
        backgroundColor: 'rgba(57, 150, 230, 0.2)',
        borderColor:'#D91189'
      },
    ],
  };


 
const SalesChart = () => {
    return (
        <div className='grid grid-cols-1 px-4 mt-7 md:max-w-[1024px] w-[100vw] 2xl:max-w-[100vw] lg:w-[56vw] lg:max-w-[60vw]'>
<div className='mb-4 flex justify-between items-center'>
    <h1 className='font-bold text-[18px]'>Sales Chart</h1>
    <div className='flex gap-3 text-xs'>
      <div className='text-[#04B4FC] flex  items-center gap-2'>
      <FaCircle />
      <p>Direct Sales</p>
      </div>
      <div className='text-[#6C11D9] flex  items-center gap-2'>
      <FaCircle />
      <p>Retail</p>
      </div>
      <div className='text-[#D91189] flex  items-center gap-2'>
      <FaCircle />
      <p>Whole Sales</p>
      </div>
    </div>
</div>
        <Line data={salesData}  />
        </div>
    )
 


};

export default SalesChart;
