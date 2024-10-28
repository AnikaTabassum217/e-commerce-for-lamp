// "use client";

// import NextImage from "next/image"; // Renamed the Image import to avoid conflict
// import React, { useState, useEffect } from "react";

// const ImageView = () => {
//   const [selectedImage, setSelectedImage] = useState<string>('/images/rough/panda-1.jpg');

//   useEffect(() => {
//     const addZoom = (target: string) => {
//       const container = document.getElementById(target);
//       if (!container) return;

//       const imgsrc = window.getComputedStyle(container).backgroundImage.slice(4, -1).replace(/"/g, "");

//       const img = new window.Image(); // Use window.Image() to avoid confusion with Next.js Image component
//       img.src = imgsrc;

//       img.onload = () => {
//         const ratio = img.naturalHeight / img.naturalWidth;

//         container.onmousemove = (e) => {
//           const rect = container.getBoundingClientRect();
//           const xPos = e.clientX - rect.left;
//           const yPos = e.clientY - rect.top;
//           const xPercent = (xPos / (container.clientWidth / 100)) + "%";
//           const yPercent = (yPos / ((container.clientWidth * ratio) / 100)) + "%";

//           Object.assign(container.style, {
//             backgroundPosition: `${xPercent} ${yPercent}`,
//             backgroundSize: `${img.naturalWidth * 2}px`,
//             transition: "background-position 0.3s ease, background-size 0.3s ease", // Add transition duration
//           });
//         };

//         container.onmouseleave = () => {
//           Object.assign(container.style, {
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             transition: "background-position 0.3s ease, background-size 0.3s ease", // Add transition duration
//           });
//         };
//       };
//     };

//     addZoom("zoomC");
//   }, [selectedImage]); // Re-run when selectedImage changes

//   const handleImageClick = (src: string) => {
//     setSelectedImage(src);
//   };

//   return (
//     <>
//       <div classNameName="flex flex-col justify-center items-center ">
//         <div
//           id="zoomC"
//           classNameName="w-[300px] h-[300px] bg-center bg-cover cursor-pointer "
//           style={{ backgroundImage: `url(${selectedImage})` }}
//           aria-label="Main Image"
//         >
//           {/* Zoomable main image */}
//         </div>
//       </div>

//       <div classNameName="flex justify-center items-center gap-4 p-8">
//         <div>
//           <NextImage
//             src={'/images/rough/panda-1.jpg'}
//             alt="secondary"
//             width={200}
//             height={200}
//             classNameName="cursor-pointer"
//             onClick={() => handleImageClick('/images/rough/panda-1.jpg')}
//           />
//         </div>

//         <div>
//           <NextImage
//             src={'/images/rough/panda-2.jpg'}
//             alt="secondary"
//             width={200}
//             height={200}
//             classNameName="cursor-pointer"
//             onClick={() => handleImageClick('/images/rough/panda-2.jpg')}
//           />
//         </div>

//         <div>
//           <NextImage
//             src={'/images/rough/panda-3.jpg'}
//             alt="secondary"
//             width={200}
//             height={200}
//             classNameName="cursor-pointer"
//             onClick={() => handleImageClick('/images/rough/panda-3.jpg')}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImageView;

// import React from "react";
// // import { CheckCircleIcon } from "@heroicons/react/solid";
// import { FaCheckCircle } from "react-icons/fa";
// const Rough=()=>{
//     const steps = [
//         { label: "Placed", icon: FaCheckCircle },
//         { label: "Picked", icon: FaCheckCircle },
//         { label: "Delivered", icon: FaCheckCircle },
//       ];
//     return(
//         <>
//         <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
//       <div className="flex items-center justify-between space-x-4">
//         {steps.map((step, index) => (
//           <div key={index} className="flex flex-col items-center relative">
//             <div
//               className={`${
//                 trackingStep >= index
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-300 text-gray-500"
//               } p-4 rounded-full transition-colors duration-300 ease-in-out`}
//             >
//               <step.icon className="w-6 h-6" />
//             </div>
//             <p className="mt-2 font-medium">{step.label}</p>

//             {/* Line between steps */}
//             {index < steps.length - 1 && (
//               <div
//                 className={`absolute top-6 left-10 w-12 h-1 ${
//                   trackingStep >= index + 1 ? "bg-green-500" : "bg-gray-300"
//                 } transition-all duration-300 ease-in-out`}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//         </>
//     )
// }
// export default Rough

// "use client"
// import React, { useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const Rough = () => {
//   const [trackingStep, setTrackingStep] = useState(0); // Add trackingStep state
//   const steps = [
//     { label: "Placed", icon: FaCheckCircle },
//     { label: "Picked", icon: FaCheckCircle },
//     { label: "Delivered", icon: FaCheckCircle },
//   ];

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
//       <div className="flex items-center justify-between space-x-4">
//         {steps.map((step, index) => (
//           <div key={index} className="flex flex-col items-center relative">
//             <div
//               className={`${
//                 trackingStep >= index
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-300 text-gray-500"
//               } p-4 rounded-full transition-colors duration-300 ease-in-out`}
//             >
//               {/* Render icon dynamically */}
//               <FaCheckCircle className="w-6 h-6" />
//             </div>
//             <p className="mt-2 font-medium">{step.label}</p>

//             {/* Line between steps */}
//             {index < steps.length - 1 && (
//               <div
//                 className={`absolute top-6 left-10 w-12 h-1 ${
//                   trackingStep >= index + 1 ? "bg-green-500" : "bg-gray-300"
//                 } transition-all duration-300 ease-in-out`}
//               ></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Rough;

import React from "react";

const Rough=()=>{
  return(
    <>
       <div className="flex flex-col h-screen overflow-auto bg-green-500 text-gray-800">
    <div className="container mx-auto p-5">
        <div className="bg-gray-100 shadow-lg border border-gray-500 rounded-lg py-6 px-8">
             {/* Header Row  */}
            <div className="flex justify-between items-center mb-8">
                <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">GeeksforGeeks</p>
                </div>
                <div className="flex items-center">
                    <p className="text-xl font-semibold">
                        <i className="fa-solid fa-cart-shopping text-blue-500 mr-2"></i>
                        Order ID: <span className="font-bold text-green-600"><i className="fa-solid fa-hashtag text-gray-500"></i> ZMJ82D9</span>
                    </p>
                </div>
                <div className="text-right">
                    <p className="font-mono font-bold text-lg mb-2">
                        Expected Arrival
                        <span className="inline-block bg-blue-500 text-white border border-gray-400 rounded-full px-4 py-1 ml-2 shadow">01/05/204</span>
                    </p>
                    <p className="font-mono font-bold text-lg">
                        Tracking ID
                        <span className="inline-block bg-red-500 text-white border border-gray-400 rounded-full px-4 py-1 shadow">23458039</span>
                    </p>
                </div>
            </div>

             {/* Timeline  */}
            <div className="flex items-center justify-around mb-8">
                {/* <div className="flex items-center space-x-2">                    
                    <div className="flex flex-col items-center">
                        <button className="bg-red-500 text-white rounded-full p-4">
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <p className="text-center mt-2">Order Confirmed</p>
                        
                    </div>
                    <span className="bg-blue-500 h-1 w-32"></span>
                </div> */}
                <div className="flex items-center space-x-2">
                     {/* Order Confirmed */}

                    <div className="flex items-center">
                    <div>
                     <button className="bg-red-500 text-white rounded-full p-4">
                            <i className="fa-solid fa-check"></i>
                        </button>
                     </div>

                     <div>
                      hello
                      <span className="bg-blue-500 h-1 w-32"></span>
                     </div>
                    </div>

                   
                     
                    
                </div>
                <div className="flex items-center space-x-2">
                    {/* Order Shipped  */}
                    <div className="flex flex-col items-center">
                        <button className="bg-green-500 text-white rounded-full p-4">
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <p className="text-center mt-2">Order Shipped</p>
                    </div>
                    <span className="bg-green-500 h-1 w-32"></span>
                </div>
                <div className="flex items-center space-x-2">
                     {/* Out for Delivery  */}
                    <div className="flex flex-col items-center">
                        <button className="bg-green-500 text-white rounded-full p-4">
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <p className="text-center mt-2">Out for Delivery</p>
                    </div>
                    <span className="bg-gray-400 h-1 w-32"></span>
                </div>
                <div className="flex flex-col items-center">
                     {/* Order Delivered  */}
                    <button className="bg-gray-400 text-white rounded-full p-4">
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <p className="text-center mt-2">Order Delivered</p>
                </div>
            </div>

             {/* Status Descriptions  */}
            <div className="flex justify-around mt-8">
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-clipboard-check text-blue-500 text-3xl"></i>
                    <p className="text-center font-semibold">Order<br/>Confirmed</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-boxes-packing text-yellow-500 text-3xl"></i>
                    <p className="text-center font-semibold">Order<br/>Shipped</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-truck-arrow-right text-blue-500 text-3xl"></i>
                    <p className="text-center font-semibold">Out for<br/>Delivery</p>
                </div>
                <div className="flex flex-col items-center">
                    <i className="fa-solid fa-house-chimney text-green-500 text-3xl"></i>
                    <p className="text-center font-semibold">Order<br/>Delivered</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
export default Rough

