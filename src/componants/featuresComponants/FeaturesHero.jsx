"use client";

import React, { useEffect, useState } from "react";

const FeaturesHero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/data/productcategory1.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Product load error:", error);
      }
    };
    loadData();
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        Loading products...
      </div>
    );
  }

  // animation smooth korar jonno 2 bar repeat korbo
  const loopProducts = [...products, ...products];

  return (
    <div className="w-full py-20 bg-gray-100 overflow-hidden">
      <div className="w-full overflow-hidden  container mx-auto">
        <div className="slide-animation flex w-max">
          {loopProducts.map((pro, index) => (
            <div
              key={`${pro.id}-${index}`}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative border hover:border-[#2252D1] border-gray-200 min-w-[220px] max-w-[220px] h-50 flex flex-col items-center justify-center rounded-md px-2 py-4 mx-3 bg-white shadow-gray-300 hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
                <p className="absolute top-0 left-0 bg-[#5E17EB] text-white px-2 py-1 rounded-br-xl">
                  {pro.id}
                </p>
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="object-contain mb-2 w-20"
                />
              </div>
              <p className="font-semibold font-sans text-gray-700">
                {pro.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
