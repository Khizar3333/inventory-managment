"use client"
import React from 'react'
import Image from 'next/image'
import macbook from "@/assets/icons/macbook.png"
import iphone from "@/assets/icons/iphone.png"
import zoom75 from "@/assets/icons/zoom75.png"
import samsung from "@/assets/icons/samsung.png"
import QuickActions from '../quickActions/QuickActions'
import UserDetail from '../userDetail/UserDetail'




const recent=[
    {
        id:1,
        img:macbook,
        name:"Macbook Pro",
        time:"2h ago",
        text1:"Restocked",
        text2:"6",
        text3:"Activities"

    },
    {
        id:2,
        img:iphone,
        name:"Iphone 14 Pro",
        time:"8h ago",
        text1:"Sold",
        text2:"10",
        text3:"Products"

    },
    {
        id:3,
        img:zoom75,
        name:"Zoom75",
        time:"23 min ago",
        text1:"Sold ",
        text2:"1",
        text3:"Products"
    },
    {
        id:4,
        img:zoom75,
        name:"Zoom75",
        time:"42 min ago",
        text1:"Restoked", 
        text2:"12",
        text3:"Products"

    },
    {
        id:5,
        img:samsung,
        name:"Samsung Odyssey",
        time:"2 h ago",
        text1:"Sold",
        text2:"2",
        text3:"Products"
    }

]
const RecentActivities = () => {
//   const session = await auth();

  return (
    <div className='lg:w-[25vw]  lg:max-w-[40vw] '>
<div >
{/* <UserDetail/> */}

{/* <div className='flex items-center lg:w-[24.9vw] justify-between px-6 py-[17px] border h-[86px]'>

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
      </div> */}
    <QuickActions/>
</div>
    <hr className=' '/>
    <div className='min-h-[197px] hidden lg:block  ml-7'>
        <div className='flex   mt-5'>

        <h2 className='fontsans font-semibold'>Recent Activities</h2>
        </div>

        {recent.map((item)=>(
            
            <div key={item.id} className='flex gap-2   lg:gap-3 mt-3 lg:flex-col'> 
            <div className='h-[74px]  text-[15px]   flex flex-col space-y-4'>

                <p className='font-semibold  gap-2 ml-3 mt-2'>{item.text1}
                    <span className='text-[#04B4FC]'> {item.text2} </span>
                    {item.text3}
                </p>
                <div className='flex gap-2 ml-3 '>
            <Image src={item.img} alt="macbook"/>
            <div className='flex gap-4'>

            <p>{item.name}</p>
                <p>{item.time}</p>
            </div>
                </div>

            </div>
        
        
          

        </div>

        ))}
      
    </div>
    </div>

  )
}

export default RecentActivities
