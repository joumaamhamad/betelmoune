import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaXing, FaLinkedinIn, FaMediumM, FaTiktok } from 'react-icons/fa';

export default function Footer() {
return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaYoutube size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaXing size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaMediumM size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTiktok size={30} />
          </a>
        </div>
        <div className="text-center mb-8">
          <h1 className="font-bold text-lg">Acme Co</h1>
          <p className="text-gray-400">Copyright © 2024 Acme Co, Inc.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">Legal Stuff</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Security</a>
          <a href="#" className="text-gray-400 hover:text-white">Website Accessibility</a>
          <a href="#" className="text-gray-400 hover:text-white">Manage Cookies</a>
        </div>
      </div>
    </div>
)
}
