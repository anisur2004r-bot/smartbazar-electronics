import Hero from "@/componants/homeComponants/Hero";
import Productscategory1 from "@/componants/homeComponants/Productscategory1";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Hero></Hero>
      <Productscategory1></Productscategory1>
    </div>
  );
}
