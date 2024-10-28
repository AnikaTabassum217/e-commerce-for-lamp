import React, { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

interface Animal {
  id: number;
  name: string;
  price: string;
  image:  string; // Or string if you're using a URL
  description: string;
}

const AnimalCard: FC<{ animal: Animal }> = ({ animal }) =>{
  return (
    <>

     <Link 
     key={animal.id}
     href={`/animal/animal-details/${animal.id}`}
     >

     <div className="">
     <Card>
     <CardHeader>
       <CardTitle>Card Title</CardTitle>
       <CardDescription>Card Description</CardDescription>
     </CardHeader>
     <CardContent >
     
       <Image src={animal.image} alt={animal.name} width={300} height={300}  ></Image>

     </CardContent>
     <CardFooter>
       <p>Card Footer</p>
     </CardFooter>
   </Card>

   <div>{animal.name}</div>
     </div>
     </Link>

    </>
  )
}
export default AnimalCard