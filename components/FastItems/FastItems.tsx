// "use client"
import React from 'react'
import Image from 'next/image'
import macboob from "@/assets/icons/macbook.png"
import iphone from "@/assets/icons/iphone.png"
import zoom75 from "@/assets/icons/zoom75.png"
import airpod from "@/assets/icons/airpod.png"
import samsung from "@/assets/icons/samsung.png"
import samsung1 from "@/assets/icons/samsung1.png"
import logitech from "@/assets/icons/logitech.png"
import QuickActions from '../quickActions/QuickActions'
import UserDetail from '../userDetail/UserDetail'


const fastItems=[
    {
        id:1,
        img:macboob,
        name:"Macbook Pro"
    },
    {
        id:2,
        img:iphone,
        name:"Iphone 14 Pro"
    },
    {
        id:3,
        img:zoom75,
        name:"Zoom 75"
    },
    {
        id:4,
        img:airpod,
        name:"Airpod 3"
    },
    {
        id:5,
        img:samsung,
        name:"Samsung Galaxy Fold"
    },
    {
        id:6,
        img:samsung1,
        name:"Samsung Odyssey"
    },
    {
        id:7,
        img:logitech,
        name:"Logitech Superlight"
    },

]
const FastItems = () => {
  return (
    <>
    <div className=' bg-white lg:w-[25.5vw] border lg:max-w-[100vw] hidden lg:block'>
        {/* <div>

        <UserDetail/>

    <QuickActions/>
        </div> */}

    {/* <hr className="mt-5 w-full" /> */}

         <div className="  justify-center ml-7 mt-9 hidden md:flex md:flex-col">
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
            
        </div>    
    </div>
            </>
  )
}

export default FastItems
