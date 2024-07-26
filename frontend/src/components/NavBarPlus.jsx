import React from 'react';

const NavBarPlus = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900">
              Acme Co
            </a>
          </div>
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <a href="#" className="text-gray-900 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600">
              Products
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600">
              Workshop
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600">
              About us
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="text-gray-900 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 20.121A3 3 0 118.464 16.88L12 20.415l3.536-3.536a3 3 0 114.243 4.243L12 24.828l-6.879-6.879zM4 10V5a4 4 0 014-4h8a4 4 0 014 4v5m-4 4a4 4 0 11-8 0"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPlus;