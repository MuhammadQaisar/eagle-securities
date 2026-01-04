import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const heroSlides = [
  {
    src: "/hero-image.png",
    alt: "Security Surveillance Background 1",
    title: "Your Trusted Partner in Security & Surveillance",
    description: "Protecting what matters most with cutting-edge technology and unwavering vigilance. Experience peace of mind with Eagle Securities."
  },
  {
    src: "/security-camera.avif",
    alt: "Store Security Camera",
    title: "No room for Theft in your store",
    description: "Our advanced surveillance systems provide vigilant monitoring, deterring theft and ensuring the safety of your merchandise and premises around the clock."
  },
  {
    src: "/Smart-Home-Security.jpg",
    alt: "Smart Home Security Background",
    title: "Smart Home, Smarter Security",
    description: "Integrate seamlessly with smart home devices for complete control and automation of your home's security from anywhere."
  },
  {
    src: "/commercial-security.webp",
    alt: "Commercial Security Background",
    title: "Robust Solutions for Business Protection",
    description: "Tailored security systems designed to protect your commercial assets, employees, and customers from all threats."
  },
];

const Hero = () => {
  return (
    <section
      className="relative text-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-screen"
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
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#000080] via-[#000080]/70 to-transparent opacity-80"></div>
              {/* Dynamic content overlay for each slide */}
              <div className="absolute inset-0 z-10 max-w-7xl mx-auto flex lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                    {slide.title.includes('Security & Surveillance') ? (
                      <>
                        Your Trusted Partner in{" "}
                        <span className="text-eagle-blue-light">Security & Surveillance</span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <a
                      href="#"
                      className="inline-block text-white font-normal py-3 px-8 rounded bg-gradient-to-r from-[#000080] to-[#003399] hover:from-[#000066] hover:to-[#002266] transition duration-300"
                    >
                      Get a Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom-left feature card */}
      <div className="relative mx-auto mt-8 sm:mt-12 lg:absolute lg:left-28 lg:right-28 lg:mx-auto lg:bottom-8 z-50 max-w-4xl">
        <div className="w-full bg-white text-gray-800 rounded-3xl shadow-2xl py-4 px-6 flex flex-col sm:flex-row sm:justify-between items-center sm:items-stretch gap-4 sm:gap-0">
          <div className="flex-1 px-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center">
              <svg
                fill="var(--eagle-blue)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
              >
                <g>
                  <circle cx="12" cy="8" r="2.5" stroke="var(--eagle-blue)" stroke-linecap="round"/>
                  <path d="M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205" stroke="var(--eagle-blue)"/>
                  <path d="M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205" stroke="var(--eagle-blue)"/>
                  <path d="M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z" stroke="var(--eagle-blue)" stroke-linecap="round"/>
                  <path d="M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.279 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z" fill="var(--eagle-blue)"/>
                  <path d="M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z" fill="var(--eagle-blue)"/>
                </g>
              </svg>
            </div>
            <h3 className="font-bold text-center text-sm tracking-wide text-eagle-blue">
              24/7 Security
              <br />
              Protection
            </h3>
          </div>

          <div className="flex-1 px-6 flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex-shrink-0 rounded-full  flex items-center justify-center">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--eagle-blue)"
                stroke="var(--eagle-blue)"
                className="w-12 h-12"
              >
                <g>
                  <path
                    fill="var(--eagle-blue)"
                    d="M238.986 26.47c-.825-.01-1.648-.008-2.47.003-7.52.096-14.927.958-22.188 2.578-58.085 12.96-102.088 73.253-116.93 166.41l17.776 2.833c14.167-88.922 54.783-140.9 103.074-151.674 48.29-10.776 108.966 18.458 165.854 102.81l14.923-10.065C348.077 63.82 290.963 26.958 238.985 26.47zm-7.363 42.24c-.82.008-1.638.028-2.453.06-7.827.32-15.446 1.826-22.76 4.642-19.504 7.51-36.01 23.927-49.05 48.692l15.93 8.384c11.668-22.164 25.08-34.694 39.587-40.28 14.506-5.584 30.932-4.625 50.006 3.032 38.147 15.314 84.798 58.2 132.805 120.473l14.255-10.99C360.977 139.203 313.59 94.2 269.588 76.535c-12.89-5.175-25.67-7.935-37.965-7.824zm-.592 39.466c-6.247-.03-12.35 1.114-17.99 3.853-8.596 4.174-15.492 11.964-19.933 22.44l16.575 7.024c3.164-7.466 6.913-11.18 11.22-13.273 4.308-2.09 9.795-2.65 16.82-1.382 14.05 2.538 33.037 12.87 51.923 26.805 37.77 27.872 76.124 69.76 87.81 84.947l14.266-10.977c-13.402-17.418-51.44-58.976-91.388-88.455-19.974-14.74-40.18-26.56-59.41-30.035-2.404-.434-4.812-.73-7.205-.865-.898-.05-1.793-.078-2.686-.082zm-81.47 32.566c-4.498 8.93-10.762 28.084-16.716 46.45-5.954 18.37-11.03 34.984-11.03 34.984l17.215 5.258s5.04-16.497 10.937-34.69c5.897-18.193 13.22-39.045 15.668-43.906l-16.076-8.096zm33.135 10.406c-11.62 24.464-19.368 51.84-11.992 78.483 12.94 46.74 44.042 99.694 95.953 113.173l4.524-17.422c-42.188-10.953-71.27-57.717-83.13-100.552-5.63-20.338.214-43.448 10.905-65.957l-16.26-7.722zm62.535 5.106c-.892-.006-1.79.03-2.687.105-5.386.452-10.798 2.364-15.58 5.724-6.377 4.48-11.795 11.174-16.85 20.187-8.915 15.9-7.64 33.784-.644 49.748 6.996 15.963 19.326 30.832 33.776 44.326 28.9 26.987 66.05 48.325 90.55 56.088l5.438-17.16c-20.146-6.384-57.082-27.224-83.703-52.083-13.31-12.43-24.097-25.9-29.575-38.4-5.478-12.498-6.038-23.2-.143-33.714 4.197-7.484 8.21-11.952 11.497-14.262 3.286-2.31 5.69-2.816 8.82-2.507 6.26.616 16.157 6.88 27.296 17.298 22.278 20.836 48.945 55.515 83.428 71.965l7.75-16.246c-28.587-13.637-54.798-46.34-78.883-68.865-12.... [truncated]
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="font-bold text-center text-sm tracking-wide text-eagle-blue">
                    Trusted & Trained
                    <br />
                    Professionals
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-50 flex space-x-4">
            <button className="swiper-button-prev-custom p-3 rounded-full bg-white hover:bg-opacity-80 transition-opacity duration-300">
              {/* SVG for previous icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="swiper-button-next-custom p-3 rounded-full bg-white hover:bg-opacity-80 transition-opacity duration-300">
              {/* SVG for next icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </section>
  );
};

export default Hero;