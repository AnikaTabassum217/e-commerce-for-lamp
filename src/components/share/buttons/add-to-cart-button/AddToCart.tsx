import { Button } from '@/components/ui/button';
import Toaster from '@/constants/Toaster';
import React from 'react';

interface AddToCartProps {
  onAddToCart: () => void; // Callback function to handle adding to cart
}

const AddToCart: React.FC<AddToCartProps> = ({ onAddToCart }) => {
  const handleChange = () => {
    onAddToCart(); // Call the parent function to add the product to the cart
      Toaster('Product added to cart', 'success');
  };

  return (
    <div className="mt-10">
      <Button
        className="font-semibold font-serif bg-gray-600 hover:bg-black text-white p-3 rounded-xl mt-4"
        onClick={handleChange}
      >
        ADD To Cart
      </Button>
    </div>
  );
};

export default AddToCart;





