"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store/store';
import { createOrder } from '@/app/redux/slice/order/createOrder';
import { useAppDispatch } from '@/app/redux/hooks/Hooks';

const page = () => {
  const [userId, setUserId] = useState('');
  const [items, setItems] = useState([{ productId: '', productname: '', category: '', quantity: 0, price: 0 }]);
  const dispatch = useAppDispatch();
  const orderState = useSelector((state: RootState) => state.order);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createOrder({ userId, items }));
  };

  const handleItemChange = (index: number, field: string, value: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { productId: '', productname: '', category: '', quantity: 0, price: 0 }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-lg font-medium">Item {index + 1}</h2>
            <div>
              <label htmlFor={`productId-${index}`} className="block text-sm font-medium text-gray-700">
                Product ID
              </label>
              <input
                type="text"
                id={`productId-${index}`}
                value={item.productId}
                onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor={`productname-${index}`} className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id={`productname-${index}`}
                value={item.productname}
                onChange={(e) => handleItemChange(index, 'productname', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor={`category-${index}`} className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                id={`category-${index}`}
                value={item.category}
                onChange={(e) => handleItemChange(index, 'category', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor={`quantity-${index}`} className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                id={`quantity-${index}`}
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value, 10))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor={`price-${index}`} className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id={`price-${index}`}
                value={item.price}
                onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add Item
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create Order
        </button>
      </form>
      {orderState.status === 'loading' && <p>Loading...</p>}
      {orderState.status === 'succeeded' && <p>Order created successfully!</p>}
      {orderState.status === 'failed' && <p>Error: {orderState.error}</p>}
    </div>
  );
};

export default page;
