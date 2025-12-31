import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    {
      quote:
        "Exceptional security solutions with outstanding support. Their 24/7 monitoring team is responsive and professional. Highly recommended!",
      author: "Sarah Wilson",
      company: "SecureHome LLC",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#000080] to-[#003399] text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here is what our satisfied
            clients have to say about our security services.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative mx-auto max-w-2xl">
                    <div className="absolute top-6 right-8 text-[#591A5D]/10">
                      <Quote size={48} />
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-600 italic mb-6 leading-relaxed">
                        &quot;{testimonial.quote}&quot;
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-[#000080] text-white px-4 py-2 rounded-full hover:bg-[#4a154d] transition-colors"
            aria-label="Previous testimonial"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-[#000080] text-white px-4 py-2 rounded-full hover:bg-[#4a154d] transition-colors"
            aria-label="Next testimonial"
          >
            ❯
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#591A5D]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
