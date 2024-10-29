"use client";
// Import necessary modules and components

import { auth } from '@/auth';
import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';


// Define UserDetail as a server component
const UserDetail =  () => {
    const { data: session } = useSession();
    // Fetch session data using auth
    // const session = await auth();
  
    // Render component
    return (
      <div className='flex flex-col space-y-3 w-[100vw] max-w-[39vw] lg:w-[25.5vw] lg:max-w-[100vw] justify-between px-6 py-[17px] border min-h-[38px]'>
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
      </div>
    );
  };

export default UserDetail;


