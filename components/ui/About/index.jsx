const About = () => {
  return (
    <section className="relative mt-20 py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Digital Security Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#591A5D 1px, transparent 1px), linear-gradient(90deg, #591A5D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Subtle Tech Glow */}
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-[#591A5D] opacity-[0.03] blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/about-image3.png"
                alt="About Eagle Securities"
                className="w-full h-full object-cover object-center"
              />
              {/* Experience Badge */}
              {/* <div className="absolute bottom-0 left-0 bg-[#591A5D] text-white p-6 rounded-tr-2xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs font-medium uppercase tracking-wider">
                  Years Experience
                </p>
              </div> */}
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h4 className="text-[#591A5D] font-semibold uppercase tracking-widest text-sm mb-2">
              Who We Are
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#591A5D] to-[#7b2cbf]">
              About Us
            </h2>
            <p className="text-md text-gray-600 mb-6 leading-relaxed">
              Eagle Securities is a leading provider of comprehensive security
              and surveillance solutions, dedicated to safeguarding homes,
              businesses, and communities. With years of experience in the
              industry, we pride ourselves on our commitment to excellence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
              {[
                "Advanced CCTV",
                "24/7 Monitoring",
                "Access Control",
                "Smart Integration",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#591A5D]"></div>
                  <span className="text-gray-700 font-xs">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Our team of highly skilled professionals utilizes state-of-the-art
              technology to design, install, and maintain security systems
              tailored to your unique needs.
            </p>

            {/* Contact Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#591A5D] text-[#591A5D]">
                  <img src="/phone.svg" alt="Phone" className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 font-medium">
                    Call Directly 24/7
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    +1(346) 907-8448
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-10 py-3 rounded-full shadow transition-colors bg-gradient-to-r from-[#591A5D] to-[#7b2cbf] hover:from-[#4a154d] hover:to-[#6a1e9e] text-white">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
