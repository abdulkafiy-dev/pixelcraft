import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="bg-indigo-600 p-2 rounded-xl text-white">
              <Code2 size={20} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Pixel<span className="text-indigo-400">Craft</span>
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} PixelCraft. Built with React, Vite & Tailwind CSS.</p>
          <p>Designed for High Performance & Conversion.</p>
        </div>
      </div>
    </footer>
  );
}