"use client";
import { CartProvider } from "react-use-cart";


export function Providers({ children }: any) {
  return <CartProvider>{children}</CartProvider>;
}
