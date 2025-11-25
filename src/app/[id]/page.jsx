"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch Product
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("/data/products2category1.json");
      const products = await res.json();
      const p = products.find((prod) => prod.id == id);
      setProduct(p);
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <div className="text-center py-20 text-gray-500">
        Loading...
      </div>
    );

  // Increase
  const increase = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  // Decrease
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Total Price
  const totalPrice = product.currentPrice * quantity;

  return (
    <div className="bg-gray-100 text-black">
      <div className="container mx-auto py-10 flex flex-col lg:flex-row gap-10">

        {/* Images */}
        <div className="flex flex-col gap-4">
          <div className="w-148 h-142 border border-gray-300 bg-white rounded-md shadow-xl p-4 flex items-center justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="h-100 w-100 object-contain"
            />
          </div>

          <div className="flex gap-3">
            {[product.img, product.img, product.img, product.img].map((img, idx) => (
              <div
                key={idx}
                className="w-20 h-20 border border-gray-300 bg-white rounded-md flex items-center justify-center cursor-pointer hover:scale-105 transition"
              >
                <img src={img} alt={`thumb-${idx}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex-1">
          <p className="font-semibold text-gray-500 font-mono mb-6">
            Home Products Apple Airpods Headphones
          </p>

          <h1 className="text-4xl text-gray-700 font-bold mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center py-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.067 9.378c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.951z" />
              </svg>
            ))}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-500 text-white px-3 py-2 rounded">BESTSELLER</span>
            <span className="bg-red-100 text-red-600 px-3 py-2 rounded">9%</span>
          </div>

          {/* Features */}
          <ul className="list-disc ml-5 py-4 text-xl font-sans text-gray-700">
            {product.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>

          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-red-600">
              ${product.currentPrice}
            </span>

            {product.discount && (
              <span className="line-through text-gray-400">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Total Price */}
          <div className="text-xl font-bold text-green-700 mb-2">
            Total: ${totalPrice}
          </div>

          {/* COLOR */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-semibold">COLOR</span>
            {["black", "blue", "red"].map((color) => (
              <span
                key={color}
                className={`w-6 h-6 rounded-full border cursor-pointer ${color === "black"
                    ? "bg-black"
                    : color === "blue"
                      ? "bg-blue-600"
                      : "bg-red-600"
                  }`}
              ></span>
            ))}
          </div>

          {/* Quantity + Buttons */}
          <div className="flex flex-col items-start gap-4 mb-4">

            <div className="flex items-center gap-14">
              {/* Quantity Selector */}
              <div className="flex items-center bg-white border border-gray-200 rounded">
                <button
                  className="px-6 py-3 text-xl font-bold cursor-pointer"
                  onClick={decrease}
                >
                  -
                </button>

                <span className="px-6 py-3 text-2xl font-semibold border-gray-200 border-l border-r">
                  {quantity}
                </span>

                <button
                  className="px-6 py-3 text-xl font-bold cursor-pointer"
                  onClick={increase}
                >
                  +
                </button>
              </div>

              <div className="flex gap-4">
                <CiHeart className="bg-[#90A8E8] w-12 h-12 text-white" />
                <AiOutlineDollarCircle className="bg-[#90A8E8] w-12 h-12 text-white" />
              </div>
            </div>

            {/* Buttons */}
            <div className="space-x-8">
              <button className="bg-blue-600 text-white px-13 py-3 rounded hover:bg-[#011962] transition">
                Add to Cart
              </button>

              <button className="bg-gray-700 text-white px-13 py-3 rounded hover:bg-gray-900 transition">
                Buy Now
              </button>
            </div>

          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold uppercase">Product  Ditails</h2>
          <div className="w-90 space-y-8 mt-5 text-gray-500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi distinctio, iusto reiciendis odit minus eius aliquid voluptatibus illum sunt.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur omnis sequi nulla cupiditate perferendis sapiente ad corporis culpa quo repudiandae quaerat veritatis accusamus aspernatur, maxime est odit quod neque voluptatum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam laborum quaerat eveniet beatae quibusdam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
