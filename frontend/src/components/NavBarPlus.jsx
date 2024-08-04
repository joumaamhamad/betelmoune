import React from 'react';
import { Link } from 'react-router-dom';

const NavBarPlus = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to={''} className="text-xl font-bold text-gray-900">
              Acme Co
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link to={'/'} className="text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link
              to={'/products'}
              className="text-gray-900 hover:text-gray-600"
            >
              Products
            </Link>
            <Link
              to={'/workshops'}
              className="text-gray-900 hover:text-gray-600"
            >
              Workshop
            </Link>
            <Link to={'/aboutus'} className="text-gray-900 hover:text-gray-600">
              About us
            </Link>
            <Link to={'/contact'} className="text-gray-900 hover:text-gray-600">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link to="/signin">
                <button className="bg-blue-500 text-white py-1 px-3 rounded mr-2">
                  Sign in
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-green-500 text-white py-1 px-3 rounded">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPlus;
