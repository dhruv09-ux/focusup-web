import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600">Focus Up</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
            <a href="#detailed-features" className="text-gray-700 hover:text-red-600 transition">Features</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-pink-50 rounded">Home</a>
            <a href="#detailed-features" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-pink-50 rounded">Features</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-pink-50 rounded">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-pink-50 rounded">Contact</a>
            <button className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
