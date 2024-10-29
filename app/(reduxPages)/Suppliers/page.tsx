"use client"
import { useSelector, useDispatch } from "react-redux";
import { fetchSuppliers } from "@/app/redux/slice/supplier/supplier";
import { useState, useEffect } from "react";
import { Supplier } from "@prisma/client"; // Assuming this is your Prisma client type
import { useAppDispatch } from "@/app/redux/hooks/Hooks";
import { RootState } from '@/app/redux/store/store';
import { GoSearch } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import TopSuppliers from "@/components/topSuppliers/TopSuppliers";
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const SupplierPage = ({params}: {params: { id: string }}) => {
  const dispatch = useAppDispatch();
  const router = useRouter(); // Use the useRouter hook
  const suppliers = useSelector((state:RootState) => state.suppliers.suppliers);
  const loading = useSelector((state:RootState) => state.suppliers.loading);
  const error = useSelector((state:RootState) => state.suppliers.error);
  const [filteredSuppliers, setFilteredSuppliers] = useState<Supplier[] | null>(null);
  const [selectedSupplierId, setSelectedSupplierId] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const id=params.id
  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    if (suppliers) {
      setFilteredSuppliers(
        suppliers.filter(
          (supplier: { name: string; email: string; contact:string|null }) =>
            supplier.name.toLowerCase().includes(searchTerm) ||
            supplier.email.toLowerCase().includes(searchTerm)||
            supplier.contact?.includes(searchTerm)
        )
      );
    }
  };

  const [openSupplierId, setOpenSupplierId] = useState(null);

  const handleDropdownToggle = (id:any) => {
    setOpenSupplierId(openSupplierId === id ? null : id);
  };

  const handleEditClick = () => {
    if (selectedSupplierId) {
      router.push(`/editSupplier/${selectedSupplierId}`);
    } else {
      alert('Please select a supplier to edit.');
    }
  };

  return (
    
    <div className="flex flex-col lg:flex-row ">
      <div className=" order-last lg:order-first">
        <div className='bg-[#F4F6FC] py-9 w-[100vw] lg:w-[56vw] lg:max-w-[60vw]'>
          <div className='flex justify-evenly items-center'>
            <div className='flex'>
              <h1 className='text-[18px] font-bold'>Suppliers</h1>
            </div>
            <div className='h-9 bg-white flex items-center gap-2 rounded-lg'>
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
              <button onClick={handleEditClick} className='text-xs lg:text-[14px]'>
                Edit Suppliers
              </button>
            </div>
          </div>
        </div>
        <hr className="w-full"/>
        {error && <p className="">{error}</p>}
        {loading ? (
          <p>Loading suppliers...</p>
        ) : (
          <>
            {/* <div className='flex h-[909px]'>
              <div className="flex flex-col w-[100vw] lg:w-[56vw] lg:max-w-[60vw] border-r">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="w-full">
                        <thead className="border-b bg-[#F4F6FC] text-[#5C6F88]">
                          <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Select</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Supplier Name</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Contact No</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredSuppliers
                            ? filteredSuppliers.map(supplier => (
                              <tr key={supplier.id} className='font-medium text-[#212529] py-4'>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">
                                  <input
                                    type="radio"
                                    name="selectedSupplier"
                                    value={supplier.id}
                                    onChange={() => setSelectedSupplierId(supplier.id)}
                                  />
                                </td>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.name}</td>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.email}</td>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.contact}</td>
                              </tr>
                            ))
                            : suppliers?.map(supplier => (
                              <tr key={supplier.id} className='font-medium text-[#212529]'>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">
                                  <input
                                    type="radio"
                                    name="selectedSupplier"
                                    value={supplier.id}
                                    onChange={() => setSelectedSupplierId(supplier.id)}
                                  />
                                </td>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.name}</td>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.email}</td>
                                <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.contact}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      <div className='flex h-[909px]'>
      {/* Table for larger screens */}
      <div className="hidden sm:flex flex-col w-[100vw] lg:w-[56vw] lg:max-w-[60vw] border-r">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="w-full">
                <thead className="border-b bg-[#F4F6FC] text-[#5C6F88]">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Select</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Supplier Name</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSuppliers
                    ? filteredSuppliers.map(supplier => (
                        <tr key={supplier.id} className='font-medium text-[#212529] py-4'>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <input
                              type="radio"
                              name="selectedSupplier"
                              value={supplier.id}
                              onChange={() => setSelectedSupplierId(supplier.id)}
                            />
                          </td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.name}</td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.email}</td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.contact}</td>
                        </tr>
                      ))
                    : suppliers?.map(supplier => (
                        <tr key={supplier.id} className='font-medium text-[#212529]'>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <input
                              type="radio"
                              name="selectedSupplier"
                              value={supplier.id}
                              onChange={() => setSelectedSupplierId(supplier.id)}
                            />
                          </td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.name}</td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.email}</td>
                          <td className="text-sm px-6 py-4 whitespace-nowrap">{supplier.contact}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Card view with dropdown for smaller screens */}
      <div className="sm:hidden flex flex-col w-[100vw]">
        <h1 className="bg-[#F4F5FC] font-[700] text-center text-[#5C6F88]">Name</h1>
        {filteredSuppliers
          ? filteredSuppliers.map(supplier => (
              <div key={supplier.id} className="border-b p-4">
                <div className="flex justify-between items-center">
                 <div className="flex gap-2">

                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => handleDropdownToggle(supplier.id)}
                  >
                  {openSupplierId === supplier.id ? <IoIosArrowDown />: <IoIosArrowForward /> }
                </button>
                <h3 className="text-lg font-semibold">{supplier.name}</h3>
                    </div>

                <input
                    type="radio"
                    name="selectedSupplier"
                    value={supplier.id}
                    onChange={() => setSelectedSupplierId(supplier.id)}
                  />
                  </div>
                {openSupplierId === supplier.id && (
                  <div className="mt-2 text-sm">
                    <p><strong>Email:</strong> {supplier.email}</p>
                    <p><strong>Contact No:</strong> {supplier.contact}</p>
                  </div>
                )}
              </div>
            ))
          : suppliers?.map(supplier => (
              <div key={supplier.id} className="border-b p-4">
                <div className="flex justify-between items-center">
                 
                 <div className="flex gap-2">

                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => handleDropdownToggle(supplier.id)}
                  >
                  {openSupplierId === supplier.id ? <IoIosArrowDown />: <IoIosArrowForward />  }
                </button>
                <h3 className="text-lg font-semibold">{supplier.name}</h3>
                </div>
                <input
                    type="radio"
                    name="selectedSupplier"
                    value={supplier.id}
                    onChange={() => setSelectedSupplierId(supplier.id)}
                  />
                  </div>
                {openSupplierId === supplier.id && (
                  <div className="mt-2 text-sm">
                    <p><strong>Email:</strong> {supplier.email}</p>
                    <p><strong>Contact No:</strong> {supplier.contact}</p>
                  </div>
                )}
              </div>
            ))}
      </div>
    </div>

     

        
        

      </>
    )}
    </div>
      <div className="order-first lg:order-last justify-center">

      <TopSuppliers/>
      </div>
    </div>
  )    
    
    

  
};

export default SupplierPage;









































