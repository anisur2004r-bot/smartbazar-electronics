import CheckProducts from "@/componants/homeComponants/CheckProducts";
import DiscountPro from "@/componants/homeComponants/DiscountPro";
import Hero from "@/componants/homeComponants/Hero";
import LastComponants from "@/componants/homeComponants/LastComponants";
import LatestProducts from "@/componants/homeComponants/LatestProducts";
import Productscategory1 from "@/componants/homeComponants/Productscategory1";
import ProductsReview from "@/componants/homeComponants/ProductsReview";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data/category1.json");
  const categorys = await res.json();

  const res1 = await fetch("http://localhost:3000/data/products2category1.json");
  const products = await res1.json();

  return (
    <div className="bg-white text-gray-700">
      <Hero />
      <Productscategory1 />
      <CheckProducts />
      <LatestProducts categorys={categorys} products={products} />
      <ProductsReview></ProductsReview>
      <DiscountPro></DiscountPro>
      <LastComponants></LastComponants>
    </div>
  );
}
