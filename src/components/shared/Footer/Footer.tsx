import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
 return (
    <footer className="bg-black text-white p-4 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="mr-4">Email: info@tudominio.com</p>
            <p>Teléfono: +34 123 456 789</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
 );
};
