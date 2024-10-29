import ReportChart from '@/components/reportChart/ReportChart';
import React from 'react'
import { FaCircle } from 'react-icons/fa';
import { HiOutlinePrinter } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import report from "@/assets/icons/report.png"
import Image from 'next/image';
import SuppliersChart from '@/components/suppliersChart/SuppliersChart';
import QuickActions from '@/components/quickActions/QuickActions';
import { CiMenuKebab } from "react-icons/ci";
import { auth } from '@/auth';
const page = async () => {
  const session = await auth();

  return (
    <div className='overflow-hidden '>
      <div className='flex items-center '>

        <div className='bg-[#F4F6FC] py-9 md:w-[629px] lg:w-[791px]  w-full'>
          <div className='flex justify-between px-3 items-center'>
            <div className='flex'>
              <h1 className='text-[18px] font-bold'>Report</h1>
            </div>
            
            <div className='bg-[#04B4FC] rounded-md flex items-center text-white justify-center gap-2 w-[126px] h-9'>
            <HiOutlinePrinter />
              <button  className='text-xs lg:text-[14px]'>
                Print Report
              </button>
            </div>
          </div>
          </div>

        <div className='border'>
        <div className="flex items-center justify-between px-6 w-[340px]  ">
          <div>

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
              <div className='w-8 h-8 flex items-center justify-center border rounded-[4px]'>
              <CiMenuKebab />
              </div>
              </div>
        </div>
      </div>
        <hr />

        <div className='flex flex-col lg:flex-row'>


        <div className='lg:w-[791px]  border-r w-full '>
      <div className='lg:w-[725px] xl:w-screen md:w-[625px] flex mx-auto justify-between mt-4 w-full'>
        <p className='font-semibold'>Weekly Sales</p>
        <div className='flex items-center gap-3'>
        <MdKeyboardArrowLeft />
        <p className='text-[#04B4FC] font-poppins font-semibold'>Aug 19-25</p>
        <MdKeyboardArrowRight />
        </div>

      </div>
      <div className='mt-6'>
        <div className='flex  w-full justify-center'>
          <Image src={report} alt='report' />
        </div>
        <div className='flex gap-5 justify-center mt-6'>

<div className=' flex gap-3  items-center'>
<div className='w-3  text-[#A4E4FF]'>

<FaCircle/>
</div>
<p className='text-xs'>0-500</p>
</div>
<div className=' flex gap-3  items-center'>
<div className='w-3  text-[#00B4FF] '>

<FaCircle/>
</div>
<p className='text-xs'>501-1,000</p>
</div>
<div className=' flex gap-3  items-center'>
<div className='w-3  text-[#0083B9]'>

<FaCircle/>
</div>
<p className='text-xs'>1,000-5000</p>
</div>
</div>

      </div>

        </div>
        <div className='flex max-w-lg lg:w-[359px]    w-[359px]  order-first lg:order-last '>

        <div className=' md:h-[184px] w-[100%] md:w-[629px] border lg:w-[359px] lg:h-auto'>

<p className='font-semibold mt-5 '>Top Suppliers</p>
      <SuppliersChart/>
        </div>
        
        <div className='hidden border h-[184px]  xl:hidden md:flex md:justify-center '>

        <QuickActions/>
        </div>
        </div>
        </div>

        <div className=' flex flex-col lg:flex-row overflow-x-hidden  '>

        <div className='lg:w-[791px] w-full  space-y-4 flex flex-col md:w-screen '>
                <hr className='mb-6 '/>
            <div className='pl-5'>
                <h1 className='font-semibold '>Supplier Performance Report
                    <span className='font-normal'>(Top 5 Suppliers)</span>
                </h1>
            </div>
            <hr className='mx-auto w-full ' />

<div className='flex flex-col justify-center items-center  w-full'>

        <ReportChart/>
        <div className='flex gap-5 mt-3'>

        <div className=' flex gap-3  items-center'>
      <div className='w-3  text-[#04B4FC]'>

        <FaCircle/>
      </div>
        <p className='text-xs'>Early</p>
        </div>
        <div className=' flex gap-3  items-center'>
      <div className='w-3  text-[#FFB423] '>

        <FaCircle/>
      </div>
        <p className='text-xs'>On Time</p>
        </div>
        <div className=' flex gap-3  items-center'>
      <div className='w-3  text-[#D91189]'>

        <FaCircle/>
      </div>
        <p className='text-xs'>late</p>
        </div>
        </div>

</div>
    </div>
<div className='flex flex-col max-w-screen md:flex-row lg:flex-col mt-4 lg:mt-0 '>
    <div className='h-[208px] lg:w-[359px]  max-w-lg w-full border space-y-4 flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center text-[#495057]'>
            <p className='font-semibold '>Reports for Last Month</p>
            <p className='font-light text-[14px] '>From 01  Jul - 31 Jul</p>
        </div>
        <div className='flex gap-4'>
            <button className='bg-[#04B4FC]  text-white font-semibold flex justify-center items-center h-[28px] text-xs w-[111px] rounded-md'>Download PDF</button>
            <p className='text-[#04B4FC] font-[400] '>View</p>
        </div>


</div>
<div className='h-[209px] lg:w-[359px]  max-w-lg w-full border  space-y-4 flex flex-col justify-center  items-center'>
        <div className='flex flex-col items-center text-[#495057]'>
            <p className='font-semibold '>Defect Rate Report</p>
            <p className='font-light text-[14px] '>Product Defects & Supplier Origin</p>
        </div>
        <div className='flex gap-4'>
            <button className='bg-[#6C11D9]  text-white font-semibold flex justify-center items-center h-[28px] text-xs w-[111px] rounded-md'>Download PDF</button>
            <p className='text-[#6C11D9] font-[400] '>View</p>
        </div>


</div>
        </div>
        </div>

        </div>
      
  )
}

export default page
