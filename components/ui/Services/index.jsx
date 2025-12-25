import { Building } from "lucide-react";
import Link from "next/link"; // Added Link import

const Services = () => {
  const services = [
    {
      icon: (
        <img
          src="/cctv-1.jpg"
          alt="CCTV & Video Surveillance"
          className="h-20 w-40 object-cover rounded-xl"
        />
      ),
      title: "CCTV & Video Surveillance",
      description:
        "Our state-of-the-art CCTV and video surveillance systems offer unparalleled monitoring capabilities. With high-definition cameras, remote access, and intelligent analytics, we ensure continuous coverage and immediate alerts, acting as a robust deterrent against unauthorized activities and providing crucial evidence when needed. Protect your premises with vigilance and advanced technology.",
      link: "/services/cctv",
    },
    {
      icon: (
        <img
          src="/access-control.jpeg"
          alt="Access Control Systems"
          className="h-20 w-40 object-cover rounded-xl"
        />
      ),
      title: "Access Control Systems",
      description:
        "Take complete control over who enters your property with our advanced access control systems. From biometric scanners and key card entry to smart lock integrations and visitor management, we provide scalable solutions that enhance security, streamline operations, and offer detailed audit trails for every entry and exit point. Secure your boundaries with precision.",
      link: "/services/access-control",
    },
    {
      icon: (
        <img
          src="/alarm-monitoring.jpeg"
          alt="Alarm Monitoring"
          className="h-20 w-40 object-cover rounded-xl"
        />
      ),
      title: "Alarm Monitoring",
      description:
        "Experience true peace of mind with our 24/7 professional alarm monitoring services. Our dedicated team is always on alert, ready to detect and respond to intrusions, fires, and other emergencies with rapid dispatch of local authorities. We provide immediate alerts to you, ensuring that help is always just moments away, protecting your assets around the clock.",
      link: "/services/alarm-monitoring",
    },
    {
      icon: (
        <img
          src="/integerated-security.jpeg"
          alt="Integrated Security Solutions"
          className="h-20 w-40 object-cover rounded-xl"
        />
      ),
      title: "Integrated Security Solutions",
      description:
        "Seamlessly combine multiple security systems into a single, easy-to-manage platform for enhanced protection. Our integrated solutions bring together CCTV, access control, and alarm systems, offering a unified interface for comprehensive oversight and simplified management. Optimize your security posture with smart, interconnected technology.",
      link: "/services/integrated-security",
    },
    {
      icon: (
        <img
          src="/Smart-Home-security.jpg"
          alt="Home Security Systems"
          className="h-20 w-40 object-cover rounded-xl"
        />
      ),
      title: "Home Security Systems",
      description:
        "Safeguard your home and loved ones with tailored security solutions. Our residential systems include smart home integration, remote access, environmental sensors, and perimeter protection. Designed for modern living, they provide convenience, control, and robust defense against all forms of threats, giving you ultimate comfort and safety.",
      link: "/services/home-security",
    },
    {
      icon: (
        <img
          src="/commercial-security.webp"
          alt="Commercial Security"
          className="h-20 w-40 object-cover rounded-xl"
        />
      ),
      title: "Commercial Security",
      description:
        "Protect your business from theft, vandalism, and unauthorized access with our robust commercial security systems. We offer solutions ranging from advanced intrusion detection and video analytics to employee access management and inventory surveillance, all designed to secure your commercial assets and ensure business continuity.",
      link: "/services/commercial-security",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#591A5D] mb-4">
            Our Comprehensive Security Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Enhance your security and protect your assets with our advanced CCTV
            monitoring solutions—helping your business grow safely and
            confidently every day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex justify-center mb-6">
                            <div className="p-4 bg-[#591A5D]/5 rounded-full group-hover:bg-[#591A5D]/10 transition-colors duration-300">
                              {service.icon}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-center leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>      </div>
    </section>
  );
};

export default Services;
