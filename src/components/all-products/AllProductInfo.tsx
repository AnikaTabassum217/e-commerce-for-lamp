"use client";

import React from "react";
import { Checkbox } from "../ui/checkbox";

const AllProductInfo=()=>{
    return(
        <>
        <div>Products</div>
        <div><p className="text-xl font-semibold font-serif" >Product Categories</p></div>
        <hr className="mt-2" />

        <div className=" gap-20">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="flex-1 font-serif mt-2">Featured Products</p>
              <p className="w-1/2 text-right  font-serif">(4)</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="flex-1  font-serif">Floor Lamps</p>
              <p className="w-1/2 text-right  font-serif">(4)</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="flex-1  font-serif">Hanging Lamps</p>
              <p className="w-1/2 text-right  font-serif">(5)</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="flex-1  font-serif">Modern Lamps</p>
              <p className="w-1/2 text-right  font-serif">(2)</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="flex-1  font-serif">Table Lamps</p>
              <p className="w-1/2 text-right  font-serif">(3)</p>
            </div>
          </div>
        </div>

        <div><p className="text-xl font-semibold font-serif mt-6">Brand</p></div>
        <hr className="mt-2" />

        <div className="flex items-center gap-32">   
          <label
            htmlFor="terms"
            className="font-serif text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
           Home Decor (0)
          </label>
          <Checkbox id="terms" />
        </div>  

        <div className="flex items-center gap-32 mt-2">   
          <label
            htmlFor="terms"
            className="font-serif text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
          Nextcart Nexus (4)
          </label>
          <Checkbox id="terms" />
        </div>   

        <div className="flex items-center gap-32 mt-2">   
          <label
            htmlFor="terms"
            className="font-serif text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
          Urban Lights Emporium (0)

          </label>
          <Checkbox id="terms" />
        </div>


        <div className="flex items-center gap-32">   
          <label
            htmlFor="terms"
            className="font-serif text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
           Company 123 (0)
          </label>
          <Checkbox id="terms" />
        </div>  

        <div className="flex items-center gap-32 mt-2">   
          <label
            htmlFor="terms"
            className="font-serif text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
         Artisan Globe Lamps (0)
          </label>
          <Checkbox id="terms" />
        </div>   

        <div className="flex items-center gap-32 mt-2">   
          <label
            htmlFor="terms"
            className="font-serif text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
        Ecoglow Designs (0)
          </label>
          <Checkbox id="terms" />
        </div>
        </>
    )
}
export default AllProductInfo;