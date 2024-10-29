"use client"
import Link from 'next/link'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const SideNav = () => {
  return (
    <div className=" bg-[#F4F5FC] w-[292px]  h-[1020px] hidden lg:block">
      <div>
        <div className='mt-6 ml-10'>
          <h2 className='ml-5'>General</h2>
        </div>
        <div className='flex flex-col space-y-9 font-medium ml-5  mt-7'>
          <div className='hover:bg-[#04B4FC] flex items-center gap-1 hover:text-white p-2 justify-center text-center transition-all ease-in 0.5s cursor-pointer'
>
        <RxDashboard/>
          <Link href="/dashboard">Dashboard</Link>
          </div>
          <div className='hover:bg-[#04B4FC] gap-1 flex items-center hover:text-white p-2 justify-center transition-all ease-in 0.5s cursor-pointer'>
      <MdOutlineInventory2/>
          <Link href="/Inventory">Inventory</Link>
          </div>
          <div className='hover:bg-[#04B4FC] flex gap-1 items-center hover:text-white p-2 text-center transition-all justify-center ease-in 0.5s cursor-pointer'>
    <AiOutlineShoppingCart/>
          <Link href="/salesOrder">Sales Order</Link>
          </div>
          <div className='hover:bg-[#04B4FC] hover:text-white p-2 flex gap-1 items-center  transition-all ease-in 0.5s justify-center cursor-pointer'>
          <MdOutlineLocalShipping />
          <Link href="/suppliers">Suppliers</Link>
          </div>

          <div className='hover:bg-[#04B4FC] hover:text-white p-2 flex gap-1 items-center transition-all ease-in 0.5s cursor-pointer justify-center'>
          <BsGraphUpArrow />
          <Link href="/report">Reports</Link>
          </div>

        </div>
      </div>

      <div className='flex flex-col space-y-7  ml-16  mt-10'>
      <div className=' '>
          <p className='ml-5'>Support</p>
        </div>
      <div className='hover:bg-[#04B4FC] font-medium ml-6 flex items-center gap-1 hover:text-white p-2   transition-all ease-in 0.5s cursor-pointer'
>
        <IoHelpCircleOutline/>
          <Link href="/">Help</Link>
          </div>
          <div className='hover:bg-[#04B4FC] ml-6 font-medium flex items-center gap-1 hover:text-white p-2  transition-all ease-in 0.5s cursor-pointer'
>
        <CiSettings/>
          <Link href="/">Settings</Link>
          </div>
      </div>
   
  </div>
  
  )
}

export default SideNav