import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

const heroSlides = [
  {
    src: "/hero-image.png",
    alt: "Security Surveillance Background 1",
    title: "Your Trusted Partner in Security & Surveillance",
    description:
      "Protecting what matters most with cutting-edge technology and unwavering vigilance. Experience peace of mind with Eagle Securities.",
  },
  {
    src: "/heroimage-1.svg",
    alt: "Store Security Camera",
    title: "No room for Theft in your store",
    description:
      "Our advanced surveillance systems provide vigilant monitoring, deterring theft and ensuring the safety of your merchandise and premises around the clock.",
  },
  {
    src: "/Smart-Home-Security.jpg",
    alt: "Smart Home Security Background",
    title: "Smart Home, Smarter Security",
    description:
      "Integrate seamlessly with smart home devices for complete control and automation of your home's security from anywhere.",
  },
  {
    src: "/commercial-security.webp",
    alt: "Commercial Security Background",
    title: "Robust Solutions for Business Protection",
    description:
      "Tailored security systems designed to protect your commercial assets, employees, and customers from all threats.",
  },
  {
    src: "/commercial-security.webp",
    alt: "Commercial Security Background",
    title: "Stop Shoplefter in realtime",
    description:
      "Tailored security systems designed to protect your commercial assets, employees, and customers from all threats.",
  },
  {
    src: "/commercial-security.webp",
    alt: "Commercial Security Background",
    title: "Keep your cash counter safe",
    description:
      "Tailored security systems designed to protect your commercial assets, employees, and customers from all threats.",
  },
];

const Hero = () => {
  return (
    <section
      className="relative text-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 min-h-[300px] lg:min-h-[77vh]"
      style={{
        backgroundColor: "#000080",
        fontFamily: "'Urbanist', sans-serif",
      }}
    >
      <div className="absolute inset-0 z-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-[#000080] opacity-80"></div>
              {/* Dynamic content overlay for each slide */}
              <div className="absolute inset-0 z-10 max-w-7xl mx-auto flex lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                    {slide.title.includes("Security & Surveillance") ? (
                      <>
                        Your Trusted Partner in{" "}
                        <span className="text-[#a8dadc]">
                          Security & Surveillance
                        </span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <Link
                      href="/contact"
                      className="inline-block text-white font-normal py-3 px-8 rounded bg-gradient-to-r from-[#000000] to-[#000000] hover:from-[#000066] hover:to-[#002266] transition duration-300"
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Navigation */}
      <div className="hidden md:flex absolute bottom-8 right-18 z-50 space-x-4">
        <button className="swiper-button-prev-custom p-3 rounded-full bg-opacity-20 hover:bg-opacity-40 transition-opacity duration-300">
          {/* SVG for previous icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="swiper-button-next-custom p-3 rounded-full bg-opacity-20 hover:bg-opacity-40 transition-opacity duration-300">
          {/* SVG for next icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
