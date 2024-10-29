import React from 'react'
import QuickActions from '../quickActions/QuickActions'
import SuppliersChart from '../suppliersChart/SuppliersChart'

const TopSuppliers = () => {
  return (
    <div className=' flex lg:flex-col md:min-h-[184px] lg:min-h-[280px]' >
      <div className='hidden md:block order-last lg:order-first'>

    <QuickActions/>
      </div>

    <hr className="  " />

         <div className="flex flex-col pl-7 lg:pl-0 w-[100vw] justify-center md:justify-start order-first lg:order-last md:max-w-[62vw] md:w-[62vw] lg:ml-7 mt-9">
            <div>
                <h2 className="text-[18px] font-semibold">Top Suppliers</h2>
            </div>
            <div className=''>
                <SuppliersChart/>
            </div>

           
            
        </div>    
    </div>
  )
}

export default TopSuppliers
