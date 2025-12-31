import React from "react";
import { HelpCircle } from "lucide-react";

const Faqs = () => {
  const faqs = [
    {
      question: "What kind of security systems do you offer?",
      answer:
        "We offer a wide range of security systems, including CCTV and video surveillance, access control systems, alarm monitoring, and integrated security solutions for both residential and commercial properties.",
    },
    {
      question: "How much does a security system cost?",
      answer:
        "The cost of a security system depends on your specific needs and the size of your property. We offer customized security plans to fit your budget and requirements. Contact us for a free consultation and quote.",
    },
    {
      question: "Do you offer 24/7 monitoring?",
      answer:
        "Yes, we provide 24/7 professional monitoring services to detect and respond to intrusions, fires, and other emergencies.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#000080] to-[#003399] text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our security services,
            installation process, and monitoring capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-8 text-[#000080]/10 hover:text-[#000080]">
                <HelpCircle size={48} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
