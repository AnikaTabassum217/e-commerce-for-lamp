import React, { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import MovingButton from "../buttons/moving-add-to-cart-button/MovingButton";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string | number;
  quantity?: number;
  stock?: number;
  image: StaticImageData | string; // Or string if you're using a URL
  description: string;
}

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  console.log("product", product);
  return (
    <div className="w-full">
      <Link
        key={product.id}
        href={`/all-products/product-details/${product.id}`}
      >
        <Card className="w-full h-auto relative group cursor-pointer">
          <CardContent className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </CardContent>
          <MovingButton></MovingButton>
        </Card>
        <div className="mt-2">
          <p className="text-center font-serif text-lg">{product.name}</p>
          <p className="text-center mt-2 font-serif font-semibold">
            {product.price.toString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
