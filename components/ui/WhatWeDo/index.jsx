import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhatWeDo() {
  return (
    <div>
      <section
        id="about"
        className="relative py-20 px-4 text-white overflow-hidden bg-gradient-to-r from-[#591A5D] to-[#7b2cbf]"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #490000ff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-4xl font-bold mb-6">
                How we works 
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Eagle Securities is a leading provider of comprehensive security
                solutions, specializing in advanced surveillance systems,
                professional security personnel, and 24/7 monitoring services.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With over 15 years of experience, we've protected hundreds of
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
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-white-500 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-lg filter blur-3xl"></div>
              <div className="relative bg-[#FFFFFF] border border-red-800/50 rounded-2xl p-8 shadow-2xl hover:shadow-red-900/20 transition-shadow duration-300">
                <div className="w-fit p-4 rounded-2xl mb-6 backdrop-blur-sm">
                  <img
                    src="/trtl-svgrepo-com.svg"
                    alt="Mission Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#591A5D]">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-md mb-6leading-relaxed">
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
