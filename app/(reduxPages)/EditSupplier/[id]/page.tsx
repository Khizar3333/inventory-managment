"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSupplier, updateSupplier } from '@/app/redux/slice/supplier/editSupplier';
import { RootState } from '@/app/redux/store/store';
import { useAppDispatch } from '@/app/redux/hooks/Hooks';
import { usePathname } from 'next/navigation';

const EditSupplier = ({params}: { params: { id: string } }) => {
  const  id  = params.id
  console.log(id)
//   const router = useRouter();
//   const { id } = router.query;
  const dispatch = useAppDispatch();
  const { supplier, loading, error } = useSelector((state: RootState) => state.editSupplier);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(fetchSupplier(id as string));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (supplier) {
      setName(supplier.name);
      setEmail(supplier.email);
      setContact(supplier.contact);
    }
  }, [supplier]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await dispatch(updateSupplier({ id: id as string, name, email, contact }));
    //   router.push('/suppliers');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Supplier</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block font-medium">Contact</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Update Supplier</button>
      </form>
    </div>
  );
};

export default EditSupplier;

