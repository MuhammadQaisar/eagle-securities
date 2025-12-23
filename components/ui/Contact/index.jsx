import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#591A5D]">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#591A5D] mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Our Address
                  </h4>
                  <p className="text-gray-600">
                    123 Security Lane, Suite 100, Protectville, PV 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#591A5D] mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Phone
                  </h4>
                  <p className="text-gray-600">+(1) 111-222-3333</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#591A5D] mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Email
                  </h4>
                  <p className="text-gray-600">info@eaglesecurities.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#591A5D] focus:border-[#591A5D] border-gray-300 rounded-md"
                  placeholder="John"
                />
              </div>
              <div className="md:col-span-1">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#591A5D] focus:border-[#591A5D] border-gray-300 rounded-md"
                  placeholder="Doe"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#591A5D] focus:border-[#591A5D] border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#591A5D] focus:border-[#591A5D] border-gray-300 rounded-md"
                  placeholder="Your message..."
                />
              </div>
              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#591A5D] hover:bg-[#4a154d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#591A5D]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
