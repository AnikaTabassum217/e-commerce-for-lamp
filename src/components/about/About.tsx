'use client'
import React from "react";
import Navbar from "../share/navbar/Navbar";
import { HiOutlineHome } from "react-icons/hi";
import { PiGreaterThanLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ClientComment from "./ClientComment";
import OurStaff from "./OurStaff";
import ReasonToShop from "./ReasonToShop";
import Faq from "./Faq";
import Footer from "../share/footer/Footer";



const aboutImage = '/images/about/aboutImage.png'
const panda = '/images/about/panda.jpg'



const About = () => {
    // The data array for the 'About' section
    const aboutDescription = [
        {
            image: aboutImage,
            title: 'Our Company',
            contentOne: 'Welcome to Commerceplate where brilliance meets innovation. We take pride in being your ultimate destination for exquisite lighting solutions that illuminate spaces and lives alike. With a passion for creating luminous experiences, we curate a diverse range of cutting-edge light fixtures designed to elevate any environment. Our commitment to quality craftsmanship and a keen eye for aesthetic appeal ensures that each product we offer is not just a source of light,',
            contentTwo: 'But a work of art in its own right. Whether you are seeking ambient elegance for your home or functional brilliance for a commercial space, [Your Company Name] is dedicated to bringing your vision to light. Explore our collection and let your surroundings shine with a touch of our radiant expertise. Elevate your space, embrace the light, only with Commerceplate.'
        },
        {
            image: panda,
            title: 'Who We Are?',
            contentOne: 'At Commerceplate we illuminate your world with a curated collection of exceptional lighting solutions. Established with a passion for transforming spaces and creating ambiance, we stand as a beacon of quality and style in the realm of lighting. With a keen eye for design and a commitment to sourcing the finest materials, we pride ourselves on offering a diverse range of luminaires that not only brighten spaces but also elevate aesthetics.',
            contentTwo: 'Committed to delivering excellence, we prioritize customer satisfaction and provide expert guidance to help you find the perfect lighting solution for any setting. Welcome to Commerceplate where light meets inspiration. Illuminate your world today!'

        }
    ];



    const router = useRouter();

    const handleChange = () => {
        console.log('Menu clicked');
    }

    const handleHomeChange = () => {
        router.push('/home');
    }

    return (
        <>
            <Navbar onMenuClick={handleChange} />
            {/* Header section */}
            <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-8">
                <div className="text-xl md:text-2xl lg:text-5xl text-center ">About US</div>
                <div className="flex justify-center items-center gap-2 ">
                    <div className="cursor-pointer text-2xl">
                        <HiOutlineHome onClick={handleHomeChange} />
                    </div>
                    <div className="text-xl"><PiGreaterThanLight /></div>
                    <div className="text-lg">About</div>
                </div>
            </div>

            <div className="container mx-auto ">
                <div className="flex flex-col justify-center items-center gap-20">
                    {aboutDescription.map((about, index) => (
                        <div key={index} className="flex lg:flex-row flex-col justify-center items-center gap-20"> {/* Adjusted gap */}
                            {index % 2 === 0 ? (
                                <>
                                    <div className="">
                                        <Image
                                            src={about.image}
                                            alt={about.title}
                                            width={500}
                                            height={400}
                                            className="rounded-lg"
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col gap-6"> {/* Adjusted gap */}
                                        <div className="text-xl md:text-2xl lg:text-5xl">{about.title}</div>
                                        <div className="text-sm md:text-base lg:text-lg">
                                            {about.contentOne}
                                        </div>
                                        <div className=" text-sm md:text-base lg:text-lg">
                                            {about.contentTwo}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-full md:w-1/2 flex flex-col gap-6"> {/* Adjusted gap */}
                                        <div className="text-xl md:text-2xl lg:text-5xl">{about.title}</div>
                                        <div className=" text-sm md:text-base lg:text-lg">
                                            {about.contentOne}
                                        </div>
                                        <div className=" text-sm md:text-base lg:text-lg">
                                            {about.contentTwo}
                                        </div>
                                    </div>

                                    <div className="">
                                        <Image
                                            src={about.image}
                                            alt={about.title}
                                            width={500}
                                            height={400}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            </div>
            <div className=" flex flex-col justify-center items-center gap-20 mt-10 ">
                    <div className="text-xl md:text-2xl lg:text-5xl">
                        What Our Client Says
                    </div>
                    <div className="w-full px-12 hidden md:block">
                        <ClientComment />
                    </div>
                    <div className="w-full px-12">
                        <OurStaff />
                    </div>
                    <div className="w-full px-12">
                        <ReasonToShop />
                    </div>
                    <div className="w-full px-12">
                        <Faq/>
                    </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;
