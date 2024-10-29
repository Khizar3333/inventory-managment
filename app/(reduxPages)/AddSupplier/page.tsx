"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSupplier } from "@/app/redux/slice/supplier/createSupplier"; // Adjust the path
import { useAppDispatch } from "@/app/redux/hooks/Hooks";

const Page = () => {
  const [supplierData, setSupplierData] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
  });
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSupplierData({
      ...supplierData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(createSupplier(supplierData));
      // Handle successful creation (e.g., reset form, show success message)
      setSupplierData({id:"", name: "", email: "", contact: "" });
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error("Error creating supplier:", error);
    }}
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Supplier</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={supplierData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={supplierData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={supplierData.contact}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Supplier
        </button>
      </form>
    </div>
  )
}

export default Page
