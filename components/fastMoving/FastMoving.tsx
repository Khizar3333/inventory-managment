import React from 'react'
import macboob from "@/assets/icons/macbook.png"
import iphone from "@/assets/icons/iphone.png"
import zoom75 from "@/assets/icons/zoom75.png"
import airpod from "@/assets/icons/airpod.png"
import samsung from "@/assets/icons/samsung.png"
import Image from 'next/image'

const FastItems=[
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
    },]
const FastMoving = () => {
  return (
    <>
    <hr />
    <div className='my-5'>
        <div className='flex flex-col justify-center '>
        <div className='pl-16 '>
                <h2 className="text-[18px] font-semibold">Fast Moving Items</h2>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 mx-16 place-items-center place-content-center gap-4  mt-7'>
             {FastItems.map((item)=>(
                <div key={item.id} className='flex  shadow-sm gap-1 px-2 py-4 justify-center w-[100%] rounded items-center'>
                    <Image src={item.img} alt="" />
                    <p className='text-[11px]'>{item.name}</p>
                </div>
             ))}   

            </div>
        </div>
      
    </div>
    </>

  )
}

export default FastMoving
