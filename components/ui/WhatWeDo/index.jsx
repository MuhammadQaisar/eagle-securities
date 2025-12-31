import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhatWeDo() {
  return (
    <div>
      <section
        id="about"
        className="relative py-20 px-4 text-white overflow-hidden bg-gradient-to-r from-[#591A5D] to-[#7b2cbf]"
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                How We Work
              </h2>
              <p className="text-gray-100 text-lg mb-6 leading-relaxed">
                Eagle Securities is a leading provider of comprehensive security
                solutions, specializing in advanced surveillance systems,
                professional security personnel, and 24/7 monitoring services.
              </p>
              <p className="text-gray-100 text-lg mb-10 leading-relaxed">
                With over 9 years of experience, we've protected hundreds of
                residential and commercial properties with cutting-edge
                technology and highly trained security professionals.
              </p>
              <div className="space-y-4">
                {[
                  "Licensed & Certified Professionals",
                  "State-of-the-Art Technology",
                  "Rapid Emergency Response",
                  "Customized Security Plans",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-white font-medium text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl filter blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="w-fit p-4 rounded-full mb-6 bg-[#591A5D]/10">
                  <img
                    src="/trtl-svgrepo-com.svg"
                    alt="Mission Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#000080]">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide unparalleled security solutions that give our
                  clients complete peace of mind through advanced technology,
                  professional expertise, and unwavering commitment to safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
