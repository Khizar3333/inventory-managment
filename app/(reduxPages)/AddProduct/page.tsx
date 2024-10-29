"use client"
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import {  RootState } from '@/app/redux/store/store';
import { addProduct } from '@/app/redux/slice/Inventory';
import { useAppDispatch } from '@/app/redux/hooks/Hooks';
import toast from 'react-hot-toast';

const page = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.inventory);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('');
  const [supplierId, setSupplierId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(addProduct({
        name,
        price: parseFloat(price), // Convert price to a number
        quantity: parseInt(quantity), // Convert quantity to a number
        type,
        supplierId,
      }));


// khizar
      if (addProduct.fulfilled.match(resultAction)) {
        toast.success('Product added successfully!');
      } else {
        if (resultAction.payload) {
          toast.error(`Error: ${resultAction.payload}`);
        } else {
          toast.error('Failed to add product');
        }
      }
    } catch (err) {
      toast.error('An unexpected error occurred');
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-bold mb-4 text-center">Add New Product</h1>
    {error && <p className="text-red-500">{error}</p>}
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div>
        <label className="block mb-1">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div>
        <label className="block mb-1">Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div>
        <label className="block mb-1">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <div>
        <label className="block mb-1">Supplier ID</label>
        <input
          type="text"
          value={supplierId}
          onChange={(e) => setSupplierId(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full sm:w-auto sm:self-start"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  </div>
  );
};

export default page;
