'use client'
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "react-use-cart";
import Navbar from "../share/navbar/Navbar";
import { AiOutlineDelete } from "react-icons/ai";
import Toaster from "@/constants/Toaster";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import Footer from "../share/footer/Footer";

const Cart = () => {
  const { items, updateItemQuantity, cartTotal, removeItem } = useCart();

  // State to check if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true when component has mounted
  }, []);

  if (!isMounted) {
    // Avoid rendering until component is mounted
    return null;
  }

  const handleChange = () => {
    Toaster('Thank you for your purchase', 'success');
    console.log('hello')
  }
  return (
    <div>
      <div className="container mx-auto p-8">
      <Navbar onMenuClick={handleChange} />
      <div className="text-center font-serif font-bold text-4xl mt-4">Your Cart</div>
      <div className="mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold font-serif text-xl">Image</TableHead>
              <TableHead className="font-semibold font-serif text-xl">Name</TableHead>
              <TableHead className="font-semibold font-serif text-xl">Price</TableHead>
              <TableHead className="font-semibold font-serif text-xl">Quantity</TableHead>
              <TableHead className="font-semibold font-serif text-xl">Subtotal</TableHead>
              <TableHead className="font-semibold font-serif text-xl">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items?.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="">
              
                  <Image
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-cover"
                  width={100}
                  height={100}
                  ></Image>
                </TableCell>
                <TableCell className="font-semibold text-lg">{product.name}</TableCell>
                <TableCell className="font-semibold text-lg">{product.price} USD</TableCell>
                <TableCell className=" font-semibold text-lg">
                  <div className="flex justify-start items-center text-lg gap-2">
                    <div>
                      <Button className="text-lg bg-gray-500 text-white"
                        onClick={() => {
                          //updateItemQuantity(product.id, product.quantity + 1)
                          updateItemQuantity(product.id,( product.quantity ?? 0) + 1)

                          Toaster('Product added to cart', 'success');
                        }}>+</Button>
                    </div>
                    {/* {product.quantity} */}
                    {product.quantity ?? 0}
                    <div>
                      <Button className="text-lg bg-gray-500 text-white"
                        onClick={() => {
                          //updateItemQuantity(product.id, product.quantity - 1)
                          updateItemQuantity(product.id,( product.quantity??0) - 1)
                          Toaster('Product deleted from cart', 'success')
                        }}
                      >-</Button>
           
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-lg">
                  {/* {(product.price * product.quantity).toFixed(2)} USD */}
                  {(product.price * (product.quantity??0)).toFixed(2)} USD
                </TableCell>
                <TableCell className="w-[100px]">
                  <AiOutlineDelete className=" text-2xl flex justify-end items-center cursor-pointer hover:text-red-500"
                    onClick={() => {
                      removeItem(product.id)
                      Toaster('Product deleted from cart', 'success')
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-end items-center mt-4">
          <p className="text-xl text-end font-semibold">Total: {cartTotal.toFixed(2)} USD</p>
        </div>

        <div className="flex justify-end items-center mt-4">
          <Link href={'/checkout'}>
          <Button className="bg-blue-500 text-white text-xl text-end font-semibold rounded-lg p-4 cursor-pointer 
          transition delay-200
          hover:scale-90
          hover:bg-blue-700
          "
          onClick={handleChange}
          >
            Checkout
            
          </Button>
          </Link>
        </div>


      </div>
     </div>
     <Footer/>
    </div>
  );
};

export default Cart;


