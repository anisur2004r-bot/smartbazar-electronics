// ReviewCarousel.jsx
"use client";
import React, { useEffect, useState, useRef } from "react";

const ProductsReview = () => {
    const [reviews, setReviews] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        // Fetch JSON data
        const fetchReviews = async () => {
            const res = await fetch("/data/productsReview.json"); // তুমি reviews.json path ঠিক করবে
            const data = await res.json();
            setReviews(data);
        };
        fetchReviews();
    }, []);

    // Auto scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1; // scroll speed
                if (
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollLeft = 0; // loop
                }
            }
        }, 20); // smaller = faster
        return () => clearInterval(interval);
    }, [reviews]);

    return (
        <div className="bg-gray-50">
            <div className=" container mx-auto py-10">
                <div className="flex items-center justify-between py-10">
                    <div className="flex items-center gap-8">
                        <h2 className="text-2xl font-bold mb-6 translate-y-3">Customer Reviews</h2>
                        <p>Our references are very valuable, the result of a great effort...</p>
                    </div>
                    <button className="bg-[#2252D1] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#011962] cursor-pointer duration-300">Chack Products</button>
                </div>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-hidden gap-6 scrollbar-hide"
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex-shrink-0 w-90 h-90 p-5 bg-white border rounded-lg shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <p className="bg-gray-300 px-2 py-4 rounded-full text-black font-semibold border-green-500 border-2 text-gray-500">Client</p>
                                <div className="flex items-center gap-8">
                                    <h3 className=" text-xl font-bold">{review.reviewer}</h3>
                                    <p className="text-sm border  text-[#2252D1] px-3 py-1 rounded-md ">{review.designation}</p>
                                </div>
                            </div>
                            <div className="mb-2 flex items-center">
                                <span className="text-yellow-400 font-bold mr-2">
                                    {"★".repeat(review.rating)}
                                </span>
                                <span className="text-gray-400">
                                    {"☆".repeat(5 - review.rating)}
                                </span>
                                <p className="bg-[#019267] px-3 text-white rounded-md">{review.rating}</p>
                            </div>
                            <p className="text-gray-700 mb-2">{review.review} Lorem ipsum dolor sit amet consectetur </p>
                            <p className="text-gray-500 border-b py-4 border-gray-400">{review.timeAgo}</p>
                            <div className="flex items-center py-3">
                                <img className="w-20" src={review.productImg} alt="" />
                                <p className="mt-2 font-semibold text-black">{review.productName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsReview;
