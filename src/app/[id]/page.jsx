"use client";
import React from "react";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const pro = useParams();
  return (
    <div>
      <h1>Product Details for ID: {pro.id}</h1>
    </div>
  );
};

export default ProductDetails;
