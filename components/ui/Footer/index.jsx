import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative bg-zinc-900 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 25%, rgba(89, 26, 93, 0.15) 25%, rgba(89, 26, 93, 0.15) 50%, transparent 50%, transparent 75%, rgba(89, 26, 93, 0.15) 75%),
          linear-gradient(-45deg, transparent 25%, rgba(123, 44, 191, 0.15) 25%, rgba(123, 44, 191, 0.15) 50%, transparent 50%, transparent 75%, rgba(123, 44, 191, 0.15) 75%)
        `,
        backgroundSize: "60px 60px",
        backgroundPosition: "0 0, 30px 30px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-900 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-16 w-16"
              src="/eagle-sec-footer.svg"
              alt="Eagle Securities"
            />
            <p className="text-gray-400 text-base">
              Protecting what matters most.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/services"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      CCTV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Access Control
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Alarm Monitoring
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jobs"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Jobs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Eagle Securities, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
