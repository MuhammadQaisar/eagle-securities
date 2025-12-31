import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative text-white py-20 bg-gradient-to-r from-[#000080] to-[#003399]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg mb-6">
            Contact us today for a free consultation and let us tailor a
            security solution that meets your unique needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <img
                src="/telephone-svgrepo-com.svg"
                alt="Phone"
                className="w-6 h-6 brightness-0 invert"
              />
              <a href="tel:+1234567890" className="text-lg hover:underline">
                +1(346) 822-6074
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="/email-9-svgrepo-com.svg"
                alt="Email"
                className="w-6 h-6 brightness-0 invert"
              />
              <a
                href="mailto:info@eaglesecurities.com"
                className="text-lg hover:underline"
              >
                info@eaglesecurities.com
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-white text-[#000080] hover:bg-red-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Image positioned absolutely to the bottom right (enlarged) */}
      {/* <div className="hidden lg:block absolute bottom-0 right-0 w-full lg:w-11/12 h-[150%] z-50 pointer-events-auto">
        <div className="relative w-full h-full z-50">
          <Image
            src="/CTA-image.png"
            alt="Call to Action"
            fill
            style={{ objectFit: 'cover', objectPosition: 'bottom right' }}
          />
        </div>
      </div> */}
    </section>
  );
}
