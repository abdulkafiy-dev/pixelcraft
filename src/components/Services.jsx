import React from 'react';
import { Layout, Smartphone, Zap, Code, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-indigo-600" />,
    title: 'Landing Page Design',
    description: 'High-converting, responsive landing pages built with React and Tailwind CSS to turn visitors into buyers.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
    title: 'Mobile-First Development',
    description: 'Pixel-perfect layouts optimized for mobile devices, tablets, and desktops out of the box.',
  },
  {
    icon: <Zap className="w-8 h-8 text-indigo-600" />,
    title: 'Speed & Performance',
    description: 'Ultra-fast load times using modern Vite builds, lightweight CSS, and optimized assets.',
  },
  {
    icon: <Code className="w-8 h-8 text-indigo-600" />,
    title: 'Figma to React Code',
    description: 'Converting custom Figma or UI designs into clean, maintainable frontend React components.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: 'Clean & Semantic Code',
    description: 'SEO-friendly HTML structure, accessible UI components, and bug-free code audited with linter rules.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
    title: 'Interactive UI Elements',
    description: 'Adding dynamic calculators, custom forms, smooth animations, and interactive modals.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Services
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What I Can Build For Your Business
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Tailored frontend solutions designed to elevate your brand presence and drive real conversions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}