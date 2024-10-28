'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [userName, setUserName] =useState<string>("");
  const [password,setPassword]=useState<string>("");
  const router=useRouter();

  const login=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(userName==='anika@atilimited.net' && password==='123'){
      localStorage.setItem('user','true');
      setUserName(' ');
      setPassword(' ');
     router.push('/home');
      console.log('Login Successfully');
    }
  }
 

  return (
    <>
      <form method="POST" onSubmit={login} >
      <div className=" dark:text-gray-500 bg-gray-100 dark:bg-gray-800">
      <div className="bg-red-00 container mx-auto h-screen  flex justify-center items-center font-serif">
        <div className=" bg- p-8 rounded  w-full max-w-lg">
        <div className="font bold  text-2xl text-center">Login</div>
        <div className=" -4 text-slate-600 text-center mt-4">Please fill your email and password to login</div>

        <div className="">
          <label> <p className="text-lg  mt-[3rem]">Email Address</p> </label> 
          <input className="placeholder: placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm mt-2"
           placeholder="Email" type="text" name="search"
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setUserName(e.target.value)} value={userName}/>
        </div>

        <div className="">
          <label><p className="text-lg  mt-[2rem]">Password</p></label> 
          <input className="placeholder: placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm mt-2"
           placeholder="Password" type="text" name="search" onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} 
           value={password}/>
        </div>

         <div className="-[2rem]"><button  className="w-full bg-black text-white p-2 rounded-lg mt-[2rem] text-lg"
         type="submit"
         >Login</button></div>
         <div className="mt-2"><p className="text-slate-600"> Do not have an account? <span className="text-black font-bold underline" >Register</span></p></div>
        </div>
      </div>
      </div>
      </form>
    </>
  );
}
