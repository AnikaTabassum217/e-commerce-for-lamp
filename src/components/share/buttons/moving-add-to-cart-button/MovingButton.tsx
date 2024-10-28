import { Button } from '@/components/ui/button'
import React from 'react'

const MovingButton = () => {
  return (
    <div><Button
    className="bg-slate-700 hover:bg-gray-900 text-white font-serif mt-2
    opacity-0 group-hover:opacity-100 
    group-hover:bottom-10 
    transition-all duration-300 ease-in-out 
    absolute bottom-0 left-1/2 transform -translate-x-1/2 "
  >
    Add To Cart
  </Button></div>
  )
}

export default MovingButton


