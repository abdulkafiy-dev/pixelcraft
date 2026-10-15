import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-indigo-100">
              <Zap size={16} className="text-indigo-600" /> Available for Freelance & Fiverr Projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              High-Converting Web Apps & <span className="text-indigo-600">Landing Pages</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build blazing-fast, responsive web interfaces using React and Tailwind CSS. Turn your visitors into paying customers with clean, maintainable code.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02]"
              >
                Get Started Today <ArrowRight size={18} />
              </a>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 transition-all"
              >
                View My Work
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> 100% Responsive UI
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-indigo-500" /> Clean Linter Code
              </div>
            </div>
          </div>

          {/* Right Column: Code Mockup Graphic */}
          <div className="relative">
            <div className="relative mx-auto max-w-md bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 p-6 text-white">
              <div className="flex items-center space-x-2 pb-4 border-b border-gray-800">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-400 ml-2 font-mono">pixelcraft-config.jsx</span>
              </div>
              <div className="py-6 space-y-4 font-mono text-sm">
                <p className="text-indigo-400">// Frontend Tech Stack</p>
                <p className="text-gray-300">const agency = <span className="text-green-400">"PixelCraft"</span>;</p>
                <p className="text-gray-300">const stack = <span className="text-green-400">["React", "Vite", "Tailwind"]</span>;</p>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 space-y-2">
                  <p className="text-xs text-gray-400">Deployment Status: <span className="text-green-400 font-bold">100% Optimized 🚀</span></p>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}