import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative bg-[#591A5D] text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg mb-6">
            Contact us today for a free consultation and let us tailor a security
            solution that meets your unique needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-red-300" />
              <a href="tel:+1234567890" className="text-lg hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-red-300" />
              <a href="mailto:info@eaglesecurities.com" className="text-lg hover:underline">
                info@eaglesecurities.com
              </a>
            </div>
          </div>

          <button className="bg-white text-[#591A5D] hover:bg-red-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* Image positioned absolutely to the bottom right */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-7/12 h-full pointer-events-none">
        <div className="absolute inset-0">
          <Image
            src="/CTA-image.png"
            alt="Call to Action"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
          />
        </div>
      </div>
    </section>
  );
}
