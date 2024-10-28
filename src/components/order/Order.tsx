'use client';
import React, { useState, useEffect } from "react";
 import Stepper from 'react-stepper-horizontal';
import Navbar from "../share/navbar/Navbar";
import Footer from "../share/footer/Footer";

const Order: React.FC = () => {
  const [orderDate, setOrderDate] = useState<string>(""); // Store the order date with time
  const [arrivalDate, setArrivalDate] = useState<string>(""); // Store the arrival date
  const [orderId, setOrderId] = useState<number | null>(null); // Store order ID
  const [currentStep, setCurrentStep] = useState<number>(0); // Track current step
  const [orderStatus, setOrderStatus] = useState<string>("Placed"); // Default status is 'Placed'

  // Define steps with dynamic orderStatus titles
  const steps = [
    { title: 'Placed' },
    { title: 'Picked' },
    { title: 'Delivered' }
  ];

  // Generate random order ID on component mount
  useEffect(() => {
    const randomOrderId = Math.floor(Math.random() * 1000000);
    setOrderId(randomOrderId);
  }, []);

  // Set order date and simulate arrival date
  useEffect(() => {
    const currentDate = new Date();
    setOrderDate(currentDate.toLocaleString()); // Set order date with time

    const arrival = new Date(currentDate);
    arrival.setMinutes(currentDate.getMinutes() + 1); // Add 1 minute for arrival
    setArrivalDate(arrival.toLocaleString()); // Set arrival date
  }, []);

  // Automatically progress through steps every 3 seconds
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prevStep => {
        const nextStep = prevStep + 1;
        return nextStep < steps.length ? nextStep : steps.length - 1; // Stop at the last step
      });
    }, 3000); // 3 seconds interval

    return () => clearInterval(stepInterval); // Cleanup on component unmount
  }, []);

  // Update order status based on the current step
  useEffect(() => {
    switch (currentStep) {
      case 0:
        setOrderStatus("Placed");
        break;
      case 1:
        setOrderStatus("Picked");
        break;
      case 2:
        setOrderStatus("Delivered");
        break;
      default:
        setOrderStatus("Placed");
        break;
    }
  }, [currentStep]);

  const handleChange=()=>{
    console.log('Hello')
  }

  return (
    <div>
    <Navbar onMenuClick={handleChange}/>
      <div className="container mx-auto flex flex-col gap-8">

      <div>
        <div>Order ID: <span className="font-semibold">{orderId}</span></div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold">Order Date: </span> 
          {orderDate ? orderDate : "Loading..."}
        </div>
        <div>
          <span className="font-semibold">Arrival Date: </span> 
          {arrivalDate ? arrivalDate : "Calculating..."}
        </div>
      </div>

      {/* Display Order Status */}
      
      <div className=" flex justify-center item-center">Order Status: <span className="text-2xl font-semibold ml-2 -mt-[0.3rem]">{orderStatus}</span></div>

      {/* Stepper Component with dynamic titles */}
      <div className="mt-4">
      <Stepper 
        steps={steps}
        activeStep={currentStep}  // Dynamically update the active step
        circleTop={0}
        activeColor="#00bfff"  // Blue for active steps
        completeColor="#00bfff"  // Blue for completed steps
        defaultColor="#aaaaaa"  // Gray for unfinished steps
        size={32}
        circleFontSize={16}
        titleFontSize={16}
      />
      </div>

      </div>
    <Footer/>
    </div>
  );
};

export default Order;



