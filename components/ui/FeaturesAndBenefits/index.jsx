import React from "react";

const FeaturesAndBenefits = () => {
  const sections = [
    {
      title: "Our Key Features",
      description:
        "Discover the advanced capabilities that set our security solutions apart and ensure your safety around the clock.",
      items: [
        {
          icon: "/always-hours.svg",
          title: "24/7 Monitoring",
          description:
            "Our state-of-the-art monitoring center is staffed 24/7 to respond to any alerts.",
        },
        {
          icon: "/video-svgrepo-com.svg",
          title: "HD Video Surveillance",
          description:
            "Crystal clear high-definition video from our top-of-the-line security cameras.",
        },
        {
          icon: "/certified-professional.svg",
          title: "Expert Team",
          description:
            "Our team of security experts are highly trained and ready to assist you.",
        },
        {
          icon: "/access-browser-key-svgrepo-com.svg",
          title: "Remote Access",
          description:
            "Access your security system from anywhere in the world with our mobile app.",
        },
      ],
    },
    {
      title: "Why Choose Us",
      description:
        "We combine decades of experience with cutting-edge technology to deliver security solutions you can trust implicitly.",
      items: [
        {
          icon: "/finger-print.svg",
          title: "Experience & Expertise",
          description:
            "With over 15 years of experience, we have the knowledge and expertise to handle all your security needs.",
        },
        {
          icon: "/license-svgrepo-com.svg",
          title: "Licensed & Certified",
          description:
            "Our team of professionals are licensed and certified to provide you with the best security services.",
        },
        {
          icon: "/support-svgrepo-com.svg",
          title: "24/7 Support",
          description:
            "We are available 24/7 to provide you with the support you need, when you need it.",
        },
        {
          icon: "/notification-unread-lines-svgrepo-com.svg",
          title: "Customer Satisfaction",
          description:
            "We are committed to providing our customers with the highest level of satisfaction.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#591A5D] to-[#7b2cbf] text-transparent bg-clip-text">
            Features and Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the advanced capabilities that set our security solutions
            apart. We combine decades of experience with cutting-edge technology
            to deliver security solutions you can trust implicitly.
          </p>
        </div>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16 last:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-gradient-to-r from-[#591A5D] to-[#7b2cbf] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-12 h-12 brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">
                    {item.title}
                  </h3>
                  <p className="text-white text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesAndBenefits;
