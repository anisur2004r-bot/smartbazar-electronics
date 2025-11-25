"use client";
import React, { useState } from "react";
import Category from "../allCategoryProducts/Category";
import Products from "../allCategoryProducts/Products";

const LatestProducts = ({ categorys, products }) => {
  const [categoryid, setCategoryId] = useState();

  const handleCategory = (id) => {
    setCategoryId(id);
  };

  return (
    <div>
      <Category categorys={categorys} handleCategory={handleCategory} />
      <Products products={products} categoryid={categoryid} />
    </div>
  );
};

export default LatestProducts;
