// "use client"
import React from 'react';
import Image from 'next/image';
import OrderList from '@/components/orderList/OrderList';
import { GoSearch } from "react-icons/go";
import { CiCirclePlus } from 'react-icons/ci';
import SalesChart from '@/components/salesChart/SalesChart';
import grace from "@/assets/icons/grace.png"
import QuickActions from '@/components/quickActions/QuickActions';
import { auth } from '@/auth';
import RecentActivities from '@/components/recentactivities/RecentActivities';
const SalesOrder = async() => {
  const session =  await auth();
  

  return (
    
    <div className='overflow-x-hidden flex max-w-[100vw] flex-col '>
      {/* <div className='flex'>


  
  </div> */}
  <div className='flex grow  '>

<div className='md:max-w-[629px] flex flex-col grow'>

  <div className='lg:hidden  bg-red-300 mt-4  md:max-w-[629px] grow items-center h-[210px] flex flex-col space-y-4 justify-center border'>
    <h1 className='md:pl-2 font-semibold'>Recent Activity</h1>
    <div className=' grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 place-items-center place-content-center gap-3 md:mx-auto'>
      <div className='sm:w-[172px] h-[86px] flex flex-col space-y-4 justify-center   border text-[11px]'>
        <p className='font-semibold pl-1'>Ordered <span className='text-[#04B4FC] '>11</span> Products</p>
        <div className='flex gap-1  items-center px-2'>
          <div className='flex gap-1'>
            <Image src={grace} alt=""/>
            <p className='text-[11px] w-1/2 text-[#5C6F88]'>Grace Moreta</p>
          </div>
          <p className='text-[10px] text-[#04B4FC]'>1m ago</p>
        </div>

      </div>
      <div className='sm:w-[172px] h-[86px] flex flex-col space-y-4 justify-center   border text-[11px]'>
        <p className='font-semibold pl-1'>Ordered <span className='text-[#04B4FC] '>11</span> Products</p>
        <div className='flex gap-1  items-center px-2'>
          <div className='flex gap-1'>
            <Image src={grace} alt=""/>
            <p className='text-[11px] w-1/2 text-[#1c1d1f]'>Grace Moreta</p>
          </div>
          <p className='text-[10px] text-[#04B4FC]'>1m ago</p>
        </div>

      </div>
      <div className='md:w-[172px] h-[86px]   space-y-4 justify-center  hidden md:block border text-[11px]'>
        <p className='font-semibold pl-1'>Ordered <span className='text-[#04B4FC] '>11</span> Products</p>
        <div className='flex gap-1  items-center px-2'>
          <div className='flex gap-1'>
            <Image src={grace} alt=""/>
            <p className='text-[11px] w-1/2 text-[#5C6F88]'>Grace Moreta</p>
          </div>
          <p className='text-[10px] text-[#04B4FC]'>1m ago</p>
        </div>

      </div>

    </div>

  </div>

  <div className='bg-[#F4F6FC] py-5 lg:py-9 px-1 md:max-w-[629px] lg:w-[56vw] lg:max-w-[100vw]   '>
    <div className='flex lg:justify-evenly justify-between  items-center'>

<div className='flex '>
  <h1 className='lg:text-xl font-bold'>Sales Order</h1>
</div>
<div className=' h-9 bg-white  hidden lg:flex items-center gap-2 rounded-lg'>
  <div className='ml-4'>

<GoSearch />
  </div>
  <div className=''>

<input type="text" placeholder='Search'  className='outline-none   '/>
  </div>

</div>
    <div className='bg-[#04B4FC] rounded-md flex items-center text-white justify-center gap-2 w-[126px] h-9'>
      <CiCirclePlus />
      <button className='text-xs lg:text-[15px]'>
      Place Order
      </button>
    </div>
    </div>
  </div>
  </div>
  <div className=' h-[270px] hidden  md:block lg:hidden'>
  <div className='flex items-center lg:w-[24vw] justify-between px-6 py-[17px] border h-[86px]'>

<p className='font-semibold'>{session?.user?.name}</p>      
      {session?.user?.image && (
        <Image
        className="rounded-full"
        width={30}
        height={30}
        alt="User Avatar"
        src={session?.user?.image || ""}
        />
      )}
      </div>
  <div className='  hidden md:flex py-10 lg:py-0  '>
    <QuickActions/>
  </div>
  </div>
  </div>

  <hr className=' hidden md:block'/> 
  <div className='flex'>

    <div className=' overflow-x-hidden  sm:h-[910px]'>

    <OrderList />
    <hr />
    <SalesChart/>
    </div>
    <div className='hidden lg:flex border'>

    <RecentActivities/>
    </div>
  </div>
  <hr className=''/>

    {/* <div className='  border-r px-5 py-5'>

    </div> */}
    </div>

    
   
  );
};

export default SalesOrder;
