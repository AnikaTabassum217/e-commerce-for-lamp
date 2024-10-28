'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import cardImage_1 from "../../../../public/images/products/img1.png";
import cardImage_2 from "../../../../public/images/products/img2.png";
import cardImage_3 from "../../../../public/images/products/img3.png";
import cardImage_4 from "../../../../public/images/products/img4.png";
import MovingButton from "../buttons/moving-add-to-cart-button/MovingButton";

const info = [
  {
    id: 1,
    name: "Iron Lantern Desk",
    price: "345.00 USD",
    image: cardImage_1,
    description:
      "Endsley 1-Light Globe LED Pendant Available in a range of contemporary colour choices to suit any existing décor, this three-light pendant is ideal for casting a spotlight on special areas of your home. Well-suited for kitchen islands or highlighting a standout item of furniture, the pendant is also height adjustable.",
  },
  {
    id: 2,
    name: "Nourison 23",
    price: "99.0 USD",
    image: cardImage_2,
    description:
      "Suspendisse eu ligula. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nullam cursus lacinia erat. Nam at tortor in tellus interdum sagittis. Phasellus magna.",
  },
  {
    id: 3,
    name: "Step into the Future of Lighting with Bright Innovations",
    price: "6400.0 USD",
    image: cardImage_3,
    description:
      "Endsley 1-Light Globe LED Pendant Available in a range of contemporary colour choices to suit any existing décor, this three-light pendant is ideal for casting a spotlight on special areas of your home. Well-suited for kitchen islands or highlighting a standout item of furniture, the pendant is also height adjustable.",
  },
  {
    id: 4,
    name: "Experience Modern Elegance in Innovative Lighting Designs",
    price: "5300.0 USD",
    image: cardImage_4,
    description:
      " if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as describedsdfsadf",
  },
  
];
const CardDesign = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16  ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {info.map((product) => (
          <Link key={product.id} href={`/home/card-details/${product.id}`}>
            <Card className="w-full h-auto relative group cursor-pointer">
              <CardContent className="relative aspect-square">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </CardContent>
                <MovingButton></MovingButton>
             
            </Card>
            <div className="mt-2">
                <p className="text-center font-serif text-lg">{product.name}</p>
                <p className="text-center mt-2 font-serif font-semibold">{product.price}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardDesign;
