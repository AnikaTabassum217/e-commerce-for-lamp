"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import Toaster from "@/constants/Toaster";
import Link from "next/link";
import Footer from "../share/footer/Footer";
import Navbar from "../share/navbar/Navbar";

const Checkout = () => {
  const { items, cartTotal,emptyCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  // Ensures the component renders after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render anything on the server to avoid mismatch
  }
 const handleChange=(value:string)=>{
   if(value==='outside dhaka'){
     setDeliveryCharge(0+200)
   }
   else if(value==='inside dhaka'){
    setDeliveryCharge(0+80)
   }
 }

 const handleOrderChange = (): void => {
  emptyCart(); // Clear the cart after order
  Toaster("Order confirmed", "success");
};


  return (
    <>
    <Navbar onMenuClick={() => {}} />
     
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side: Customer details */}
          <div className="bg-gray-00 p-4">
            {/* <p>Customer Information</p> */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="border-2 w-full mb-4 p-2 font-serif text-base "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="border-2 w-full mb-4 p-2 font-serif text-base"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="border-2 w-full mb-4 p-2 font-serif text-base"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Zip"
                className="border-2 w-full mb-4 p-2 font-serif text-base"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className="border-2 w-full mb-4 p-2 font-serif text-base"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Order Note"
                className="border-2 w-full mb-4 p-2 font-serif text-base"
              />
            </div>
            <div>
              <Select onValueChange={handleChange}>
                <SelectTrigger className="w-full">
                  <SelectValue   placeholder="Select Area"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="outside dhaka"
                 className="font-serif text-lg"
            
                  >Outside Dhaka</SelectItem>
                  <SelectItem value="inside dhaka"
                  className="font-serif text-lg"
                  >Inside Dhaka</SelectItem>
                </SelectContent>
              </Select>
            </div>
        
            <div><Button className="bg-blue-500 text-white text-xl text-end font-semibold rounded-lg p-4 cursor-pointer 
          transition delay-200
          hover:scale-90
          hover:bg-blue-700 mt-28"
           
            onClick={handleOrderChange}
            
            >Place Order</Button></div>

            
          </div>

          {/* Right side: Order summary */}
          <div className="bg-red-00 p-4">
            {/* <p>Order Summary</p> */}
            {items.length > 0 ? (
              items.map((product, index) => (
                <div key={index} className="p-4">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="col-span-3 flex flex-wrap items-center gap-2">
                    <div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover"
                        width={100}
                        height={100}
                      ></Image>
                    </div>
                    <div className=" text-lg font-serif font-medium">{product.name}</div>
                    </div>
                    <div className=" text-lg font-serif font-medium">{product.quantity}</div>
                    {/* <div className=" text-lg font-serif font-medium">${(product.price * product.quantity).toFixed(2)}</div> */}
                    <div className=" text-lg font-serif font-medium">${(product.price * (product.quantity??0)).toFixed(2)}</div>

                  </div>
                </div>
              ))
            ) : (
              <div>
                <p className="text-red-400 font-serif text-lg">No items in the cart</p>

               <div className="mt-12">
                <div className="flex">
                  <div className="w-1/4 font-serif">Delivery Charge:</div>

                  <div>{0}</div>
                </div>

                <div className="flex">
                <div className="w-1/4 font-serif">Grand Total:</div>
                <div >{Number(0) + Number(0)} USD</div>
                </div>

                <div className="flex">
                <div className="w-1/4 font-serif">Payment Method:</div>
                <div className="flex justify-center gap-2">
                  <div className="font-serif">Nogod</div>
                  <div className="font-serif">Bkash</div>
                  <div className="font-serif">Visa</div>
                </div>

              </div>
              </div>

              <div>
                <Link href={'/order'}>
                {/* <Button className="bg-blue-500 text-white text-xl text-end font-semibold rounded-lg p-4 cursor-pointer 
          transition delay-200
          hover:scale-90
          hover:bg-blue-700 mt-2">
                  View Order Details
                </Button> */}
                <p className="underline font-semibold font-serif">Order Detaila</p>
                </Link>
               </div>
              </div>
            )}
              
              {
                items.length!=0?
                (<>
                <div className="mt-12">
                <div className="flex">
                  <div className="w-1/4 font-serif">Delivery Charge:</div>

                  <div className="font-serif">{deliveryCharge}</div>
                </div>

                <div className="flex">
                <div className="w-1/4 font-serif">Grand Total:</div>
                <div >{Number(cartTotal) + Number(deliveryCharge)} USD</div>
                </div>

                <div className="flex">
                <div className="w-1/4 font-serif">Payment Method:</div>
                <div className="flex justify-center gap-2">
                  <div className="font-serif">Nogod</div>
                  <div className="font-serif">Bkash</div>
                  <div className="font-serif">Visa</div>
                </div>

              </div>
              </div>
                </>):
                (<>
                </>)
              }          
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Checkout;