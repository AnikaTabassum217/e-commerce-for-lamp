
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
const panda = '/images/about/panda.jpg'
const horse = '/images/about/horse.jpg'


const Faq = () => {
  const faqData = [
    {
      question: "Can I customize lamps for client projects?",
      answer: "Yes, our platform allows customization for client projects, ensuring unique and tailored solutions.",
    },
    {
      question: "Where are your lamps crafted?",
      answer: "Our lamps are meticulously crafted, combining quality materials and skilled workmanship to deliver exceptional products.",
    },
    {
      question: "What's included in the 'free updates' policy?",
      answer: "Free updates encompass enhancements to lamp designs and features, ensuring your collection stays current and appealing.",
    },
    {
      question: "Can I use your lamps for open source projects?",
      answer: "Certainly! Our lamps are open for integration into various projects, fostering creativity and innovation.",
    },
    {
      question: "Can I retail themes featuring your lamps?",
      answer: "Absolutely! You can sell themes created with our lamps, providing stylish solutions for diverse design needs.",
    },
  ];
 
  return (
<div className="grid  grid-cols-1 lg:grid-cols-2  bg-gray-00 p-20 rounded-md">
      {/* h-[60rem]
      md:h-[30rem] */}
      <div className="flex flex-col justify-start items-start gap-10 p-2">
        <div className="text-5xl font-bold">Frequently Asked Questions</div>
        <div className="text-lg text-slate-700">
          Our expertly crafted FAQ guide provides valuable insights on selecting the perfect table lamp to complement your decor and meet your specific lighting needs.
        </div>
        <div>
          <button className="bg-black dark:bg-red-300 text-white py-4 px-10 rounded-md">Contact US</button>
        </div>
      </div>
      <div className="p-2 text-slate-00">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
