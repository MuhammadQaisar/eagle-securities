import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#000080] to-[#003399] text-white text-center py-2 px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden w-full">
        <p className="text-sm font-extralight animate-marquee flex items-center justify-center">
          24/7 Live CCTV Monitoring to Prevent Theft, Boost Safety & Improve Efficiency | ✨ New Year Deal ✨ 25 Dec 2025 – 10 Jan 2026 Services starting from $299
          <Link
            href="/contact"
            className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-3 py-1 border border-transparent rounded shadow-sm text-xs font-medium text-[#000080] bg-white hover:bg-white/30 transition-colors"
          >
            Schedule a call <img src="/telephone-svgrepo-com.svg" className="h-5 w-5 fill=[#000080]" alt="phone" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
