"use client";
import Link from 'next/link';
import React, { useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isLogin, setIsLogin] = React.useState(false);

  const toggleNavbar = () => {
    if (navbarRef.current) {
      const navbar :any= navbarRef.current;
      if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
        navbar.setAttribute('aria-expanded', 'true');
      } else {
        navbar.classList.add('hidden');
        navbar.setAttribute('aria-expanded', 'false');
      }
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Auth.</span>
        </a>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
          ref={navbarRef}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {!isLogin ? (
            <>
            <li>
            <Link href="/login" className="block py-2 px-3 text-white mb-2 hover:bg-blue-400 bg-blue-700 rounded-lg" aria-current="page">Login</Link>
            </li>
            <li>
            <Link href="/signup" className="block py-2 px-3 mb-2 text-white hover:bg-blue-400 bg-blue-700 rounded-lg" aria-current="page">Sign Up</Link>
            </li>
            </>
            
        ):(
              <li>
                <Link href="/logout" className="block py-2 px-3 hover:bg-blue-400 text-white mb-2 bg-blue-700 rounded-lg" aria-current="page">Logout</Link>
              </li>
        )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
