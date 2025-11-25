"use client";

import React, { useEffect, useRef, useState } from "react";

const Productscategory1 = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  // drag er jonno refs
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

  // jodi repeat korte chao, use this:
  const loopProducts = [...products, ...products];
  // jodi repeat na chao:
  // const loopProducts = products;

  // --------- Drag handlers ----------
  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDownRef.current = true;
    slider.classList.add("cursor-grabbing");
    startXRef.current = e.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDownRef.current = false;
    slider.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDownRef.current = false;
    slider.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;
    if (!isDownRef.current) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // drag speed
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div className="relative bg-white">
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-between px-4 py-4 text-gray-700">
          <h3 className="text-2xl font-semibold text-gray-700">Most Searched Categorys</h3>
          <button className="border px-8 py-3 font-semibold hover:bg-gray-700 hover:text-white cursor-pointer duration-500 rounded-full border-gray-400">All Categorys</button>
        </div>
        <div className="w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex whitespace-nowrap py-4 overflow-x-scroll cursor-grab select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex">
              {loopProducts.map((pro, index) => (
                <div key={`${pro.id}-${index}`} className=" flex flex-col items-center gap-4">
                  <div className="relative border hover:border-[#2252D1] border-gray-200 min-w-[180px] max-w-[200px] h-50 flex flex-col items-center justify-center rounded-md px-2 py-4 mx-3 bg-white shadow-gray-300 hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
                    <p className="absolute top-0 left-0 bg-[#5E17EB] text-white px-2 py-1 rounded-br-xl">{pro.id}</p>
                    <img src={pro.image} alt={pro.name}
                      className="object-contain mb-2 w-20"
                    />
                  </div>
                  <p className=" font-semibold font-sans text-gray-700">{pro.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* scrollbar hide optional */
        .overflow-x-scroll {
          scrollbar-width: none;
        }
        .overflow-x-scroll::-webkit-scrollbar {
          display: none;
        }

        .cursor-grab {
          cursor: grab;
        }
        .cursor-grabbing {
          cursor: grabbing;
        }
      `}</style>
    </div>
  );
};

export default Productscategory1;
