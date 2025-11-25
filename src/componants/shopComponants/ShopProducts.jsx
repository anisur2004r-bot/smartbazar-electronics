"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ShopProducts = ({ products ,categoryid }) => {
    const filter = categoryid? products.filter(item=>item.categoryId==categoryid):products
    const router = useRouter();

    const handleViewProduct = (id) => {
        router.push(`${id}`);
    };

    return (
        <div className="grid grid-cols-1 container mx-auto sm:grid-cols-2 md:grid-cols-3 lg:flex-wrap gap- py-8">
            {filter.map((product) => (
                <div key={product.id} className="border border-gray-300 rounded-lg  shadow-gray-700 hover:shadow-2xl hover:border-[#4B12BC] hover:border-3 transition relative">

                    {/* Tag */}
                    {product.tag && (
                        <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                            {product.tag.toUpperCase()}
                        </span>
                    )}

                    {/* Image */}
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-70 border-b border-gray-300 py-3 rounded mb-4"
                    />

                    {/* Name */}
                    <div className='px-5 py-3'>
                        <h2 className="text-xl font-sens font-semibold mb-2">{product.name}</h2>

                        {/* Price */}
                        <div className="mb-2">
                            <span className="text-red-600 font-bold text-2xl">${product.currentPrice}</span>
                            {product.discount && (
                                <span className="line-through text-xl text-gray-400 ml-2">${product.originalPrice}</span>
                            )}
                        </div>

                        {/* Stock */}
                        <div className=" text-green-600 mb-2">IN STOCK: {product.stock}</div>

                        {/* Features */}
                        <ul className="text-sm text-gray-700 mb-4 space-y-1">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex font-mono items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button
                            onClick={() => handleViewProduct(product.id)}
                            className="w-full bg-blue-600 hover:bg-[#011962] font-semibold text-white py-4 rounded cursor-pointer transition"
                        >
                            View Products
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShopProducts;
