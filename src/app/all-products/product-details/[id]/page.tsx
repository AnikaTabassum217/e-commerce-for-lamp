"use client";
import React, { useState } from "react";
import { info } from "@/constants/allProducts";
import AddToCart from "@/components/share/buttons/add-to-cart-button/AddToCart";
import DeliveryDescription from "@/components/share/delivery-description/DeliveryDescription";
import PaymentCard from "@/components/share/payment-card/PaymentCard";
import ZoomImage from "@/components/zoom-image/ZoomImage";
import Navbar from "@/components/share/navbar/Navbar";
import { useCart } from "react-use-cart";
import Footer from "@/components/share/footer/Footer";

interface Params {
  params: {
    id: string; // Ensure this is a string
  };
}

const SingleProduct: React.FC<Params> = ({ params }) => {
  const { id } = params;
  const { addItem } = useCart();

  console.log("info", info)
  console.log("id", id)

  // Find the product by its ID, ensure type consistency with id
  const product = info?.find((item) => item.id === Number(id)); // Assuming id is a string
  console.log("product", product)
  // Initialize the main image as the default product image
  const [mainImage] = useState<string>(product?.image || "");

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {

    if (product) {
      addItem({
       // id: product.id,
         id: product.id.toString(),
        name: product.name,
        price: parseFloat(product.price.toString().replace(" USD", "")), // Ensuring price is a number
        image: product.image,
        quantity: 1, // Set default quantity to 1
      });
    }
  };

  const handleChange=()=>{
    console.log('hello anika')
  }

  return (
    <div>
      <div className="container mx-auto ">
      <Navbar onMenuClick={handleChange} />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <div>
              <ZoomImage src={mainImage} alt={product.name} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center lg:items-start ">
          <p className="text-3xl font-bold font-serif">{product.name}</p>
          <p className="text-xl font-serif font-semibold">{product.price}</p>
          <AddToCart onAddToCart={handleAddToCart} /> 
          <DeliveryDescription />
          <PaymentCard />
        </div>
      </div>
      <div>
        <p className="font-serif text-base md:text-lg lg:text-xl text-justify  p-2 lg:p-0">{product.description}</p>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default SingleProduct;

