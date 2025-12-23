import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <img
          src="/finger-print.svg"
          alt="Experience & Expertise"
          className="w-12 h-12"
        />
      ),
      title: "Experience & Expertise",
      description:
        "With over 15 years of experience, we have the knowledge and expertise to handle all your security needs.",
    },
    {
      icon: (
        <img
          src="/certified-professional.svg"
          alt="Licensed & Certified"
          className="w-12 h-12"
        />
      ),
      title: "Licensed & Certified",
      description:
        "Our team of professionals are licensed and certified to provide you with the best security services.",
    },
    {
      icon: (
        <img src="/always-hours.svg" alt="24/7 Support" className="w-12 h-12" />
      ),
      title: "24/7 Support",
      description:
        "We are available 24/7 to provide you with the support you need, when you need it.",
    },
    {
      icon: (
        <img
          src="/notification-unread-lines-svgrepo-com.svg"
          alt="Customer Satisfaction"
          className="w-12 h-12"
        />
      ),
      title: "Customer Satisfaction",
      description:
        "We are committed to providing our customers with the highest level of satisfaction.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#591A5D] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine decades of experience with cutting-edge technology to
            deliver security solutions you can trust implicitly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#591A5D]/5 rounded-full group-hover:bg-[#591A5D]/10 transition-colors duration-300">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
