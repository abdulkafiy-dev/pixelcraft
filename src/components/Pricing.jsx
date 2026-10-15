import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter Landing Page',
    price: '$50',
    description: 'Perfect for single-product launches, portfolios, or simple business landing pages.',
    features: [
      '1 Page Fully Responsive Design',
      'React & Tailwind CSS',
      'Mobile & Tablet Optimized',
      'Smooth Scroll Navigation',
      'Fast Delivery (3 Days)',
      '1 Revision Included',
    ],
    popular: false,
  },
  {
    name: 'Pro Business Package',
    price: '$120',
    description: 'Ideal for growing businesses needing dynamic features and advanced UI components.',
    features: [
      'Up to 4 Interactive Pages / Sections',
      'React, Vite & Tailwind CSS',
      'Interactive Forms & Modals',
      'Dynamic Search / Filter Component',
      'Source Code & GitHub Repository',
      'Priority Support & 3 Revisions',
    ],
    popular: true,
  },
  {
    name: 'Custom Web App / Gig',
    price: 'Custom',
    description: 'Tailored solutions built precisely to your custom Figma files or functional requirements.',
    features: [
      'Custom Component Architecture',
      'Figma / UI Design to React Code',
      'State Management & Local Storage',
      'API Integration ready',
      'Strict Linter Audited Code',
      'Dedicated Ongoing Support',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Pricing Plans
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Transparent Packages For Your Project
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Choose the right plan to get your high-performance frontend application up and running.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 flex flex-col justify-between border transition-all ${
                plan.popular
                  ? 'border-indigo-600 shadow-xl ring-2 ring-indigo-600/20 relative lg:-translate-y-2'
                  : 'border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-500 text-sm font-medium">/ project</span>}
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-3">
                  <p className="text-xs font-bold tracking-wider text-gray-400 uppercase">What's included</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="bg-indigo-50 text-indigo-600 p-1 rounded-full mt-0.5 shrink-0">
                        <Check size={14} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold transition shadow-sm ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Select Package <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}