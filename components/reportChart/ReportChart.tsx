"use client"

import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, plugins } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(BarElement, CategoryScale, LinearScale);

const ReportChart = () => {
   


    const data = {
        labels: ['Apple', 'Samsung', 'Asus', 'Xiaomi', 'Logitech',],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30, 60, 40],
            backgroundColor: '#04B4FC',
           
          },
          {
            label: 'Dataset 2',
            data: [15, 5, 25, 50, 35],
            backgroundColor: '#FFB423',
           
          },
          {
            label: 'Dataset 3',
            data: [20, 10, 40, 70, 30],
            backgroundColor: '#D91189',
           
          },
        ],
      };

      const options: any = {
        indexAxis: 'y',
        scales: {
          x: {
            stacked: true,
            barThickness: 30,
          },
          y: {
            stacked: true,
            barThickness: 30,
          },
        },
       
      };
      
    

    
      return (
        <div className=' w-full sm:w-auto lg:w-[554px] h-[250px] '>

        <Bar  data={data} options={options} />
        </div>
      );
};

export default ReportChart;
