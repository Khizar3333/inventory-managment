import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store/store';
import { fetchOrders } from '@/app/redux/slice/order/order';
import { useAppDispatch } from '@/app/redux/hooks/Hooks';
import OrderList from '../(reduxPages)/salesOrder/page';

const page = () => {
  
    // const dispatch = useAppDispatch();
    // const { orders, loading, error } = useSelector((state: RootState) => state.order);
  
    // useEffect(() => {
    //   dispatch(fetchOrders());
    // }, [dispatch]);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

   
  
    return (
      <div>hello</div>
      // <OrderList/>
      // <ul>
      //   {orders.map((order: { id: React.Key | null | undefined; userId: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; totalAmount: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; orderDate: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; items: any[]; }) => (
      //     <li key={order.id}>
      //       {order.userId} - {order.totalAmount} - {order.orderDate}
      //       <ul>
      //         {order?.items?.map(item => (
      //           <li key={item.id}>
      //             {item.productname} - {item.category} - {item.quantity} - {item.price}
      //           </li>
      //         ))}
      //       </ul>
      //     </li>
      //   ))}
      // </ul>
    );



//     <div className='flex'>
//       <div className="flex flex-col w-[791px] border-r">
//     <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//         <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//             <div className="overflow-hidden">
//                 <table className="min-w-full">
//                     <thead className="border-b">
//                         <tr>
//                             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
//                             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">First</th>
//                             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Last</th>
//                             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Handle</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="border-b">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
//                         </tr>
//                         <tr className="bg-white border-b">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Jacob</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Thornton</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@fat</td>
//                         </tr>
//                         <tr className="bg-white border-b">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Larry</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Wild</td>
//                             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@twitter</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// </div>
// <FastItems/>
//     </div>


  
}

export default page
