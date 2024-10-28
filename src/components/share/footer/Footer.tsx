import React from "react";
import logo from "../../../../public/images/logo.avif";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Console } from "console";

const Footer = () => {
  //const router=useRouter()

  // const handleChangeAbout=()=>{
  //   router.push('/about')
  //   console.log("Go To About")
  // }

  // const handleChangeContact=()=>{
  //   router.push('/contact')
  //   console.log("Go To Contact")
  // }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10  p-20">

        <div className="hidden lg:block">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Picture of the author"
          // className="h-auto w-full"
          ></Image>
        </div>


        <div className="flex flex-row justify-center items-center gap-6 ">
          <div className="text-gray-500 transform duration-500 hover:text-black cursor-pointer font-serif ">            
            <Link href={'/about'}>About</Link>            
          </div>
          <div className="text-gray-500 hover:text-black cursor-pointer font-serif ">
           <Link href={'/all-products'}> Products</Link>
          </div>
          <div className="text-gray-500 hover:text-black cursor-pointer font-serif "         
          >
           <Link href={'/contact'}> Contact</Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 ">
          <div className="bg-white hover:bg-black p-2 rounded-full group cursor-pointer transform hover:duration-700">
            <Link href='https://www.facebook.com/'>
            <FaFacebookF className="text-gray-800 group-hover:text-white text-xl" />
            </Link>
          </div>

          <div className="bg-white hover:bg-black p-2 rounded-full group cursor-pointer transform hover:duration-700">
          <Link href='https://x.com/'>
          <FaXTwitter className="text-gray-800 group-hover:text-white text-xl" />
          </Link>
          </div>

          <div className="bg-white hover:bg-black p-2 rounded-full group cursor-pointer transform hover:duration-700">
          <Link href='https://www.linkedin.com/'>
          <FaLinkedinIn className="text-gray-800 group-hover:text-white text-xl" />
          </Link>
          </div>

          <div className="bg-white hover:bg-black p-2 rounded-full group cursor-pointer transform hover:duration-700">
             <Link href='https://www.instagram.com/'>
             <FaInstagram className="text-gray-800 group-hover:text-white text-xl" />
             </Link>
          </div>
        </div>


      </div>
      <div className="p-8">
        <hr />
        <div className="flex justify-between p-5">
          <div className="flex justify-between gap-4">
            <div><p className="text-gray-600 hover:text-black font-serif">Privacy & Policy </p></div>
            <div><p className="text-gray-600 hover:text-black font-serif">Terms of Service</p></div>
          </div>
          <div><p className="text-gray-600 font-serif">Designed And Developed by Zeon Studio</p></div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
