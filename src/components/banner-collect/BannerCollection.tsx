"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import banner_collection_1 from "../../../public/images/banner-collection-1.avif";
import banner_collection_2 from "../../../public/images/banner-collection-2.avif";
import banner_collection_3 from "../../../public/images/banner-collection-3.avif";
import banner_collection_4 from "../../../public/images/banner-collection-4.avif";
import banner_collection_5 from "../../../public/images/banner-collection-5.avif";
import Image from "next/image";

const images = [
  banner_collection_5,
  banner_collection_1,
  banner_collection_2,
  banner_collection_3,
  banner_collection_4,
];
const title = [
  {
    name: "Featured Products",
    quantity: "4 items",
  },
  {
    name: "Floor Lamps",
    quantity: "4 items",
  },
  {
    name: "Hanging Lamps",
    quantity: "5 items",
  },
  {
    name: "Modern Lamps",
    quantity: "2 items",
  },
  {
    name: "Table Lamps",
    quantity: "3 items",
  },
];

const CarouselSize = () => {
  return (
    <>
      <div className="font-serif">
        <div className="font-bold text-2xl md:text-3xl lg:text-5xl text-center mt-20">Collection</div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto mt-8"
        >
          <CarouselContent>
            {images?.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <div className="p-2">
                  <Card className=" ">
                    <CardContent className="relative flex aspect-square items-center justify-center gap-4">
                      <Image
                        src={image}
                        alt={`banner collection ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                  <div className="p-4 text-center">
                    {" "}                  
                    <p className="font-semibold  text-3xl">{title[index].name}</p>{" "}
                    <p className="text-lg  text-gray-500">
                      {title[index].quantity}
                    </p>{" "}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
export default CarouselSize;
