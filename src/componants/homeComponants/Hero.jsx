"use client";

import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden">

        {/* Image */}
        <img
          className="w-full h-[640px] object-cover brightness-110"
          src="https://i.ibb.co/QxRDq8S/Gemini-Generated-Image-e3pbf5e3pbf5e3pb.png"
          alt="Hero"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-gray-100">
          <p className="text-5xl font-bold mb-4">
            Power Up Your Life, with <br /> Quality Electronics
          </p>
          <button className="text-sm font-semibold bg-[#4B12BC] px-8 py-3 rounded-md hover:bg-gray-700">
            View All Products
          </button>
        </div>

        {/* Infinite Marquee */}
        <div className="absolute bottom-0 w-full overflow-hidden bg-[#FFFABC]/60">
          <div className="flex marquee whitespace-nowrap py-4 text-2xl font-bold">

            {/* Duplicate text twice for seamless loop */}
            <div className="flex">
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount for New Member •<span className="text-yellow-600"> Special Offers </span> • Free Shipping
              </span>
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount for New Member •<span className="text-yellow-600"> Special Offers </span>• Free Shipping
              </span>
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount for New Member •<span className="text-yellow-600"> Special Offers </span>• Free Shipping
              </span>
            </div>

            <div className="flex">
              <span className="mx-6 uppercase  text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount for New Member • <span className="text-yellow-600"> Special Offers </span>• Free Shipping
              </span>
              <span className="mx-6 uppercase">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount for New Member • <span className="text-yellow-600"> Special Offers </span>• Free Shipping
              </span>
              <span className="mx-6 uppercase">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount for New Member • <span className="text-yellow-600"> Special Offers </span>• Free Shipping
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          animation: marqueeScroll 12s linear infinite;
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};

export default Hero;
