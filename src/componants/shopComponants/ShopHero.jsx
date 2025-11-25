"use client";
import React, { useState } from "react";
import ShopCategory from "./ShopCategory";
import ShopProducts from "./ShopProducts";

const ShopHero = ({ categorys, products }) => {
    const [categoryid, setCategoryId] = useState();

    const handleCategory = (id) => {
        setCategoryId(id);
    };

    return (
        <div>
            <div className="grid grid-cols-10 container mx-auto gap-4 py-10">
                <div className="col-span-3 border border-gray-200 shadow-xl px-4 py-4">
                    <ShopCategory categorys={categorys} handleCategory={handleCategory} ></ShopCategory>
                </div>
                <div className="col-span-7 border  border-gray-200 shadow-xl px-8 py-4">
                    <ShopProducts products={products} categoryid={categoryid}></ShopProducts>
                </div>
            </div>
        </div>
    );
};

export default ShopHero;
