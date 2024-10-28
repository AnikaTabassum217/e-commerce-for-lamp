


"use client"

import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent } from "react";
import { useRouter } from 'next/navigation';
import Navbar from '../share/navbar/Navbar';
import Footer from '../share/footer/Footer';
import Toaster from '@/constants/Toaster';
const contactDetails = [
  {
    title: 'Address',
    details: ['123 Main Street, Any town,', 'CA 12345 - USA'],
  },
  {
    title: 'Email',
    details: ['yourmail@domain.com', 'support@roadthemes.com'],
  },
  {
    title: 'Phone',
    details: ['Mobile: (08) 123 456 789', 'Hotline: 1009 678 456'],
  },
  {
    title: 'Shop Time',
    details: ['Available at 10am-8pm'],
  },
];

const Contact = () => {

  const [firstName,setFirstName] = useState<string>('');
  const [lastName,setLastName] = useState<string>();
  const [email,setEmail]=useState<string>();
  const [subject,setSubject]=useState<string>();
  const [text,setText]=useState<string>();
  const router=useRouter() ;

  const handleFirstName=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setFirstName(e.target.value)
  }

  const handleLastName=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLastName(e.target.value)
  }

  const handleEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }

  const handleSubject=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSubject(e.target.value)
  }

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const submit=((e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log('First Name:', firstName,lastName,email,subject,text)

    Toaster("Message sent", "success");
    setFirstName(''); 
    setLastName('')
    setEmail('')
    setSubject('')
    setText('')
    router.push('/home');
  
  })

  const handleChange=()=>{
    Toaster("Message send", "success");
    router.push('/home')
    console.log('Hello')
  }

  return (
    <div>
      <Navbar onMenuClick={handleChange}/>
      <div className="text-center text-4xl font-bold mb-12">Contact Us</div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((contact, index) => (
            <div key={index} className="bg-gray-100 shadow-lg p-6 rounded-lg">
              <div className="text-2xl font-semibold text-center mb-4">{contact.title}</div>
              <div className="flex flex-col items-center space-y-2">
                {contact.details.map((detail, i) => (
                  <div key={i} className="text-gray-700">{detail}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-2xl text-center font-semibold mt-10">We would love to hear from you!</div>
    <div className="border border-gray-300 rounded-lg p-10 max-w-4xl mx-auto mt-10">
   <form method="POST" onSubmit={submit}>
   <div className="flex flex-col space-y-6">
    
    <div className="flex flex-col md:flex-row gap-6">
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="First Name"
        value={firstName} 
        onChange={handleFirstName}
      />
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastName}
      />
    </div>

    <div className="flex flex-col md:flex-row gap-6">
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email Address"
        value={email}
        onChange={handleEmail}
      />
      <input
        type="text"
        className="p-3 border border-gray-300 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Subject "
        value={subject}
        onChange={handleSubject}
      />
    </div>

    <div>
      <Textarea
        //type="text"
        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message here."
        value={text}
        onChange={handleText}
      />
    </div>
    
    <div className="flex justify-end mt-6">
      <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </div>
  </div>
   </form>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;