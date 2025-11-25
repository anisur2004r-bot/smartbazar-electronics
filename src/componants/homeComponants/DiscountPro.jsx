"use client";

import { useEffect, useState } from "react";

export default function DiscountPro() {
    const [products, setProducts] = useState([]);
    const [globalEndTime, setGlobalEndTime] = useState(null);
    const [globalTimer, setGlobalTimer] = useState(null);

    useEffect(() => {
        fetch("/data/products2category1.json")
            .then((resp) => resp.json())
            .then((data) => {
                setProducts(data);

                // Find the maximum discount end date
                const dates = data
                    .filter(p => p.discountEndsIn)
                    .map(p => new Date(p.discountEndsIn));

                if (dates.length > 0) {
                    const maxDate = new Date(Math.max.apply(null, dates));
                    setGlobalEndTime(maxDate);
                }
            });
    }, []);

    // countdown function
    const getRemainingTime = (endDate) => {
        const total = Date.parse(endDate) - Date.now();
        if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(total / (1000 * 60 * 60 * 24)),
            hours: Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((total / 1000 / 60) % 60),
            seconds: Math.floor((total / 1000) % 60),
        };
    };

    const [timers, setTimers] = useState({});

    // Start countdown timer for all products
    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTimers = {};
            products.forEach((p) => {
                if (p.discountEndsIn) {
                    updatedTimers[p.id] = getRemainingTime(p.discountEndsIn);
                }
            });

            // global timer update
            if (globalEndTime) {
                setGlobalTimer(getRemainingTime(globalEndTime));
            }

            setTimers(updatedTimers);
        }, 1000);

        return () => clearInterval(interval);
    }, [products, globalEndTime]);

    return (
        <main className="p-6">
            <div className="flex items-center justify-between container mx-auto">
                <h2 className="text-2xl font-bold mb-2">Discounted Products</h2>

                {/* 🔥 Global Max Discount Timer */}
                {globalTimer && (
                    <div className="text-lg font-bold text-white bg-[#1C3879] p-3 rounded-md inline-block mb-6">
                        🕒 Max Discount Ends In:
                        <span className="ml-3 bg-[#F25914] text-white px-2 py-1 rounded">
                            {globalTimer.days}d
                        </span> :
                        <span className="bg-[#F25914] text-white px-2 py-1 rounded">
                            {globalTimer.hours}h
                        </span> :
                        <span className="bg-[#F25914] text-white px-2 py-1 rounded">
                            {globalTimer.minutes}m
                        </span> :
                        <span className="bg-[#F25914] text-white px-2 py-1 rounded">
                            {globalTimer.seconds}s
                        </span>
                    </div>
                )}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-400 w-full px-4 py-5 flex items-center gap-3 rounded-lg bg-white shadow hover:shadow-lg transition relative"
                    >
                        {/* Tag */}
                        {item.tag && (
                            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                                {item.tag}
                            </span>
                        )}

                        {/* Product Image */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-32 h-32 object-contain rounded"
                        />

                        {/* Product Info */}
                        <div className="flex-1">
                            <h3 className="font-semibold mt-1 text-xl">{item.name}</h3>

                            {/* Price */}
                            <div className="mt-1 text-base">
                                <span className="line-through text-gray-400">${item.originalPrice}</span>
                                <span className="ml-2 text-red-500 font-bold">${item.currentPrice}</span>
                            </div>

                            {/* Discount */}
                            {item.discount && (
                                <span className="text-green-600 text-xs">Save: {item.discount}</span>
                            )}

                            {/* Stock */}
                            <p className="mt-1 text-xs text-gray-600">In Stock: {item.stock}</p>

                            {/* Countdown Timer */}
                            {item.discountEndsIn && timers[item.id] && (
                                <div className="mt-2 font-semibold">
                                    ⏳
                                    <span className="bg-[#F25914] text-white px-2 py-2 rounded-md">{timers[item.id].days}d</span> :
                                    <span className="bg-[#F25914] text-white px-2 py-2 rounded-md">{timers[item.id].hours}h</span> :
                                    <span className="bg-[#F25914] text-white px-2 py-2 rounded-md">{timers[item.id].minutes}m</span> :
                                    <span className="bg-[#F25914] text-white px-2 py-2 rounded-md">{timers[item.id].seconds}s</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
