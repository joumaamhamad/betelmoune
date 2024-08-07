import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavBarPlus = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to={''} className="text-xl font-bold text-gray-900">
              Bel Elmouneh
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
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              className="text-gray-900 hover:text-gray-600 cursor-pointer"
            >
              About us
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1200}
              className="text-gray-900 hover:text-gray-600 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link to="/signin">
                <button className="bg-blue-500 text-white py-1 px-3 hover:bg-blue-700 rounded mr-2">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-green-500 text-white py-1 px-3 hover:bg-green-700 rounded">
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
