import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../../components/ui/Hero";
import About from "../../components/ui/About";
import Services from "../../components/ui/Services";
import WhatWeDo from "../../components/ui/WhatWeDo";
import FeaturesAndBenefits from "../../components/ui/FeaturesAndBenefits"; // Import the combined component
import Testimonials from "../../components/ui/Testimonials";
import Faqs from "../../components/ui/Faqs";
import Cta from "../../components/ui/Cta"; // Import the new Cta component
import Contact from "../../components/ui/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    
      <Hero />
      <About />
      <Services />
      <WhatWeDo />
      <FeaturesAndBenefits /> {/* Use the combined component */}
      <Testimonials />
      <Faqs />
      <Cta /> {/* Render the Cta component here */}
      <Contact />
    </>
  );
}
