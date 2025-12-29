const Hero = () => {
  return (
    <section
      className="relative text-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#591A5D",
        fontFamily: "'Urbanist', sans-serif",
      }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.png" // Replace with your background image
          alt="Security Surveillance Background"
          className="w-full h-full object-cover opacity-30 h-64 sm:h-full object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#591A5D] via-[#591A5D]/70 to-transparent opacity-80"></div>
      </div>

      <div className="relative z-40 max-w-7xl mx-auto flex lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Your Trusted Partner in{" "}
            <span className="text-[#a8dadc]">Security & Surveillance</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
            Protecting what matters most with cutting-edge technology and
            unwavering vigilance. Experience peace of mind with Eagle
            Securities.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#"
              className="inline-block text-white-900 font-normal py-3 px-8 rounded bg-gradient-to-r from-[#591A5D] to-[#7b2cbf] hover:from-[#4a154d] hover:to-[#6a1e9e] transition duration-300"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom-left feature card */}
      <div className="relative mx-auto mt-8 sm:mt-12 lg:absolute lg:left-28 lg:bottom-[-3rem] z-30 max-w-4xl">
        <div className="w-full bg-white text-gray-800 rounded-3xl shadow-2xl py-4 px-6 flex flex-col sm:flex-row sm:justify-between items-center sm:items-stretch gap-4 sm:gap-0">
          <div className="flex-1 px-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center">
              <img
                src="/always-hours.svg"
                alt="24/7 Security"
                className="w-17 h-17"
              />
            </div>
            <h3 className="font-bold text-center text-sm tracking-wide text-[#591A5D]">
              24/7 Security
              <br />
              Protection
            </h3>
          </div>

          <div className="flex-1 px-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex-shrink-0 rounded-full  flex items-center justify-center">
              <img
                src="/finger-print.svg"
                alt="Advanced Surveillance Technology"
                className="w-17 h-17"
              />
            </div>
            <h3 className="font-bold text-center text-sm tracking-wide text-[#591A5D]">
              Advanced Surveillance
            </h3>
          </div>

          <div className="flex-1 px-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center">
              <img
                src="/certified-professional.svg"
                alt="Trusted & Trained Professionals"
                className="w-17 h-17"
              />
            </div>
            <h3 className="font-bold text-center text-sm tracking-wide text-[#591A5D]">
              Trusted & Trained
              <br />
              Professionals
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
