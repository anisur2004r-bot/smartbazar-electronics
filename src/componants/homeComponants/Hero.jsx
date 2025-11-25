"use client";

import React, { useEffect, useState } from "react";

const shopNames = [
  "Welcome To SmartBazar",
  "100% Original Products",
  "Daily Special Offers",
  "Official Warranty Support",
  "24/7 Customer Support",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shopNames.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative overflow-hidden">
      
        <img
          className="w-full h-[680px] object-cover brightness-130"
          src="https://i.ibb.co/QxRDq8S/Gemini-Generated-Image-e3pbf5e3pbf5e3pb.png"
          alt="Hero"
        />
         <div className="absolute inset-0 bg-black/40"></div>
    
        <div className="absolute top-48 left-0 right-0 flex justify-center pointer-events-none">
         
          <h2
            key={currentIndex} 
            className="
              text-3xl md:text-4xl lg:text-6xl 
              text-white
              font-bold 
              font-sens 
              drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]
              sliding-text px-4 py-2 rounded-md
            "
          >
            {shopNames[currentIndex]}
          </h2>
        </div>

       
        

        
        <div className="absolute bottom-0 w-full overflow-hidden bg-[#FFFABC]/74">
          <div className="flex marquee whitespace-nowrap py-4 text-2xl font-bold">
            <div className="flex">
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount
                for New Member •
                <span className="text-yellow-600"> Special Offers </span> • Free
                Shipping
              </span>
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount
                for New Member •
                <span className="text-yellow-600"> Special Offers </span>• Free
                Shipping
              </span>
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount
                for New Member •
                <span className="text-yellow-600"> Special Offers </span>• Free
                Shipping
              </span>
            </div>

            <div className="flex">
              <span className="mx-6 uppercase  text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount
                for New Member •
                <span className="text-yellow-600"> Special Offers </span>• Free
                Shipping
              </span>
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount
                for New Member •
                <span className="text-yellow-600"> Special Offers </span>• Free
                Shipping
              </span>
              <span className="mx-6 uppercase text-gray-900">
                <span className="text-3xl text-[#5E17EB]">10%</span> Discount
                for New Member •
                <span className="text-yellow-600"> Special Offers </span>• Free
                Shipping
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
          animation: marqueeScroll 30s linear infinite;
          display: inline-flex;
        }

        /* নামের জন্য scroll animation: left → center → right */
        @keyframes slideName {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }
          25% {
            transform: translateX(0%);
            opacity: 1;
          }
          75% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateX(120%);
            opacity: 0;
          }
        }

        .sliding-text {
          animation: slideName 4s ease-in-out forwards;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default Hero;
