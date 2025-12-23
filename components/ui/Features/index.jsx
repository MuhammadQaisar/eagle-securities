import React from "react";

const Features = () => {
  const features = [
    {
      icon: (
        <img
          src="/always-hours.svg"
          alt="24/7 Monitoring"
          className="w-12 h-12"
        />
      ),
      title: "24/7 Monitoring",
      description:
        "Our state-of-the-art monitoring center is staffed 24/7 to respond to any alerts.",
    },
    {
      icon: (
        <img
          src="/video-svgrepo-com.svg"
          alt="HD Video Surveillance"
          className="w-12 h-12"
        />
      ),
      title: "HD Video Surveillance",
      description:
        "Crystal clear high-definition video from our top-of-the-line security cameras.",
    },
    {
      icon: (
        <img
          src="/certified-professional.svg"
          alt="Expert Team"
          className="w-12 h-12"
        />
      ),
      title: "Expert Team",
      description:
        "Our team of security experts are highly trained and ready to assist you.",
    },
    {
      icon: (
        <img
          src="/access-browser-key-svgrepo-com.svg"
          alt="Remote Access"
          className="w-12 h-12"
        />
      ),
      title: "Remote Access",
      description:
        "Access your security system from anywhere in the world with our mobile app.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#591A5D] mb-4">
            Our Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the advanced capabilities that set our security solutions
            apart and ensure your safety around the clock.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#591A5D]/5 rounded-full group-hover:bg-[#591A5D]/10 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
