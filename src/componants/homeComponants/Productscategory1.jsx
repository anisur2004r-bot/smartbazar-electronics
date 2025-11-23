"use client";

import React, { useEffect, useState } from "react";

const Productscategory1 = () => {
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

  if (!products || products.length === 0) return null;

  const loopProducts = [...products, ...products];

  return (
    <div className="relative bg-white">
      <div className="container mx-auto py-10">
        <div className="w-full overflow-hidden">
          <div className="flex products-marquee whitespace-nowrap py-4">
            <div className="flex">
              {loopProducts.map((pro, index) => (
                <div
                  key={`${pro.id}-${index}`}
                  className="border min-w-[180px] max-w-[200px] flex flex-col items-center rounded-md px-2 py-4 mx-3 bg-white shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.03]"
                >
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-28 object-contain mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    {pro.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS – Left theke Right + Slow */}
      <style>{`
        @keyframes productsMarqueeScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .products-marquee {
          animation: productsMarqueeScroll 40s linear infinite;
          display: inline-flex;
        }
        .products-marquee::-webkit-scrollbar {
          display: none;
        }

        .products-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Productscategory1;
