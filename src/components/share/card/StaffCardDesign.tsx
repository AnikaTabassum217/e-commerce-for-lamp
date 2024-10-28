// import React from "react";
// import { SlUser } from "react-icons/sl";
// // import { SlUser } from "react-icons/sl";
// const StaffCardDesign = () => {
//     const staffInfo = [
//         {
//             name: 'Marvin McKinney',
//             designation: 'Web Designer',
//             icon: <SlUser size={60} />
//         },
//         {
//             name: 'Noah Anderson',
//             designation: 'Java Engineer',
//             icon: <SlUser size={60} />
//         },
//         {
//             name: 'Olivia Harper',
//             designation: 'UI Designer',
//             icon: <SlUser size={60} />
//         },
//         {
//             name: 'Benjamin Clarke',
//             designation: 'Product Marketer',
//             icon: <SlUser size={60} />
//         },
//         {
//             name: 'Benjamin Clarke',
//             designation: 'Product Marketer',
//             icon: <SlUser size={60} />
//         }
//     ]
//     return (
//         <>
//         {/* flex gap-10 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 text-center">
//                 {
//                     staffInfo.map((staff, index) => {
//                         return (
//                             <div key={index}>

//                                  <div className="flex flex-col justify-center item-center gap-4 bg-red-00 rounded-md border border-gray-200">
//                                  <div className="flex whitespace-nowrap justify-center items-center text-3xl font-bold p-4">{staff.name}</div>
//                                  <div className="flex justify-center items-center text-gray-00">{staff.designation}</div>
//                                  <div className="flex justify-center items-center mt-2 bg-gray-200 p-24 ">
//                                  {staff.icon}
//                                  </div>
//                                  </div>
                                 
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// export default StaffCardDesign;




import React from "react";
import { SlUser } from "react-icons/sl";

const StaffCardDesign = () => {
    const staffInfo = [
        {
            name: 'Marvin McKinney',
            designation: 'Web Designer',
            icon: <SlUser size={60} />
        },
        {
            name: 'Noah Anderson',
            designation: 'Java Engineer',
            icon: <SlUser size={60} />
        },
        {
            name: 'Olivia Harper',
            designation: 'UI Designer',
            icon: <SlUser size={60} />
        },
        {
            name: 'Benjamin Clarke',
            designation: 'Product Marketer',
            icon: <SlUser size={60} />
        },
        {
            name: 'Benjamin Clarke',
            designation: 'Product Marketer',
            icon: <SlUser size={60} />
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staffInfo.map((staff, index) => (
                <div key={index} className="  p-6 rounded-md border border-gray-00 flex flex-col items-center justify-between text-center">
                    <div className="text-2xl font-bold mb-2">{staff.name}</div>
                    <div className=" mb-4">{staff.designation}</div>
                    <div className="bg-gray-00 shadow-lg p-8 rounded-full flex justify-center items-center">
                        {staff.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StaffCardDesign;
