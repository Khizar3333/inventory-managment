"use client"
import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import sales1 from "@/assets/icons/sales1.png"
import sales2 from "@/assets/icons/sales2.png"
import sales3 from "@/assets/icons/sales3.png"
import sales4 from "@/assets/icons/sales4.png"
import histogram from "@/assets/icons/histo.png"
import Image from 'next/image'
import SalesOrder from '@/components/SalesOrder/SalesOrder';
import { IoMdArrowDown } from "react-icons/io";
import Footer from '@/components/footer/Footer';
import { FaCircle, FaFacebook } from 'react-icons/fa';
import BarChart from '@/components/MyChart/MyChart';
import FastItems from '@/components/FastItems/FastItems';
import { BubbleDataPoint, ChartData, Point } from 'chart.js';
import UserDetail from '@/components/userDetail/UserDetail';
import QuickActions from '@/components/quickActions/QuickActions';
import FastMoving from '@/components/fastMoving/FastMoving';




// array to map through the data
const Salesdata = [
  {
    id: 1,
    text1:"143.3k",
    text2:"Todays Sales",
    img:sales1
  },
  {
    id: 2,
    text1:"$ 250,423",
    text2:"Yearly Total Sales",
    img:sales2
  },
  {
    id: 3,
    text1:"$68.9k",
    text2:"Net Income",
    img:sales3
  },
  {
    id: 4,
    text1:"343",
    text2:"Products",
    img:sales4
  }
]

const chartData : ChartData<'bar', (number | [number, number] | Point | BubbleDataPoint | null)[], unknown>  = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'My Dataset',
      data: [7000, 5000, 10000, 19000, 15000,25000,12000,15000,10000,17000,27000,8000],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};





const page = () => {
  return (
    <>
    <div className='lg:w-[55vw] flex'>
      <div>

      <div className=' flex'>


    <div className="   py-7 bg-[#F4F5FC] px-3 md:w-[61vw] md:max-w-[64vw]  lg:w-[54vw] lg:max-w-[70vw]">
      <div className=' font-sans font-semibold   lg:text-2xl'>
        <h1>Sales Summary</h1>
      </div>
      <div className=' grid grid-cols-2 lg:grid-cols-4 space-y-3  lg:items-baseline  mt-3    gap-2 '>
        {/* map through the data */}
        {Salesdata.map((item) => (
          <div key={item.id} className='w-[13vw] p-4 bg-white h-20 rounded-md flex gap-3 '>
            <div className=''>
              <Image src={item.img} alt="sales"/>
              
            </div> 
               <div className='flex flex-col text-xs space-y-1'>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          </div>
        ))}
      
      </div>
    </div>
    

<div className='hidden md:block lg:hidden'>

<UserDetail/>

<QuickActions/>


</div>

  </div>
  

  <div className='bg-white  border py-5'>
    <div className='px-3 flex justify-between'>
      <h2 className='font-semibold text-xl'>Stock Report</h2>
      <div className='flex gap-3 text-xs '>
      <div className='text-[#04B4FC] flex  items-center gap-2'>
      <FaCircle />
      <p>Direct Sales</p>
      </div>
      <div className='text-[#6C11D9] flex  items-center gap-2'>
      <FaCircle />
      <p>Retail</p>
      </div>
      
    </div>
    </div>

        
    <div className='w-[100vw] lg:w-[54vw] lg:max-w-[100vw]'>
        <div className=' flex  mx-auto mt-5 '>

        <BarChart data={chartData}/>
        {/* <div className='border'>

<FastItems/>
        </div> */}

        </div>
 <hr className='mb-5 w-full' />
  {/* <SalesOrder/> */}
  <div className=' w-[100vw] lg:w-full '>
    <div className='flex justify-between items-center  bg-white'>
    <h2 className='font-semibold p-5 text-xl border-none'>

    SalesOrder
    </h2>
    <div className='text-[#04B4FC] flex gap-2 items-center mr-2'>

    <p className='font-semibold'>Last 7 Days</p>
    <IoMdArrowDown />
    </div>
    </div>
    <div>
      <table className='min-w-[100vw] lg:min-w-full'>
        <thead className='bg-[#F4F5FC] text-[#5C6F88] h-[60px]'>
          <tr className=' gap-3 text-[12px]'>
            <th className=''>Channels</th>
            <th className=''>Draft</th>
            <th className=''>Confirmed</th>
            <th className=''>Packed</th>
            <th className=''>Shipped</th>
            <th className=''>Invoiced</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">Direct Sales</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">2</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">32</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">42</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">23</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">7</td>
          </tr>
          <tr>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">Direct Sales</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">2</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">32</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">42</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">23</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">7</td>
          </tr>
          <tr>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">Direct Sales</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">2</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">32</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">42</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">23</td>
            <td className="p-5 text-center whitespace-nowrap text-[12px] leading-6 font-medium text-gray-900 ">7</td>
          </tr>
          
        </tbody>
      </table>
    </div>
</div>
<div className='lg:hidden'>

<FastMoving/>
</div>
</div>

  </div>
</div>

  <div>

  <div className='lg:w-[25.5vw] border-r hidden lg:block lg:max-w-[100vw]'>

<UserDetail/>

<QuickActions/>
<FastItems/>
</div>
    
  </div>
    </div>
  {/* <hr /> */}
  {/* <Footer/> */}
 {/* <p>footer</p> */}
 

    </>
  )
}

export default page