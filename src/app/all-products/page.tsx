"use client";
import React from "react";

import ProductCard from "@/components/share/product-card/ProductCard";
import AllProductInfo from "@/components/all-products/AllProductInfo";

import { info } from "@/constants/allProducts";
import Navbar from "@/components/share/navbar/Navbar";
import Footer from "@/components/share/footer/Footer";


const page = () => {
const handleChange=()=>{
  console.log("hello")
}
  return (
    <div className="">
      {/* grid grid-cols-4 px-36 gap-20 */}
      {/* <div className="bg-red-00 col-span-1">
        <AllProductInfo />
      </div> */}
     
     <Navbar onMenuClick={handleChange}/>
      <div className="bg-red-00 px-20 py-10 text-center">
        {/* This is all products */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {info.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer/>

     
    </div>
  );
};

export default page;
