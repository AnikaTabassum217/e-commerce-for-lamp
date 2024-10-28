"use client";

import React from "react";

import cardImage_1 from "../../../../../public/images/card-images/card1.avif";
import cardImage_2 from "../../../../../public/images/card-images/card2.avif";
import cardImage_3 from "../../../../../public/images/card-images/card3.avif";
import cardImage_4 from "../../../../../public/images/card-images/card4.avif";

import ZoomImage from "@/components/zoom-image/ZoomImage";
import Navbar from "@/components/share/navbar/Navbar";
import Image from "next/image";
import PaymentCard from "@/components/share/payment-card/PaymentCard";
import { Button } from "@/components/ui/button";
import DeliveryDescription from "@/components/share/delivery-description/DeliveryDescription";
import AddToCart from "@/components/share/buttons/add-to-cart-button/AddToCart";



const info = [
  {
    id: 1,
    name: "Dome Pendant",
    price: "345.00 USD",
    image: cardImage_1,
    description: 'Endsley 1-Light Globe LED Pendant Available in a range of contemporary colour choices to suit any existing décor, this three-light pendant is ideal for casting a spotlight on special areas of your home. Well-suited for kitchen islands or highlighting a standout item of furniture, the pendant is also height adjustable.',

  },
  {
    id: 2,
    name: "Mini Desk Lamp",
    price: "99.0 USD",
    image: cardImage_2,
    description: 'Suspendisse eu ligula. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nullam cursus lacinia erat. Nam at tortor in tellus interdum sagittis. Phasellus magna.'

  },
  {
    id: 3,
    name: "Light Drum Pendant",
    price: "29.99 USD",
    image: cardImage_3,
    description: 'Endsley 1-Light Globe LED Pendant Available in a range of contemporary colour choices to suit any existing décor, this three-light pendant is ideal for casting a spotlight on special areas of your home. Well-suited for kitchen islands or highlighting a standout item of furniture, the pendant is also height adjustable.'

  },
  {
    id: 4,
    name: "Cotton Novelty Pendant",
    price: "2567.0 USD",
    image: cardImage_4,
    description: ' if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as describedsdfsadf'

  },
  
];

interface Params {
  params: {
    id: string;
  };
}

const SingleProduct: React.FC<Params> = ({ params }) => {
  const { id } = params;

  const handleMenuClick = () => {
    console.log("Menu clicked!");
    // Add your menu handling logic here
  };

  const handleChange = () => {
    console.log("Add to cart");
    
  };

  // Find the product by its ID
  const productIndex = info.findIndex((item) => item.id === parseInt(id, 10));
  //const restOfProduct = info.findIndex((item) => item.id !== parseInt(id, 10));
  const restOfProduct = info.filter((item) => item.id !== parseInt(id, 10));

  if (productIndex === -1) {
    return <p>Product not found</p>; // Handle case where the product is not found
  }

  const product = info[productIndex];

  return (
    <div className="p-8" >
      <Navbar onMenuClick={handleMenuClick} />

      <div>
        <div className="flex justify-center items-start gap-20 p-10">
          <div className='border border-spacing-0 rounded-lg'>
            <ZoomImage  src={product.image.src} alt={product.name} />
          </div>

          <div>
            <div>
              <p className="text-4xl font-bold font-serif">{product.name}</p>
              <p className="text-xl font-semibold font-serif text-gray-400 mt-4">{product.price}</p>
            </div>

            <div>
              <AddToCart onAddToCart={handleChange}/>
            </div>

            <div>
              <DeliveryDescription/>
            </div>

            <div>
              <PaymentCard/>
              <div className="mt-6"><hr /></div>
              <div className="mt-2"><p>Share</p></div>
              <div className="mt-2"><p>Tags:</p></div>
            </div>

          </div>
        </div>
      </div>

        <div className="px-36">
          <Image src={product.image} alt="Image" width={150} height={150} className=" border border-spacing-0 rounded-lg"></Image>
        </div>

      <div className=" px-20 mt-10">
        <div className="border border-spacing-0 p-4">
          <div><p className="text-lg font-serif">Description</p></div>
          <div><p className="  text-lg font-serif font-medium  mt-4">{product.description}</p></div>
        </div>
      </div> 

      <div className="grid grid-cols-4  mt-4">
      {restOfProduct.map((item) => (
          <div className="" key={item.id}>
            <Image
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
              className="border border-spacing-0 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;

