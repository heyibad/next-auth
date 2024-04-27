"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';

const Page = ({params}:any) => {
  const router = useRouter();
  const {id}=params

  const formHandler = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/verify', {
        token: id,
      });
      console.log(response);
      if (response.data.status == true) {
        router.push('/login');
      }
    } catch (error: any) {
      console.log(error);
    }
   
  };
  

  return (
    <div className='mt-28 '>
      <h1 className='text-4xl flex items-center justify-center mt-8 font-bold m-6'>Token Verfication: </h1>
      <form onSubmit={formHandler} className="max-w-sm mx-auto">
   
        <div className="mb-5 mt-4">
         
          <input type="input" id="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyx" 
         value={id}
         disabled
         />
        </div>
     
        <button type="submit" className="flex mt-6 justify-center items-center mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Verify</button>
      </form>

    </div>
  );
};

export default Page;
