"use client";

import ShopHero from "@/componants/shopComponants/ShopHero";
import { useEffect, useState } from "react";

export default function Home() {
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // category1 data
        const res = await fetch("/data/shopcategory.json");
        if (!res.ok) {
          throw new Error("category1.json load hoy nai");
        }
        const categoryData = await res.json();

        // products2category1 data
        const res1 = await fetch("/data/products2category1.json");
        if (!res1.ok) {
          throw new Error("products2category1.json load hoy nai");
        }
        const productsData = await res1.json();

        setCategorys(categoryData);
        setProducts(productsData);
      } catch (err) {
        console.error("Home data load error:", err);
        setError("Home data load korte problem hocche");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-700">
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-red-500">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="bg-white text-gray-800">
     <ShopHero categorys={categorys} products={products}></ShopHero>
    </div>
  );
}
