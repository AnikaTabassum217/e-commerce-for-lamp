import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaBoxOpen } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";

const ReasonToShop = () => {
    const data = [
        {
            icon: <TfiHeadphoneAlt size={48} />,
            title: '24/7 Friendly Support',
            description: 'Our support team always ready for you to 7 days a week'
        },
        {
            icon: <FaBoxOpen size={48}/>,
            title: '7 Days Easy Return',
            description: 'Product any fault within 7 days for an immediately exchange.'
        },
        {
            icon: <IoMdCheckmarkCircle size={48}/>,
            title: 'Quality Guaranteed',
            description: 'If your product are not perfect, return them for a full refund'
        },
    ]
    return (
        <>
            <div className="">
                <div className=" bg-gray-00 p-20 rounded-md">
                    <div className=" text-4xl font-bold font-serif text-center">Reasons to shop with us</div>
                    <div className="flex flex-col lg:flex-row  justify-center items-center gap-4">
                    {
                        data.map((d, index) => {
                            return (
                              
                                    <div key={index}>
                                       <div className="flex flex-col justify-center items-center gap-2 mt-16">
                                        <p>{d.icon}</p>
                                        <p className="text-2xl font-bold text-center">{d.title}</p>
                                        <p className="text-lg text-slate-00 text-center">{d.description}</p>
                                       </div>
                                    </div>
                                
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReasonToShop