"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/app/redux/slice/Inventory'; // Adjust path as needed
import { Product, Inventory } from '@prisma/client'; // Adjust path as needed
import { useAppDispatch } from '@/app/redux/hooks/Hooks';
import { RootState } from '@/app/redux/store/store';
import { CiCirclePlus } from "react-icons/ci";
import RecentActivities from '@/components/recentactivities/RecentActivities';
import QuickActions from '@/components/quickActions/QuickActions';
import FastItems from '@/components/FastItems/FastItems';
import { GoSearch } from 'react-icons/go';
import TopSuppliers from '@/components/topSuppliers/TopSuppliers';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import UserDetail from '@/components/userDetail/UserDetail';
interface InventoryProps {}

const InventoryPage: React.FC<InventoryProps> = () => {
    const dispatch = useAppDispatch();
    const { products, loading, error } = useSelector((state: RootState) => state.inventory);
    const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(null);
    const [selectedSupplierId, setSelectedSupplierId] = useState<string | null>(null);
    const [openProductId, setOpenProductId] = useState(null);

    const handleDropdownToggle = (id:any) => {
      setOpenProductId(openProductId === id ? null : id);
    };
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = event.target.value.toLowerCase();
      if (products) {
        setFilteredProducts(
          products.filter(
            (product: { name: string; price: number; quantity: number,type:string }) =>
              product.name.toLowerCase().includes(searchTerm) ||
              product.price.toString().includes(searchTerm)||
              product.type.includes(searchTerm)
          )
        );
      }
    };


  
  
    return (
        
      <div className="inventory-container flex ">
        {loading && <p>Loading products...</p>}
  
        {error && <p className="error-message">Error: {error}</p>}
  
       
        <div className="flex">
      <div className="border-l">
        <div className='flex'>

        <div className=' bg-[#F4F6FC] pt-9 w-[100vw] md:w-[61vw] lg:w-[64vw]'>
          <div className='flex justify-between px-3 items-center'>
            <div className='flex'>
              <h1 className='text-[18px] font-bold'>Inventory</h1>
            </div>
            <div className='h-9 bg-white hidden lg:flex items-center gap-2 rounded-lg'>
              <div className='ml-4'>
                <GoSearch />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search suppliers..."
                  onChange={handleSearchChange}
                  className="outline-none"
                />
              </div>
            </div>
            <div className='bg-[#04B4FC] rounded-md flex items-center text-white justify-center gap-2 w-[126px] h-9'>
              <CiCirclePlus />
              <button  className='text-xs lg:text-[14px]'>
                Add New Product
              </button>
            </div>
          </div>

        </div>
        <div className='hidden md:block lg:hidden'>
<UserDetail/>

        </div>
</div>

        <div className='flex lg:hidden'>

        <div className='  bg-red-300 w-[61vw]  md:max-w-[629px] grow items-center min-h-[185px] md:min:h-[184px] flex flex-col space-y-4 justify-center border'>
    <h1 className='md:pl-2 font-semibold'>Recent Activity</h1>
    <div className='  grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-2  place-content-center md:gap-2 md:mx-auto'>
      <div className='w-[45vw] md:w-[172px] h-[86px] flex flex-col space-y-4 justify-center   border text-[11px]'>
        <p className='font-semibold pl-1'>Ordered <span className='text-[#04B4FC] '>11</span> Products</p>
        <div className='flex gap-1  items-center px-2'>
          <div className='flex gap-1'>
            {/* <Image src={grace} alt=""/> */}
            <p className='text-[11px] w-1/2 text-[#5C6F88]'>Grace Moreta</p>
          </div>
          <p className='text-[10px] text-[#04B4FC]'>1m ago</p>
        </div>

      </div>
      <div className='w-[45vw] md:w-[172px] h-[86px] flex flex-col space-y-4 justify-center   border text-[11px]'>
        <p className='font-semibold pl-1'>Ordered <span className='text-[#04B4FC] '>11</span> Products</p>
        <div className='flex gap-1  items-center px-2'>
          <div className='flex gap-1'>
            {/* <Image src={grace} alt=""/> */}
            <p className='text-[11px] w-1/2 text-[#1c1d1f]'>Grace Moreta</p>
          </div>
          <p className='text-[10px] text-[#04B4FC]'>1m ago</p>
        </div>

      </div>
      <div className='md:w-[172px] h-[86px]   space-y-4 justify-center  hidden md:block border text-[11px]'>
        <p className='font-semibold pl-1'>Ordered <span className='text-[#04B4FC] '>11</span> Products</p>
        <div className='flex gap-1  items-center px-2'>
          <div className='flex gap-1'>
            {/* <Image src={grace} alt=""/> */}
            <p className='text-[11px] w-1/2 text-[#5C6F88]'>Grace Moreta</p>
          </div>
          <p className='text-[10px] text-[#04B4FC]'>1m ago</p>
        </div>

      </div>

    </div>

  </div> 

  <div className='hidden md:block'>
  <QuickActions/> 
  </div>
  </div>


        <hr className="w-full"/>
        {error && <p className="">{error}</p>}
        {loading ? (
          <p>Loading Product...</p>
        ) : (
          <>
            <div className='hidden sm:flex h-[909px] '>
              {/* <div className="flex flex-col w-[100vw] lg:w-[56vw] lg:max-w-[100vw]  border-r">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="w-full">
                        <thead className="border-b bg-[#F4F6FC] text-[#5C6F88]">
                          <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Name</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Code</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Type</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">price</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Quantity</th>


                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts
                            ? filteredProducts.map(product => (
                              <tr key={product.id} className='font-medium bg-[#F4F6FC] text-[#212529] py-4'>
                                  <div className="text-sm px-3 py-4 whitespace-nowrap flex gap-2">

                                  <input
                                    type="radio"
                                    name="selectedSupplier"
                                    value={product.id}
                                    onChange={() => setSelectedSupplierId(product.id)}
                                    />
                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.name}</td>
                                    </div>
                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.id}</td>

                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.type}</td>
                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.price}</td>

                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.quantity}</td>

                              </tr>
                            ))
                            : products?.map(product => (
                              <tr key={product.id} className='font-medium text-[#212529]'>
                                <div className="text-sm flex px-3 py-4 whitespace-nowrap">
                                  <input
                                    type="radio"
                                    name="selectedSupplier"
                                    value={product.id}
                                    onChange={() => setSelectedSupplierId(product.id)}
                                  />
                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.name}</td>
                                </div>
                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.id}</td>

                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.type}</td>
                                <td className="text-sm px-3 py-4 whitespace-nowrap">{product.price}</td>

                                <td className="text-sm px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="  sm:flex sm:flex-col w-[100vw] lg:w-[64vw] lg:max-w-[100vw] border-r">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="w-full">
          <thead className="border-b Tbody bg-[#F4F6FC] text-[#5C6F88]">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Name</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Code</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Type</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Price</th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody className='Tbody'>
            {filteredProducts
              ? filteredProducts.map(product => (
                  <tr key={product.id} className='bg-[#F4F6FC] '>
                    <td className="px-3 py-2 td">
                      <div className="flex items-center gap-2 mb-2"> {/* Add margin-bottom for spacing */}
                        <input
                          type="radio"
                          name="selectedProduct"
                          value={product.id}
                        />
                        <span className="text-sm">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.id}</div> {/* Add margin-bottom for spacing */}
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.type}</div> {/* Add margin-bottom for spacing */}
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.price}</div> {/* Add margin-bottom for spacing */}
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.quantity}</div> {/* Add margin-bottom for spacing */}
                    </td>
                  </tr>
                ))
              : products?.map(product => (
                  <tr key={product.id} className='bg-[#F4F6FC]'>
                    <td className="px-3 py-2 td">
                      <div className="flex items-center gap-2 mb-2"> {/* Add margin-bottom for spacing */}
                        <input
                          type="radio"
                          name="selectedProduct"
                          value={product.id}
                        />
                        <span className="text-sm">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.id}</div> {/* Add margin-bottom for spacing */}
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.type}</div> {/* Add margin-bottom for spacing */}
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.price}</div> {/* Add margin-bottom for spacing */}
                    </td>
                    <td className="px-3 py-2 td">
                      <div className="mb-2">{product.quantity}</div> {/* Add margin-bottom for spacing */}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

     

            </div>

            <div className="sm:hidden flex flex-col w-[100vw]">
        <h1 className="bg-[#F4F5FC] font-[700] text-center text-[#5C6F88]">Name</h1>
        {filteredProducts
          ? filteredProducts.map(product => (
              <div key={product.id} className="border-b p-4">
                <div className="flex justify-between items-center">
                 <div className="flex gap-2">

                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => handleDropdownToggle(product.id)}
                  >
                  {openProductId === product.id ? <IoIosArrowDown />: <IoIosArrowForward /> }
                </button>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>

                <input
                    type="radio"
                    name="selectedSupplier"
                    value={product.id}
                    onChange={() => setSelectedSupplierId(product.id)}
                  />
                  </div>
                {openProductId ===product.id && (
                  <div className="mt-2 text-sm">
                    <p><strong>Code:</strong> {product.id}</p>
                    <p><strong>Type:</strong> {product.type}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                  </div>
                )}
              </div>
            ))
          : products?.map(product => (
              <div key={product.id} className="border-b p-4">
                <div className="flex justify-between items-center">
                 
                 <div className="flex gap-2">

                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => handleDropdownToggle(product.id)}
                  >
                  {openProductId === product.id ? <IoIosArrowDown />: <IoIosArrowForward />  }
                </button>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
                <input
                    type="radio"
                    name="selectedSupplier"
                    value={product.id}
                    onChange={() => setSelectedSupplierId(product.id)}
                  />
                  </div>
                {openProductId === product.id && (
                  <div className="mt-2 text-sm">
                    <p><strong>Code:</strong> {product.id}</p>
                    <p><strong>Type:</strong> {product.type}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                  </div>
                )}
              </div>
            ))}
      </div>                  

          </>
        )}
      </div>
      {/* <TopSuppliers/> */}
      <div className='hidden lg:block '>
<UserDetail/>

      <RecentActivities/>
      </div>
    </div>
    </div>

    );
  }
  export default InventoryPage;
  
  