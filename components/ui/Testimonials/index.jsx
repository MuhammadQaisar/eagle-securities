import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Eagle Securities has given us peace of mind. Their team is professional, and their technology is top-notch. I would recommend them to anyone.",
      author: "John Doe",
      company: "ABC Corp",
    },
    {
      quote:
        "The installation process was seamless, and the team was very helpful. We feel much safer with our new security system.",
      author: "Jane Smith",
      company: "XYZ Inc",
    },
    {
      quote:
        "I have been a customer for years, and I am always impressed with their customer service. They are always there when I need them.",
      author: "Peter Jones",
      company: "123 LLC",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#591A5D] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here is what our satisfied clients
            have to say about our security services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-8 text-[#591A5D]/10">
                <Quote size={48} />
              </div>
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-gray-900 font-bold text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-[#591A5D] font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
