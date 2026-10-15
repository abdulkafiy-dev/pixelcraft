import React, { useState } from 'react';
import { Code2, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Code2 size={22} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Pixel<span className="text-indigo-600">Craft</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call To Action Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md shadow-indigo-100 transition-all hover:shadow-lg"
            >
              Hire Me <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 px-3 py-2 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-xl shadow-md"
            >
              Hire Me <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}