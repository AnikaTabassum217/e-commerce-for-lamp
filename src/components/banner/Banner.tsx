import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import ShopNow from "../share/buttons/shop-now/ShopNow";
import banner1 from "../../../public/images/banner-1.avif";
import banner2 from "../../../public/images/banner-2.avif";
import banner3 from "../../../public/images/banner-3.avif";
import banner4 from "../../../public/images/banner-4.avif";

// Banner data
const banners = [
  {
    id: 1,
    image: banner1,
    alt: "banner1",
    lines: ["Work light, LED", "Styles Accessories &", "New Table Lamp"],
  },
  {
    id: 2,
    image: banner2,
    alt: "banner2",
    lines: [
      "Radiant, Stylish Table Lamps",
      "Explore Radiant",
      "Illumination for Your",
      "Space",
    ],
  },
  {
    id: 3,
    image: banner3,
    alt: "banner3",
    lines: [
      "Sleek, Contemporary Glow",
      "Experience Modern",
      "Elegance in Innovative",
      "Lighting Designs",
    ],
  },
  {
    id: 4,
    image: banner4,
    alt: "banner4",
    lines: [
      "Transform with Stylish lamps",
      "Step into the Future of",
      "Innovations",
    ],
  },
];

const Banner = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg">
      <Carousel>
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem
              key={banner.id}
              className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-40 p-4"
            >
              <div className="text-center md:text-left">
                {banner.lines.map((line, index) => (
                  <p
                    key={index}
                    className={`${
                      index === 0
                        ? "text-gray-400 dark:text-gray-300 text-sm md:text-md font-serif font-normal"
                        : "text-2xl md:text-3xl font-serif font-bold mt-2 dark:text-white"
                    } flex justify-center`}
                  >
                    {line}
                  </p>
                ))}
                <div className="flex justify-center mt-2">
                  <ShopNow />
                </div>
              </div>
              <Image
                src={banner.image}
                alt={banner.alt}
                width={500}
                height={500}
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banner;
