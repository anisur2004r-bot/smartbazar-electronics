"use client";

import { useEffect, useState } from "react";

import CheckProducts from "@/componants/homeComponants/CheckProducts";
import DiscountPro from "@/componants/homeComponants/DiscountPro";
import Hero from "@/componants/homeComponants/Hero";
import LastComponants from "@/componants/homeComponants/LastComponants";
import LatestProducts from "@/componants/homeComponants/LatestProducts";
import Productscategory1 from "@/componants/homeComponants/Productscategory1";
import ProductsReview from "@/componants/homeComponants/ProductsReview";

export default function Home() {
  const [categorys, setCategorys] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // category1 data
        const res = await fetch("/data/category1.json");
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
        <p>লোড হচ্ছে...</p>
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
    <div className="bg-white text-gray-700">
      <Hero />
      <Productscategory1 />
      <CheckProducts />
      <LatestProducts categorys={categorys} products={products} />
      <ProductsReview />
      <DiscountPro />
      <LastComponants />
    </div>
  );
}

