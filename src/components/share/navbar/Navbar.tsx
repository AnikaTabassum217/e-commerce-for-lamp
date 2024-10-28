
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/images/logo.avif";
import { TbSearch } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { LuUser } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import ToggleMode from "../../ToggleMode";
import { useCart } from "react-use-cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import Link from "next/link";


interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const router = useRouter();

  const { totalUniqueItems } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/");
    console.log("Logout Successfully");
  };

  // const handleChangeCart = () => {
  //   router.push("/cart");
  //   console.log("Cart Page");
  // };

  return (
    <div className="bg-red-00 grid grid-cols-4 gap-10 p-4">
      {/* Logo */}
      <div className="bg-red-00 flex justify-end gap-4  cursor-pointer">
        <div className="hidden md:hidden lg:block">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Company logo"
          />
        </div>
        {/* <div className="flex gap-1" onClick={onMenuClick}>
          <span className="hidden lg:block">Pages</span>
          <IoMenu className="mt-1" />
        </div> */}
      </div>

      {/* Search */}
      <div className="col-span-2">
        <div>
          <label className="relative">
            <span className="hidden md:block absolute inset-y-0 right-6 items-center pr-2 h-10 mt-0.5 w-10 text-white bg-black rounded-full">
              <TbSearch className="h-6 w-6 ml-2 mt-2 cursor-pointer" />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-slate-200 w-full border border-slate-300 rounded-full py-3 mt-[-0.5rem] pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>

      {/* Icons */}
      <div className="flex justify-start gap-4  cursor-pointer ">
        <div className="lg:ml-10">
          <ToggleMode />
        </div>

        {/* <div
         //onClick={handleChangeCart} 
         className="relative cursor-pointer">
          <Link href=''
          ><BsCart3 size={24}  /></Link>
          {
            isMounted && (
            <span className="bg-black text-white ml-4 px-1 py-1  rounded-lg">{totalUniqueItems}</span>
            )
          }
        </div> */}

<div className="relative cursor-pointer">
    <Link href="/cart">
      
        <BsCart3 size={24} />
      
    </Link>
    {isMounted && (
      <span className="bg-black text-white ml-4 px-2 py-1 rounded-lg">
        {totalUniqueItems}
      </span>
    )}
  </div>

        <div>
          <Popover>
            <PopoverTrigger>
              <LuUser size={24} />
            </PopoverTrigger>
            <PopoverContent className="font-serif text-sm cursor-pointer">
              <div className="text-gray-600 hover:text-black">Profile</div>
              <div className="text-gray-600 hover:text-black">My Contact</div>
              <div className="text-gray-600 hover:text-black" onClick={logout}>
                Logout
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
