"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();

  const formHandler = async (e:any) => {
    e.preventDefault();
    if (user.email.trim().length > 0 && user.password.trim().length > 0) {
      setButtonDisabled(true); // Disable the button before submission
      try {
        const { data } = await axios.post('/api/user/login', user);
        console.log(data);
        if (data.status === true) {
          alert("Login Successful");
          router.push('/');
        } else {
          alert("Login Failed");
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert("An error occurred while logging in.");
      } finally {
        setButtonDisabled(false); // Enable the button after submission
      }
    } else {
      alert("Please enter valid email and password.");
    }
  };
  

  return (
    <div className='mt-14'>
      <h1 className='text-4xl flex items-center justify-center mt-8 font-bold'>Login</h1>
      <form onSubmit={formHandler} className="max-w-sm mx-auto">
        <div className="mb-5 mt-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <button type="submit" className="flex mt-4 justify-center items-center mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={buttonDisabled}>Submit</button>
      </form>
      <Link href="/signup" className='mt-8 uppercase flex justify-center item-center my-2 text-sm'>
        Click Here to SignUp
      </Link>
    </div>
  );
};

export default Page;
