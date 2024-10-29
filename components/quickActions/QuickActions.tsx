"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdOutlineCreateNewFolder, MdOutlineLocalShipping } from "react-icons/md";
import { PiExportLight } from "react-icons/pi";
import { auth } from "@/auth";
import UserDetail from "../userDetail/UserDetail";



const QuickActions = () => {
  return (
<>
{/* <div className="lg:hidden">

<UserDetail/>
</div> */}


    <div className=" bg-white  border md:min-h-[185px]  lg:min-h-[280px]">
      <div className="flex flex-col w-[100vw] md:max-w-[39vw]  justify-center text-[#5C6F88]  px-4 gap-2   py-4 lg:w-[25vw]   lg:max-w-[100vw]">
        <h1 className="mb-4 font-semibold text-[18px]">Quick Actions</h1>
        <div className="grid grid-cols-2 lg:grid-cols-1  px-5 gap-3 place-items-baseline space-y-4 lg:space-y-7 ">
            <div className="flex gap-6 items-center ">

            <div className="flex items-center   gap-1">
            <MdOutlineCreateNewFolder />

          <Link href="/createOrder">Create Order</Link>
            </div>
            <p className="text-xs  md:hidden">ctrl + n</p>
            </div>
            <div className="flex gap-7 items-center">
            <div className="flex items-center  gap-1">

              
        <LiaShoppingBagSolid />
          <Link href={"#"}>Add Product</Link>
            </div>
            <p className="text-xs  md:hidden">ctrl + p</p>
            </div>
            <div className="flex gap-6 items-center">

            <div className="flex items-center  gap-1">
            <MdOutlineLocalShipping />

          <Link href="/addSupplier">Add Supplier</Link>
            </div>
            <p className="text-xs md:hidden">ctrl + k</p>
            </div>
            <div className="flex gap-[74px] items-center">

            <div className="flex items-center  gap-1">
            <PiExportLight />
          <Link href={"#"}>Export</Link>
            </div>
            <p className="text-xs  md:hidden">ctrl + s </p>
            </div>
        </div>
      </div>


        {/* <div className="flex flex-col justify-center ml-7 mt-9">
            <div>
                <h2 className="text-[18px] font-semibold">Fast Moving Items</h2>
            </div>

            <div className="space-y-11 mt-7">

            {
                fastItems.map((item)=>(
                    <div key={item.id} className="flex gap-4">
                        <Image src={item.img} alt={item.name}/>
                        <p>{item.name}</p>
                    </div>
                ))
                
            }
            </div>
            
        </div> */}
    </div>
</>

  );
};

export default QuickActions;
