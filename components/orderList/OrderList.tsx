"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store/store';
import { fetchOrders } from '@/app/redux/slice/order/order';
import { useAppDispatch } from '@/app/redux/hooks/Hooks';
import FastItems from '../FastItems/FastItems';
import RecentActivities from '../recentactivities/RecentActivities';


const OrderList = () => {


    const dispatch = useAppDispatch();
    const { orders, loading, error } = useSelector((state: RootState) => state.order);
  
    useEffect(() => {
      dispatch(fetchOrders());
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <>
       

             <div className='flex   overflow-hidden '>
       <div className="flex flex-col ">
     <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
         <div className="   sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:max-w-[1024px] w-[100vw] 2xl:max-w-[100vw] lg:w-[56vw] lg:max-w-[60vw] ">
                 <table className="">
                     <thead className="border-b bg-[#F4F6FC] text-[#5C6F88]">
                         <tr>
                             <th scope="col" className="text-sm hidden md:block font-medium text-gray-900 px-3 py-4 text-left">Order Id</th>
                             <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Product Name</th>
                             <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Quantity</th>
                             <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Category</th>
                             <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Total Price</th>

                         </tr>
                     </thead>
                     <tbody>
                      {orders.map((order=>{
                        return(
                          <tr className='font-medium text-[#212529]' key={order.id}>
                          <td className="text-sm  hidden md:block px-3 py-4 whitespace-nowrap">{order.id}</td>
                          <td className="text-sm  px-3 py-4 whitespace-nowrap">{order.items[0].productname}</td>
                          <td className="text-sm  px-3 py-4 whitespace-nowrap">{order.items[0].quantity}</td>
                          <td className="text-sm  px-3 py-4 whitespace-nowrap">{order.items[0].category}</td>
                          <td className="text-sm  px-3 py-4 whitespace-nowrap">{order.totalAmount}</td>


                         
                          </tr>
                        )}))}
                      
                        
                        
                     </tbody>
                 </table>
             </div>
         </div>
     </div>
 </div>
 {/* <FastItems/> */}
 {/* <div className='hidden lg:flex border'>

 <RecentActivities/>
 </div> */}
     </div>

          </>
      );
}

export default OrderList
