import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Landing Page',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate services like Formspree or EmailJS
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
              Get In Touch
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Ready to Start Your Next Project?
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have a project in mind, need a custom landing page, or want to discuss a Fiverr order? Send me a message and I'll respond within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Email</h4>
                  <p className="text-sm text-gray-600">hello@pixelcraft.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Availability</h4>
                  <p className="text-sm text-gray-600">Open for new freelance & Fiverr gigs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex bg-green-100 text-green-600 p-4 rounded-full">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  Thank you for reaching out. I'll review your project details and get back to you shortly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 bg-white transition"
                  >
                    <option value="Landing Page">Landing Page Design</option>
                    <option value="Figma to React">Figma to React</option>
                    <option value="Custom Web App">Custom Web App</option>
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 bg-white transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-indigo-200 transition"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}