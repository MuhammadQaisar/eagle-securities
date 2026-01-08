import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="relative mt-20 py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Digital Security Background Pattern (grid removed) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Removed repeating grid background to eliminate background grid lines */}
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-[#000080] opacity-[0.03] blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 relative">
            <div className="rounded-xl border-2 border-[#000080]/5 overflow-hidden relative overflow-hidden shadow-xl">
              <img
                src="/about-image.svg"
                alt=""
                className="w-full h-auto object-cover object-center lg:w-full"
              />
              {/* Experience Badge */}
              {/* <div className="absolute bottom-0 left-0 bg-[#000080] text-white p-6 rounded-tr-2xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs font-medium uppercase tracking-wider">
                  Years Experience
                </p>
              </div> */}
            </div>
          </div>

          <div className="lg:w-1/2 text-left">
            <h4 className="text-[#000080] font-semibold uppercase tracking-widest text-sm mb-2"></h4>
            <h2 className="text-3xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#000080] to-[#003399]">
              About Us
            </h2>
            <p className="text-2xl text-gray-600 mb-6 leading-relaxed">
              Eagle Securities is a leading provider of comprehensive security
              solutions, dedicated to protecting homes, businesses, and
              communities. With years of experience in the industry.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Video Surveillance",
                "24/7 Monitoring",
                "Access Control",
                "Smart Integration",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <img
                    src="/check-circle-svgrepo-com.svg"
                    alt="Checkmark"
                    className="w-7 h-7 text-[#000080] flex-shrink-0"
                  />
                  <span className="text-gray-700 font-4xl">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Our mission is to provide our clients with peace of mind by
              delivering state-of-the-art security systems and exceptional
              customer service. We specialize in a wide range of services,
              including CCTV surveillance, access control, alarm monitoring, and
              integrated security systems. At Eagle Securities, we understand
              that every client has unique security needs. That's why we offer
              customized solutions tailored to your specific requirements and
              budget. Our team of certified professionals is committed to
              ensuring your safety and security 24/7.
            </p>

            {/* Contact Card */}
            <div className=" p-4 sm:py-2 px-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full text-[#000080]">
                  <img
                    src="/email-9-svgrepo-com.svg"
                    alt="Phone"
                    className="h-8 w-8 fill=[#000080]"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium">
                    Email Us
                  </div>
                  <div className="text-lg font-bold text-[#000080]">
                    info@eaglesecurities.org
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-3 rounded-full shadow transition-colors bg-gradient-to-r from-[#000080] to-[#003399] hover:from-[#000066] hover:to-[#002266] text-white"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
