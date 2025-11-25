import Link from 'next/link';
import React from 'react';

const CheckProducts = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="relative">
                
                {/* Background Image */}
                <img
                    className="w-full h-70 rounded-md"
                    src="https://electron.ninetheme.com/wp-content/uploads/2023/08/product-banners-h-150-17-2.png"
                    alt=""
                />

                {/* Content */}
                <div className="
                    absolute top-5 left-5 
                    md:top-10 md:left-10 
                    flex flex-col md:flex-row 
                    md:items-center justify-between 
                    w-[90%] md:w-full px-10 md:px-20 py-4
                ">
                    {/* LEFT TEXT BLOCK */}
                    <div className="space-y-4 text-white max-w-xl">
                        {/* Labels */}
                        <div className="flex flex-wrap gap-3 text-white uppercase">
                            <p className="bg-[#B20808] rounded-xl px-4 py-1 text-sm md:text-base">trend products</p>
                            <p className="bg-[#011962] rounded-xl px-4 py-1 text-sm md:text-base">promotion price</p>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                            New generation M1 Processor - limited stocks!
                        </h2>

                        {/* List */}
                        <div className="flex flex-wrap gap-4 text-white uppercase text-sm md:text-base">
                            <p>Iphone 14 Pro Max</p>
                            <p>Iphone 13 Pro Max</p>
                            <p>Samsung Ultra 22 Pro</p>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button className="
                        mt-6 md:mt-0 
                        text-lg md:text-xl 
                        text-white font-semibold 
                        hover:bg-[#1E96FC] cursor-pointer duration-500 
                        bg-[#011962] px-6 md:px-8 py-3 md:py-4 
                        rounded-full
                        self-start md:self-auto 
                    ">
                       <Link href={"shop"}> All Categories</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckProducts;
